import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import cookieNames from "../../constants/cookie-names";
import { catchAsync } from "../../utils/catch-async";
import { setCookie } from "../../utils/cookies";
import { sendResponse } from "../../utils/send-response";
import { AuthService } from "./auth.service";

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
