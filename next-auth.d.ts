import { UserRole } from "@prisma/client";
import { type DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: {
      id: string | any;
      role: "ADMIN" | "USER"; // role can be either "ADMIN" or "USER"
    } & DefaultUser;
  }

  interface User extends DefaultUser {
    role: "ADMIN" | "USER"; // role can be either "ADMIN" or "USER"
  }
}

export type ExtendedUser = DefaultSession["user"] & { role: UserRole };
