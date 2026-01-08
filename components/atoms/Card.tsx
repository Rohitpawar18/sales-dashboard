import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-7 ${className}`}>
      {children}
    </div>
  );
}