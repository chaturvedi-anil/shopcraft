import { z } from "zod";

const CATEGORY = [
  "ELECTRONICS",
  "FASHION",
  "BOOKS",
  "GROCERY",
  "HOME",
  "BEAUTY",
  "SPORTS",
  "TOYS",
  "AUTOMOTIVE",
  "JEWELRY",
  "HEALTH",
  "PET",
  "OFFICE",
  "OUTDOOR",
  "OTHER",
];

export const productSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(100, "Name must not exceed 100 characters"),

  price: z
    .number()
    .positive("Price must be greater than 0")
    .max(1000000, "Price must not exceed 1000000"),

  category: z.enum(CATEGORY),

  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description must not exceed 500 characters"),
});

export const productUpdateSchema = z.object({
  price: z
    .number()
    .positive("Price must be greater than 0")
    .max(1000000, "Price must not exceed 1000000")
    .optional(),

  category: z.enum(CATEGORY).optional(),

  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description must not exceed 500 characters")
    .optional(),
});
