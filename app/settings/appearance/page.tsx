import DashboardLayout from "@/components/DashboardLayout";
import SettingsLayout from "@/components/SettingsLayout";
import AppearanceSettings from "@/features/appearance/components/AppearanceSettings";

const AppearancePage = () => {
  return (
    <DashboardLayout>
      <SettingsLayout>
        <AppearanceSettings/>
      </SettingsLayout>
    </DashboardLayout>
  );
};

export default AppearancePage;
