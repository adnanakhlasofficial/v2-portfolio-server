import { Router } from "express";
import { AdminRouter } from "../modules/admin/admin.route";
import { AuthRouter } from "../modules/auth/auth.route";
import { ProjectRouter } from "../modules/project/project.route";
import { ExperienceRouter } from "../modules/experience/experience.route";

interface IRoute {
  path: string;
  router: Router;
}

const router = Router();

const routes: IRoute[] = [
  {
    path: "/auth",
    router: AuthRouter,
  },
  {
    path: "/admin",
    router: AdminRouter,
  },
  {
    path: "/project",
    router: ProjectRouter,
  },
  {
    path: "/experience",
    router: ExperienceRouter,
  },
];

routes.forEach((route: IRoute) => {
  router.use(route.path, route.router);
});

export default router;
