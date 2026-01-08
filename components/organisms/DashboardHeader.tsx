import Card from '../atoms/Card';
import { formatCurrency } from '@/lib/utils';
import { salesData } from '@/lib/data';

export default function DashboardHeader() {
  const total2024 = salesData.reduce((sum, item) => sum + item[2024], 0);
  const total2023 = salesData.reduce((sum, item) => sum + item[2023], 0);
  const total2022 = salesData.reduce((sum, item) => sum + item[2022], 0);
  const growthRate = ((total2024 - total2023) / total2023 * 100).toFixed(1);

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-3xl font-bold text-gray-900">Sales Overview</h2>
        <p className="text-sm text-gray-600">Key metrics and year-over-year performance</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:border-green-300">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-green-700 mb-1 tracking-wider uppercase">2024 Sales</p>
              <p className="text-3xl font-bold text-gray-900 mb-2 truncate">{formatCurrency(total2024)}</p>
              <div className="inline-flex items-center px-2.5 py-1 bg-green-100 rounded-lg">
                <span className="text-green-700 font-semibold text-xs">↑ {growthRate}%</span>
              </div>
            </div>
            <div className="shrink-0 p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 hover:border-blue-300">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-blue-700 mb-1 tracking-wider uppercase">2023 Sales</p>
              <p className="text-3xl font-bold text-gray-900 mb-2 truncate">{formatCurrency(total2023)}</p>
              <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2.5 py-1 rounded-lg inline-block">Previous year</span>
            </div>
            <div className="shrink-0 p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 hover:border-purple-300">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-purple-700 mb-1 tracking-wider uppercase">2022 Sales</p>
              <p className="text-3xl font-bold text-gray-900 mb-2 truncate">{formatCurrency(total2022)}</p>
              <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-2.5 py-1 rounded-lg inline-block">Base year</span>
            </div>
            <div className="shrink-0 p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200 hover:border-orange-300">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-orange-700 mb-1 tracking-wider uppercase">Best Month</p>
              <p className="text-3xl font-bold text-gray-900 mb-2 truncate">December</p>
              <p className="text-xs font-semibold text-orange-600">{formatCurrency(45000)}</p>
            </div>
            <div className="shrink-0 p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}