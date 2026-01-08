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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 shadow-sm">
      {/* Threshold Filter */}
      <div className="space-y-3">
        <div>
          <span className="text-sm font-bold text-gray-900 block mb-1">Sales Threshold</span>
          <p className="text-xs text-gray-600">Filter data above specific amount</p>
        </div>
        <div className="flex gap-2 items-end">
          <div className="flex-1">
            <Input
              type="number"
              value={threshold}
              onChange={(e) => setThreshold(e.target.value)}
              placeholder="e.g., 10000"
              min="0"
            />
          </div>
          <Button onClick={handleThresholdSubmit} size="md" className="shrink-0">
            Apply
          </Button>
        </div>
      </div>

      {/* Chart Type Selector */}
      <div className="space-y-3">
        <div>
          <span className="text-sm font-bold text-gray-900 block mb-1">Visualization</span>
          <p className="text-xs text-gray-600">Choose chart style</p>
        </div>
        <Select
          options={chartTypes}
          value={currentChartType}
          onChange={(e) => onChartTypeChange(e.target.value as ChartType)}
        />
      </div>
    </div>
  );
}