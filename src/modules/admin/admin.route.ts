import { Router } from "express";
import { AdminController } from "./admin.controller";

const router = Router();

router.get("/public", AdminController.getAdminPublic);

export const AdminRouter = router;
