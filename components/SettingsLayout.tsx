import SettingsHeader from "@/features/settings/components/SettingsHeader";
import SettingsSidebar from "@/features/settings/components/SettingsSidebar";

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[90vh] overflow-y-scroll">
      <SettingsHeader />

      <div className="flex">
        <SettingsSidebar />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default SettingsLayout;
