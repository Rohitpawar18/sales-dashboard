'use client';

import { useState } from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Select from '../atoms/Select';
import { ChartType } from '@/types';

interface FilterSectionProps {
  onThresholdChange: (threshold: number) => void;
  onChartTypeChange: (type: ChartType) => void;
  currentChartType: ChartType;
}

export default function FilterSection({
  onThresholdChange,
  onChartTypeChange,
  currentChartType,
}: FilterSectionProps) {
  const [threshold, setThreshold] = useState('10000');

  const handleThresholdSubmit = () => {
    const value = parseInt(threshold);
    if (!isNaN(value) && value >= 0) {
      onThresholdChange(value);
    }
  };

  const chartTypes: { value: ChartType; label: string }[] = [
    { value: 'bar', label: 'Bar Chart' },
    { value: 'line', label: 'Line Chart' },
    { value: 'pie', label: 'Pie Chart' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="space-y-3">
        <Input
          label="Sales Threshold (USD)"
          type="number"
          value={threshold}
          onChange={(e) => setThreshold(e.target.value)}
          placeholder="Enter minimum sales amount"
          min="0"
        />
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <p className="text-xs text-gray-600">Filter data showing sales above this amount</p>
        </div>
        <Button onClick={handleThresholdSubmit} className="w-full mt-2">
          Apply Filter
        </Button>
      </div>
      
      <div className="space-y-3">
        <Select
          label="Chart Type"
          options={chartTypes}
          value={currentChartType}
          onChange={(e) => onChartTypeChange(e.target.value as ChartType)}
        />
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
          </svg>
          <p className="text-xs text-gray-600">Choose visualization type for your data</p>
        </div>
      </div>
    </div>
  );
}