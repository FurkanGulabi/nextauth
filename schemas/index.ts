import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email field cannot be empty." })
    .email({ message: "Please enter a valid email address." }),

  password: z.string().min(1, { message: "Password field cannot be empty." }),
});

export const RegisterSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email field cannot be empty." })
    .email({ message: "Please enter a valid email address." }),

  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
  name: z.string().min(1, "Name is required"),
});
