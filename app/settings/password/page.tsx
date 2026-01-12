import DashboardLayout from "@/components/DashboardLayout";
import SettingsLayout from "@/components/SettingsLayout";
import UpdatePasswordForm from "@/features/password/components/UpdatePasswordForm";

const PasswordPage = () => {
  return (
    <DashboardLayout>
      <SettingsLayout>
        <UpdatePasswordForm/>
      </SettingsLayout>
    </DashboardLayout>
  );
};

export default PasswordPage;