import z from "zod";

export const projectZodSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  category: z.string().min(1, "Category is required"),
  tags: z.array(z.string()).nonempty("At least one tag is required"),
  // content: z.string().min(1, "Content is required").nullable().default(null),
  thumbnail: z.string().url("Thumbnail must be a valid URL"),
  liveLink: z.string().url("Live link must be a valid URL").optional(),
  clientRepoLink: z
    .string()
    .url("Client repo link must be a valid URL")
    .optional(),
  serverRepoLink: z
    .string()
    .url("Server repo link must be a valid URL")
    .optional(),
});
