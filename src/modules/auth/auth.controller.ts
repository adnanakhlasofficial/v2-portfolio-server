import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import cookieNames from "../../constants/cookie-names";
import { catchAsync } from "../../utils/catch-async";
import { clearCookie, setCookie } from "../../utils/cookies";
import { sendResponse } from "../../utils/send-response";
import { AuthService } from "./auth.service";

const verify = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const data = await AuthService.verify(payload);

  setCookie(res, cookieNames.accessToken, data, 60 * 60);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "User verified successfully.",
  });
});

const disconnect = catchAsync(async (req: Request, res: Response) => {
  clearCookie(res, cookieNames.accessToken);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "User disconnected successfully.",
  });
});

const checkConnect = catchAsync(async (req: Request, res: Response) => {
  const payload = req.user;
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Check connection succeed",
    data: payload,
  });
});

export const AuthController = { verify, disconnect, checkConnect };
