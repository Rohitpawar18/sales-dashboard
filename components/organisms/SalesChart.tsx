'use client';

import { useMemo, useState } from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import ChartCard from '../molecules/ChartCard';
import FilterSection from '../molecules/FilterSection';
import { salesData, chartConfig } from '@/lib/data';
import { filterSalesByThreshold } from '@/lib/utils';
import { ChartType } from '@/types';
import { formatCurrency } from '@/lib/utils';

export default function SalesChart() {
  const [threshold, setThreshold] = useState(0);
  const [chartType, setChartType] = useState<ChartType>('bar');

  const filteredData = useMemo(() => {
    return threshold > 0 ? filterSalesByThreshold(salesData, threshold) : salesData;
  }, [threshold]);

  const pieData = useMemo(() => {
    const totals = {
      '2022': filteredData.reduce((sum, item) => sum + item[2022], 0),
      '2023': filteredData.reduce((sum, item) => sum + item[2023], 0),
      '2024': filteredData.reduce((sum, item) => sum + item[2024], 0),
    };
    
    return Object.entries(totals).map(([year, value]) => ({
      name: year,
      value,
      color: chartConfig[year]?.color || '#8884d8',
    }));
  }, [filteredData]);

  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={320}>
            <BarChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
              <Tooltip formatter={(value) => formatCurrency(Number(value))} />
              <Legend />
              <Bar dataKey="2022" fill={chartConfig['2022'].color} name="2022 Sales" />
              <Bar dataKey="2023" fill={chartConfig['2023'].color} name="2023 Sales" />
              <Bar dataKey="2024" fill={chartConfig['2024'].color} name="2024 Sales" />
            </BarChart>
          </ResponsiveContainer>
        );

      case 'line':
        return (
          <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={320}>
            <LineChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
              <Tooltip formatter={(value) => formatCurrency(Number(value))} />
              <Legend />
              <Line
                type="monotone"
                dataKey="2022"
                stroke={chartConfig['2022'].color}
                strokeWidth={2}
                name="2022 Sales"
              />
              <Line
                type="monotone"
                dataKey="2023"
                stroke={chartConfig['2023'].color}
                strokeWidth={2}
                name="2023 Sales"
              />
              <Line
                type="monotone"
                dataKey="2024"
                stroke={chartConfig['2024'].color}
                strokeWidth={2}
                name="2024 Sales"
              />
            </LineChart>
          </ResponsiveContainer>
        );

      case 'pie':
        return (
          <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={320}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => {
                  const safePercent = percent ?? 0;
                  return `${name}: ${(safePercent * 100).toFixed(0)}%`;
                }}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => formatCurrency(Number(value))} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <FilterSection
        onThresholdChange={setThreshold}
        onChartTypeChange={setChartType}
        currentChartType={chartType}
      />
      
      <ChartCard
        title={`Sales Data ${threshold > 0 ? `(Above $${threshold.toLocaleString()})` : ''}`}
        description="Monthly sales comparison across 2022, 2023, and 2024"
      >
        {renderChart()}
      </ChartCard>
      
      <div className="flex items-start gap-2 p-4 bg-blue-50 border border-blue-200 rounded-xl">
        <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        <div>
          <p className="text-sm font-medium text-blue-900">
            Data is simulated based on typical e-commerce sales patterns.
            {threshold > 0 && ` Currently showing only data points above $${threshold.toLocaleString()}.`}
          </p>
        </div>
      </div>
    </div>
  );
}