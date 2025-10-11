import { Router } from "express";
import checkAuth from "../../middlewares/check-auth";
import { checkRequest } from "../../middlewares/check-request";
import { AuthController } from "./auth.controller";
import { verifyZodSchema } from "./auth.zod";

const router = Router();

router.post("/verify", checkRequest(verifyZodSchema), AuthController.verify);
router.post("/disconnect", AuthController.disconnect);
router.get("/check", checkAuth(), AuthController.checkConnect);

export const AuthRouter = router;
