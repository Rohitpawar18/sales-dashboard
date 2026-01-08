import Card from '../atoms/Card';
import { formatCurrency } from '@/lib/utils';
import { salesData } from '@/lib/data';

export default function DashboardHeader() {
  const total2024 = salesData.reduce((sum, item) => sum + item[2024], 0);
  const total2023 = salesData.reduce((sum, item) => sum + item[2023], 0);
  const total2022 = salesData.reduce((sum, item) => sum + item[2022], 0);
  const growthRate = ((total2024 - total2023) / total2023 * 100).toFixed(1);

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Sales Overview</h2>
        <p className="text-sm text-gray-600 mt-1">Year-over-year performance metrics</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:border-green-300">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-semibold text-green-700 mb-2 tracking-wide">2024 TOTAL SALES</p>
              <p className="text-4xl font-bold text-gray-900 mb-3">{formatCurrency(total2024)}</p>
              <div className="inline-flex items-center px-3 py-1.5 bg-green-100 rounded-full">
                <svg className="w-4 h-4 text-green-600 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span className="text-green-700 font-bold text-sm">{growthRate}% vs 2023</span>
              </div>
            </div>
            <div className="p-4 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 hover:border-blue-300">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-semibold text-blue-700 mb-2 tracking-wide">2023 TOTAL SALES</p>
              <p className="text-4xl font-bold text-gray-900 mb-3">{formatCurrency(total2023)}</p>
              <p className="text-xs font-medium text-blue-600 bg-blue-100 px-3 py-1.5 rounded-full inline-block">Previous Year</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 hover:border-purple-300">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-semibold text-purple-700 mb-2 tracking-wide">2022 TOTAL SALES</p>
              <p className="text-4xl font-bold text-gray-900 mb-3">{formatCurrency(total2022)}</p>
              <p className="text-xs font-medium text-purple-600 bg-purple-100 px-3 py-1.5 rounded-full inline-block">Base Year</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200 hover:border-orange-300">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-semibold text-orange-700 mb-2 tracking-wide">BEST MONTH 2024</p>
              <p className="text-4xl font-bold text-gray-900 mb-3">December</p>
              <p className="text-sm font-semibold text-orange-600">{formatCurrency(45000)}</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}