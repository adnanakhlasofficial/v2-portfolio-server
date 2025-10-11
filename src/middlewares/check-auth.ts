import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import { JwtPayload } from "jsonwebtoken";
import cookieNames from "../constants/cookie-names";
import AppError from "../helpers/AppError";
import { verifyToken } from "../utils/jwt";

const checkAuth =
  () => async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tokenName = cookieNames.accessToken;
      const token = req.cookies[tokenName] || req.headers.authorization;

      if (!token) {
        throw new AppError(httpStatus.FORBIDDEN, "Forbidden access.");
      }

      const decode = verifyToken(token);

      req.user = decode as JwtPayload;

      next();
    } catch (error) {
      next(error);
    }
  };
export default checkAuth;
