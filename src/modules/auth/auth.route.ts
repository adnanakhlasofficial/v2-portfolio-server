import { Router } from "express";
import { AuthController } from "./auth.controller";
import { checkRequest } from "../../middlewares/check-request";
import { verifySchema } from "./auth.zod";

const router = Router();

router.post("/verify", checkRequest(verifySchema), AuthController.verify);

export const AuthRouter = router;
