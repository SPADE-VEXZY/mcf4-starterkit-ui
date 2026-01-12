"use client";

// components/dashboard/dashboard-layout.tsx

import DashboardSidebar from "@/features/dashboard/components/DashboardSidebar";
import { formatDashboardTitle } from "@/features/dashboard/utils/formatDashboardTitle";
import { FlipHorizontal } from "lucide-react";
import { usePathname } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const { title, isInSettings } = formatDashboardTitle(pathname);

  return (
    <div className="flex h-screen p-2">
      <DashboardSidebar />
      <main className="flex-1 bg-card rounded-xl">
        <div className="py-5 px-4 flex items-center gap-3">
          <FlipHorizontal />
          <span>
            {title} {isInSettings}
          </span>
        </div>

        <div className="bg-primary h-px" />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
