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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 rounded-xl border border-gray-200">
      {/* Threshold Filter */}
      <div className="space-y-3">
        <label className="block">
          <span className="text-sm font-semibold text-gray-900">Sales Threshold Filter</span>
          <p className="text-xs text-gray-600 mt-1">Show data above a specific amount</p>
        </label>
        <div className="flex gap-2">
          <Input
            type="number"
            value={threshold}
            onChange={(e) => setThreshold(e.target.value)}
            placeholder="e.g., 10000"
            min="0"
          />
          <Button onClick={handleThresholdSubmit} className="whitespace-nowrap">
            Apply
          </Button>
        </div>
      </div>

      {/* Chart Type Selector */}
      <div className="space-y-3">
        <label className="block">
          <span className="text-sm font-semibold text-gray-900">Chart Type</span>
          <p className="text-xs text-gray-600 mt-1">Choose visualization style</p>
        </label>
        <Select
          options={chartTypes}
          value={currentChartType}
          onChange={(e) => onChartTypeChange(e.target.value as ChartType)}
        />
      </div>
    </div>
  );
}