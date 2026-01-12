"use client";

import Link from "next/link";
import { settingsNav } from "../config/settingsNav";

interface Props {
  pathname: string;
}

const SettingsSidebar = ({ pathname }: Props) => {
  const active = pathname.split("/")[2];

  return (
    <div className="w-[350px] ps-3 pe-11">
      <div className="flex flex-col gap-0.5">
        {settingsNav.map((item) => (
          <Link
            key={item.slug}
            href={item.href}
            className={`text-sm font-medium duration-200 py-2.5 px-3.5 ${
              active === item.slug
                ? "bg-primary hover:bg-primary/80"
                : "hover:bg-secondary"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SettingsSidebar;
