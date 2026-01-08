'use client';

import { useEffect, useMemo, useState } from 'react';
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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
    if (!isMounted) {
      return <div className="h-full rounded-lg bg-gray-100 animate-pulse" />;
    }

    switch (chartType) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={320}>
            <BarChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" />
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
              <CartesianGrid strokeDasharray="3 3" />
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
    <div>
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
      
      <div className="mt-4 text-sm text-gray-600">
        <p>
          <strong>Note:</strong> Data is simulated based on typical e-commerce sales patterns.
          {threshold > 0 && ` Showing only data points above $${threshold.toLocaleString()}.`}
        </p>
      </div>
    </div>
  );
}