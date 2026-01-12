import DashboardLayout from "@/components/DashboardLayout";
import SettingsLayout from "@/components/SettingsLayout";
import ProfileEditForm from "@/features/profile/components/ProfileEditForm";

const ProfilePage = () => {
  return (
    <DashboardLayout>
        <SettingsLayout>
            <ProfileEditForm/>
        </SettingsLayout>
    </DashboardLayout>
  );
};

export default ProfilePage;
