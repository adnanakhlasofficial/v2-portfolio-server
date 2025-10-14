import z from "zod";

export const experienceZodSchema = z.object({
  role: z.string().min(1, "Role is required"),
  company: z.string().min(1, "Company is required"),
  location: z.string().min(1, "Location is required"),
  startDate: z.iso.datetime(),
  endDate: z.iso.datetime().optional(),
  description: z.string().min(1, "Description is required"),
  achievement: z.array(z.string().min(1, "Achievement is required")),
  tags: z.array(z.string().min(1, "Tags is required")),
});
