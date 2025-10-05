import { z } from "zod";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{8,}$/;

export const registerSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters long.")
    .max(255, "Name must not exceed 255 characters"),
  email: z.email("Please enter a valid email address."),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long.")
    .max(16, "Password must not exceed 16 characters.")
    .regex(
      passwordRegex,
      "Password must be at least 6 characters long and include uppercase, lowercase, number, and special character."
    ),
});

export const loginSchema = z.object({
  email: z.email("Please enter a valid email address."),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long.")
    .max(16, "Password must not exceed 16 characters.")
    .regex(
      passwordRegex,
      "Password must be at least 6 characters long and include uppercase, lowercase, number, and special character."
    ),
});
