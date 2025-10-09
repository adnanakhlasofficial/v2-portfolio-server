import { Request, Response } from "express";
import { catchAsync } from "../../utils/catch-async";
import { AuthService } from "./auth.service";
import { sendResponse } from "../../utils/send-response";
import httpStatus from "http-status-codes";
import { setCookie } from "../../utils/cookies";
import cookieNames from "../../constants/cookie-names";

const verify = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const data = await AuthService.verify(payload);

  setCookie(res, cookieNames.accessToken, data);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "User verified successfully.",
  });
});

export const AuthController = { verify };
