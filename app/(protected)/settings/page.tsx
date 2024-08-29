"use client";

import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";

const SettingsPage = () => {
  const user = useCurrentUser();

  const onClick = () => {
    signOut();
  };
  return (
    <div className="p-10 rounded-xl  bg-foreground-50">
      <Button onClick={onClick} type="submit">
        Sign Out
      </Button>
    </div>
  );
};

export default SettingsPage;
