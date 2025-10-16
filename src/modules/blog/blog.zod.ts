import z from "zod";

export const blogPostZodSchema = z.object({
  title: z.string(),
  description: z
    .string()
    .min(10, { message: "Description must be at least 5 characters" })
    .max(150, { message: "Description must be at most 50 characters" }),
  thumbnail: z.string().url({ message: "Thumbnail must be a valid URL" }),
  content: z.string().min(10, { message: "Content cannot be empty" }),
  published: z.boolean().default(false),
});

export const blogPutZodSchema = z.object({
  title: z.string().optional(),
  description: z
    .string()
    .min(10, { message: "Description must be at least 5 characters" })
    .max(150, { message: "Description must be at most 50 characters" })
    .optional(),
  thumbnail: z
    .string()
    .url({ message: "Thumbnail must be a valid URL" })
    .optional(),
  content: z
    .string()
    .min(10, { message: "Content cannot be empty" })
    .optional(),
  published: z.boolean().optional(),
});
