import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import React from "react";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";
import { Metadata } from "next";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const Home = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold drop-shadow-md",
            font.className
          )}
        >
          Auth
        </h1>
        <p className="italic text-muted-foreground">
          &quot;User Identity Check Service&quot;
        </p>
        <div>
          <LoginButton>
            <Button size={"lg"}>Sign in</Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
};

export default Home;
