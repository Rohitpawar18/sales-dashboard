import DashboardLayout from "@/components/templates/DashboardLayout";
import DashboardHeader from "@/components/organisms/DashboardHeader";
import SalesChart from "@/components/organisms/SalesChart";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8 sm:space-y-10 lg:space-y-12">
        {/* Header Section */}
        <div className="pt-2 sm:pt-4 space-y-2">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl">Monitor your sales metrics, track performance trends, and gain actionable insights</p>
        </div>

        {/* Stats Cards */}
        <section className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
          <DashboardHeader />
        </section>

        {/* Charts Section */}
        <section className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
          <SalesChart />
        </section>
      </div>
    </DashboardLayout>
  );
}