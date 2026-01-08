import DashboardLayout from "@/components/templates/DashboardLayout";
import DashboardHeader from "@/components/organisms/DashboardHeader";
import SalesChart from "@/components/organisms/SalesChart";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-10">
        {/* Header Section */}
        <div className="pt-2">
          <h1 className="text-6xl font-bold text-gray-900 mb-3">Dashboard</h1>
          <p className="text-lg text-gray-600">View your sales metrics and performance data</p>
        </div>

        {/* Stats Cards */}
        <section className="rounded-2xl p-10 bg-white border border-gray-100 shadow-sm">
          <DashboardHeader />
        </section>

        {/* Charts Section */}
        <section className="rounded-2xl p-10 bg-white border border-gray-100 shadow-sm">
          <SalesChart />
        </section>
      </div>
    </DashboardLayout>
  );
}