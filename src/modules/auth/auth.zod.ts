import z from "zod";

export const verifyZodSchema = z.object({
  username: z.string(),
  password: z.string(),
});
