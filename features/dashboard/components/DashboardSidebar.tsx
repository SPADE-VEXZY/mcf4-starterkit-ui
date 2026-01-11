import Link from "next/link";
import DashboardSidebarNav from "./DashboardSidebarNav";
import DashboardUserDropdown from "./DashboardUserDropdown";

const DashboardSidebar = () => {
  return (
    <aside className="hidden py-2 pe-1 lg:flex flex-col w-[250px]">
      {/* Logo */}
      <Link href={"/dashboard"} className="flex items-center gap-2 ms-3">
        <img src="/laravel-logo.png" alt="laravel-logo" className="size-5" />
        <span>Laravel Starter Kit</span>
      </Link>

      {/* Navigation */}
      <DashboardSidebarNav />

      {/* User menu */}
      <DashboardUserDropdown />
    </aside>
  );
};

export default DashboardSidebar;
