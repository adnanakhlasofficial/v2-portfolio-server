import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../utils/catch-async";
import cookieNames from "../constants/cookie-names";
import AppError from "../helpers/AppError";
import httpStatus from "http-status-codes";
import { verifyToken } from "../utils/jwt";
import { JwtPayload } from "jsonwebtoken";

const checkAuth = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const tokenName = cookieNames.accessToken;
    const token = req.cookies[tokenName] || req.headers.authorization;

    if (!token) {
      throw new AppError(httpStatus.FORBIDDEN, "Forbidden access.");
    }

    const decode = verifyToken(token);

    req.user = decode as JwtPayload;

    next();
  }
);

export default checkAuth;
