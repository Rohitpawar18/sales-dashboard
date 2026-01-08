import { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      <main className="max-w-[1400px] mx-auto">
        <div className="py-6 md:py-8">
          {children}
        </div>
      </main>
      
      <footer className="mt-16 border-t border-gray-200 bg-white/50 backdrop-blur-sm py-8">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              Sales Analytics Dashboard • Built with Next.js 15 & Atomic Design
            </p>
            <p className="text-xs text-gray-500">
              Data is simulated for demonstration purposes
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}