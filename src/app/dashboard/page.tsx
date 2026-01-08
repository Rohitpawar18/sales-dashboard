import DashboardLayout from "@/components/templates/DashboardLayout";
import DashboardHeader from "@/components/organisms/DashboardHeader";
import SalesChart from "@/components/organisms/SalesChart";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="p-4 md:p-8">
        <DashboardHeader />
        <div className="mt-8">
          <SalesChart />
        </div>
      </div>
    </DashboardLayout>
  );
}