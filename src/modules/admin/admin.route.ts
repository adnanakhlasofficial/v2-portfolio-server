import { Router } from "express";
import { AdminController } from "./admin.controller";
import checkAuth from "../../middlewares/check-auth";
import { checkRequest } from "../../middlewares/check-request";
import { adminZodSchema } from "./admin.zod";

const router = Router();

router.get("/public", AdminController.getAdminPublic);
router.get("/private", checkAuth(), AdminController.getAdminPrivate);
router.post(
  "/",
  checkAuth(),
  checkRequest(adminZodSchema),
  AdminController.updateAdmin
);

export const AdminRouter = router;
