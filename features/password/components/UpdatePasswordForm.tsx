"use client";

import React, { FC, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const UpdatePasswordForm: FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // submit logic later
  };

  return (
    <div className="max-w-xl space-y-10">
      {/* Update Password */}
      <div className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl">Update password</h2>
          <p className="text-sm text-muted-foreground">
            Ensure your account is using a long, random password to stay secure
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="current_password">Current password</Label>
              <Input
                id="current_password"
                type="password"
                placeholder="Current password"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="new_password">New password</Label>
              <Input
                id="new_password"
                type="password"
                placeholder="New password"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm_password">Confirm password</Label>
              <Input
                id="confirm_password"
                type="password"
                placeholder="Confirm password"
              />
            </div>

            <Button type="submit" className="px-6">
              Save password
            </Button>
          </div>
        </form>
      </div>

      {/* Password Warning */}
      <div className="space-y-6">
        <div className="space-y-1">
          <h3 className="text-xl">Password security</h3>
          <p className="text-sm text-muted-foreground">
            Important information about password safety
          </p>
        </div>

        <Card className="border-yellow-200 bg-yellow-50">
          <CardContent className="space-y-2">
            <p className="text-sm font-semibold text-yellow-700">
              Recommendation
            </p>
            <p className="text-sm text-yellow-600">
              Use at least 8 characters with a mix of letters, numbers, and symbols.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UpdatePasswordForm;
