import z from "zod";

export const adminSchema = z.object({
  username: z.string().optional(),
  name: z.string().optional(),
  email: z.email().optional(),
  password: z.string().optional(),
  profile: z.string().optional(),
  blurProfile: z.string().optional(),
  bio: z.string().optional(),
  description: z.string().optional(),
  story: z.string().optional(),
});
