import Card from '../atoms/Card';
import { formatCurrency } from '@/lib/utils';
import { salesData } from '@/lib/data';

export default function DashboardHeader() {
  const total2024 = salesData.reduce((sum, item) => sum + item[2024], 0);
  const total2023 = salesData.reduce((sum, item) => sum + item[2023], 0);
  const total2022 = salesData.reduce((sum, item) => sum + item[2022], 0);
  const growthRate = ((total2024 - total2023) / total2023 * 100).toFixed(1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">2024 Total Sales</p>
            <p className="text-2xl font-bold text-gray-800">{formatCurrency(total2024)}</p>
          </div>
          <div className="p-3 bg-green-100 rounded-lg">
            <span className="text-green-600 font-semibold">↑ {growthRate}%</span>
          </div>
        </div>
      </Card>

      <Card>
        <div>
          <p className="text-sm text-gray-600">2023 Total Sales</p>
          <p className="text-2xl font-bold text-gray-800">{formatCurrency(total2023)}</p>
          <p className="text-xs text-gray-500 mt-1">Previous Year</p>
        </div>
      </Card>

      <Card>
        <div>
          <p className="text-sm text-gray-600">2022 Total Sales</p>
          <p className="text-2xl font-bold text-gray-800">{formatCurrency(total2022)}</p>
          <p className="text-xs text-gray-500 mt-1">Base Year</p>
        </div>
      </Card>

      <Card>
        <div>
          <p className="text-sm text-gray-600">Best Month (2024)</p>
          <p className="text-2xl font-bold text-gray-800">December</p>
          <p className="text-xs text-gray-500 mt-1">{formatCurrency(45000)}</p>
        </div>
      </Card>
    </div>
  );
}