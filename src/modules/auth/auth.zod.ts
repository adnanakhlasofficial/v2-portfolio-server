import z from "zod";

export const verifySchema = z.object({
  username: z.string(),
  password: z.string(),
});
