import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUp, LogOut, Settings } from "lucide-react";
import Link from "next/link";

const DashboardUserDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full p-2 flex items-center gap-3 hover:bg-secondary duration-200">
        <img
          src="/user-logo.jpg"
          alt="user"
          className="rounded-full size-8 object-cover object-top"
        />
        <span>user</span>
        <ArrowUp className="ms-auto" />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-64">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="flex gap-3 p-3">
            <img
              src="/user-logo.jpg"
              alt="user"
              className="rounded-full size-8 object-cover"
            />
            <div>
              <p className="font-medium">user</p>
              <p className="text-muted-foreground text-sm">user@gmail.com</p>
            </div>
          </DropdownMenuLabel>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <Link href="/settings/profile" className="gap-3 items-center">
            <DropdownMenuItem className={"m-1"}>
              <Settings />
              Settings
            </DropdownMenuItem>
          </Link>

          <DropdownMenuSeparator />

          <Link href="/" className="gap-3 items-center">
            <DropdownMenuItem className="m-1">
              <LogOut />
              Log out
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DashboardUserDropdown;
