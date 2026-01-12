"use client";

import SettingsHeader from "@/features/settings/components/SettingsHeader";
import SettingsSidebar from "@/features/settings/components/SettingsSidebar";
import { usePathname } from "next/navigation";

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div>
      <SettingsHeader pathname={pathname} />

      <div className="flex">
        <SettingsSidebar pathname={pathname} />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default SettingsLayout;
