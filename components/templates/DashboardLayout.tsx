import { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 py-12">
        {children}
      </main>
      
      <footer className="mt-20 border-t border-gray-200 bg-white py-8">
        <div className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              Sales Dashboard • Built with Next.js
            </p>
            <p className="text-xs text-gray-500">
              © 2026 Analytics. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}