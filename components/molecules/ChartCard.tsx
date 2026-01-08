import { ReactNode } from 'react';
import Card from '../atoms/Card';

interface ChartCardProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export default function ChartCard({
  title,
  description,
  children,
  className = '',
}: ChartCardProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      <div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        {description && (
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        )}
      </div>
      <div className="h-96 bg-white rounded-xl border border-gray-100 p-4">
        {children}
      </div>
    </div>
  );
}