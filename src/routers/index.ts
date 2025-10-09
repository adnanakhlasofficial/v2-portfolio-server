import { Router } from "express";
import { AdminRouter } from "../modules/admin/admin.route";
import { AuthRouter } from "../modules/auth/auth.route";

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
];

routes.forEach((route: IRoute) => {
  router.use(route.path, route.router);
});

export default router;
