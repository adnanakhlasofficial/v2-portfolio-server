import { Router } from "express";
import { ProjectController } from "./project.controller";
import checkAuth from "../../middlewares/check-auth";
import { checkRequest } from "../../middlewares/check-request";
import { projectZodSchema, UpdateProjectZodSchema } from "./project.zod";

const router = Router();

router.post(
  "/",
  checkAuth(),
  checkRequest(projectZodSchema),
  ProjectController.addProject
);
router.get("/", ProjectController.getProjects);
router.get("/:slug", ProjectController.getSingleProjects);
router.delete("/:slug", checkAuth(), ProjectController.deleteProject);
router.put(
  "/:slug",
  checkAuth(),
  checkRequest(UpdateProjectZodSchema),
  ProjectController.updateProject
);

export const ProjectRouter = router;
