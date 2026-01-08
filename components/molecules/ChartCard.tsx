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
    <Card className={className}>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {description && (
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        )}
      </div>
      <div className="h-80">{children}</div>
    </Card>
  );
}