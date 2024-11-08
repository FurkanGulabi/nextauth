"use client";

import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps {
  href: string;
  label: string;
}

export const BackButton = ({ label, href }: BackButtonProps) => {
  return (
    <Button asChild variant={"link"} className="font-normal w-full" size={"sm"}>
      <Link href={href}>{label}</Link>
    </Button>
  );
};
