import { Router } from "express";
import { AdminController } from "./admin.controller";
import checkAuth from "../../middlewares/check-auth";

const router = Router();

router.get("/public", AdminController.getAdminPublic);
router.get("/private", checkAuth(), AdminController.getAdminPrivate);
router.post("/", checkAuth(), AdminController.updateAdmin);

export const AdminRouter = router;
