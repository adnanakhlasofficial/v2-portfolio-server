import { Router } from "express";
import { ProjectController } from "./project.controller";
import checkAuth from "../../middlewares/check-auth";
import { checkRequest } from "../../middlewares/check-request";
import { projectZodSchema } from "./project.zod";

const router = Router();

router.post(
  "/",
  checkAuth(),
  checkRequest(projectZodSchema),
  ProjectController.addProject
);

export const ProjectRouter = router;
