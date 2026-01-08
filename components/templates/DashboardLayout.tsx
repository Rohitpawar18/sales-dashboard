import { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <main className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {children}
      </main>
      
      <footer className="mt-20 border-t border-gray-200 bg-white/50 backdrop-blur-sm py-8 sm:py-12">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-sm text-gray-600 font-medium">
              Sales Dashboard • Built with Next.js & React
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