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
    <div className="flex flex-col md:flex-row gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
      <div className="flex-1">
        <div className="flex gap-2 items-end">
          <Input
            label="Sales Threshold (USD)"
            type="number"
            value={threshold}
            onChange={(e) => setThreshold(e.target.value)}
            placeholder="Enter minimum sales amount"
            min="0"
          />
          <Button onClick={handleThresholdSubmit} className="h-10">
            Apply Filter
          </Button>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Filter data showing sales above this amount
        </p>
      </div>
      
      <div className="flex-1">
        <Select
          label="Chart Type"
          options={chartTypes}
          value={currentChartType}
          onChange={(e) => onChartTypeChange(e.target.value as ChartType)}
        />
      </div>
    </div>
  );
}