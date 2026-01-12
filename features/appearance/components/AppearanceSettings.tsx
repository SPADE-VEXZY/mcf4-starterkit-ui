

"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";

import { Button } from "@/components/ui/button";

const AppearanceSettings = () => {
  const { theme, setTheme } = useTheme();

  const active =
    "bg-background text-foreground shadow-sm";
  const inactive =
    "text-muted-foreground hover:bg-muted";

  return (
    <div className="max-w-md space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-xl font-semibold">Appearance settings</h2>
        <p className="text-sm text-muted-foreground">
          Update your account&apos;s appearance settings
        </p>
      </div>

      {/* Theme selector */}
      <div className="rounded-lg bg-muted p-2">
        <div className="flex gap-2">
          <Button
            type="button"
            variant="ghost"
            onClick={() => setTheme("light")}
            className={`flex-1 justify-center gap-2 ${
              theme === "light" ? active : inactive
            }`}
          >
            <Sun className="h-4 w-4" />
            Light
          </Button>

          <Button
            type="button"
            variant="ghost"
            onClick={() => setTheme("dark")}
            className={`flex-1 justify-center gap-2 ${
              theme === "dark" ? active : inactive
            }`}
          >
            <Moon className="h-4 w-4" />
            Dark
          </Button>

          <Button
            type="button"
            variant="ghost"
            onClick={() => setTheme("system")}
            className={`flex-1 justify-center gap-2 ${
              theme === "system" ? active : inactive
            }`}
          >
            <Monitor className="h-4 w-4" />
            System
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppearanceSettings;
