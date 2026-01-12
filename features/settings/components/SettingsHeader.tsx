"use client";

import { FlipHorizontal } from "lucide-react";
import { formatSettingsTitle } from "../utils/format-settings-title";

interface Props {
  pathname: string;
}

const SettingsHeader = ({ pathname }: Props) => {
  const title = formatSettingsTitle(pathname);

  return (
    <>
      <div className="py-5 px-4 flex items-center gap-3">
        <FlipHorizontal />
        <span>{title} Settings</span>
      </div>

      <div className="bg-primary h-px" />

      <div className="mt-6 mb-9 px-4">
        <h3 className="text-xl font-semibold mb-0.5">Settings</h3>
        <p className="text-muted-foreground font-light">
          Manage your profile and account settings
        </p>
      </div>
    </>
  );
};

export default SettingsHeader;
