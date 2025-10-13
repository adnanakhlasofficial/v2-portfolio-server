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
router.get("/", ProjectController.getProjects);
router.get("/:slug", ProjectController.getSingleProjects);

export const ProjectRouter = router;
