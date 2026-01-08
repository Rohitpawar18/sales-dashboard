import { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto">
        <div className="py-6">
          {children}
        </div>
      </main>
      
      <footer className="mt-8 border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-600 text-sm">
            Sales Analytics Dashboard • Built with Next.js 15 & Atomic Design • Data is simulated
          </p>
        </div>
      </footer>
    </div>
  );
}