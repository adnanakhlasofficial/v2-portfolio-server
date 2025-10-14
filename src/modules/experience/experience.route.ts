import { Router } from "express";
import { ExperienceController } from "./experience.controller";
import checkAuth from "../../middlewares/check-auth";
import { checkRequest } from "../../middlewares/check-request";
import { experienceZodSchema } from "./experience.zod";

const router = Router();

router.post(
  "/",
  checkAuth(),
  checkRequest(experienceZodSchema),
  ExperienceController.addExperience
);

router.get("/", ExperienceController.getExperiences);

export const ExperienceRouter = router;
