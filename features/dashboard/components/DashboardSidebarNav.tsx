"use client";

// components/dashboard/sidebar-nav.tsx
import {
  BookIcon,
  CuboidIcon,
  Folder,
  LayoutDashboardIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardSidebarNav = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="flex flex-col mt-6">
        <p className="text-stone-300 text-sm mb-2 ms-3">Platform</p>

        <NavItem
          href="/dashboard"
          icon={<LayoutDashboardIcon />}
          active={pathname === "/dashboard"}
        >
          Dashboard
        </NavItem>

        <NavItem
          href="/dashboard/example-page"
          icon={<CuboidIcon />}
          active={pathname === "/dashboard/example-page"}
        >
          Example Page
        </NavItem>
      </div>

      <div className="mt-auto mx-2 mb-4">
        <NavItem
          tagLink={true}
          href="https://github.com/SPADE-VEXZY/mcf4-starterkit-ui"
          icon={<Folder />}
          muted
        >
          Repository
        </NavItem>

        <NavItem
          tagLink={true}
          href="https://github.com/SPADE-VEXZY/mcf4-starterkit-ui"
          icon={<BookIcon />}
          muted
        >
          Documentation
        </NavItem>
      </div>
    </>
  );
};

export default DashboardSidebarNav;

/* Helper component */
const NavItem = ({
  href,
  icon,
  children,
  active = false,
  tagLink = false,
  muted,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  active?: boolean;
  tagLink?: boolean;
  muted?: boolean;
}) => (
  <Link
    href={href}
    {...(tagLink ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    className={`flex items-center gap-2 p-2 duration-200 mx-1 ${
      muted ? "text-muted-foreground" : ""
    } ${active ? "bg-primary hover:bg-primary/80" : "hover:bg-secondary/50"}`}
  >
    {icon}
    <span>{children}</span>
  </Link>
);
