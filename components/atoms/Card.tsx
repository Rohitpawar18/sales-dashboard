import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}

export default function Card({ children, className = '', interactive = true }: CardProps) {
  return (
    <div className={`bg-white rounded-2xl border border-gray-200 p-6 transition-all duration-300 ${
      interactive ? 'shadow-sm hover:shadow-lg hover:border-gray-300 hover:-translate-y-0.5' : 'shadow-sm'
    } ${className}`}>
      {children}
    </div>
  );
}