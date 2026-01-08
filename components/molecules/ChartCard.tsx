import { ReactNode } from 'react';

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
    <div className={`space-y-5 ${className}`}>
      <div className="space-y-1">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        {description && (
          <p className="text-sm text-gray-600">{description}</p>
        )}
      </div>
      <div className="relative h-96 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 shadow-sm p-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
        <div className="relative h-full">
          {children}
        </div>
      </div>
    </div>
  );
}