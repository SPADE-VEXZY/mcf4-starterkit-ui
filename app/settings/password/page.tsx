import DashboardLayout from "@/components/DashboardLayout";
import SettingsLayout from "@/components/SettingsLayout";

const PasswordPage = () => {
  return (
    <DashboardLayout>
      <SettingsLayout>
        <div className="max-w-3xl p-8">
          {/* Header */}
          <h1 className="text-2xl font-semibold ">
            Update password
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Ensure your account is using a long, random password to stay secure
          </p>

          {/* Form */}
          <form className="mt-8 space-y-6">
            {/* Current password */}
            <div>
              <label className="block text-sm font-medium ">
                Current password
              </label>
              <input
                type="password"
                placeholder="Current password"
                className="mt-2 block w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* New password */}
            <div>
              <label className="block text-sm font-medium ">
                New password
              </label>
              <input
                type="password"
                placeholder="New password"
                className="mt-2 block w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Confirm password */}
            <div>
              <label className="block text-sm font-medium ">
                Confirm password
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                className="mt-2 block w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Save password
              </button>
            </div>
          </form>
        </div>
      </SettingsLayout>
    </DashboardLayout>
  );
};

export default PasswordPage;
