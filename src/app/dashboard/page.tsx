import DashboardLayout from "@/components/templates/DashboardLayout";
import DashboardHeader from "@/components/organisms/DashboardHeader";
import SalesChart from "@/components/organisms/SalesChart";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="px-4 md:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Sales Dashboard</h1>
          <p className="text-gray-500 text-lg">Monitor your sales performance and trends</p>
        </div>
        <DashboardHeader />
        <div className="mt-8">
          <SalesChart />
        </div>
      </div>
    </DashboardLayout>
  );
}