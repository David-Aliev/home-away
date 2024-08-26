"use client";

import { SignOutButton } from "@clerk/nextjs";
import { useToast } from "../ui/use-toast";

function SignOut() {
  const { toast } = useToast();
  const logoutHandle = () => {
    toast({ description: "you have been sign out" });
  };
  return (
    <SignOutButton redirectUrl="'">
      <button className="w-full text-left" onClick={logoutHandle}>
        Logout
      </button>
    </SignOutButton>
  );
}

export default SignOut;
