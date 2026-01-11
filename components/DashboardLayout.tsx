// components/dashboard/dashboard-layout.tsx

import DashboardSidebar from "@/features/dashboard/components/DashboardSidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen p-2">
      <DashboardSidebar />
      <main className="flex-1 bg-card rounded-xl">{children}</main>
    </div>
  );
};

export default DashboardLayout;
