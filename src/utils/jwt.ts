import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";
import { env } from "../configs/env";
import AppError from "../helpers/AppError";
import httpStatus from "http-status-codes";

export const generateToken = async (data: JwtPayload) => {
  const token = jwt.sign(data, env.JWT_ACCESS_SECRET, {
    expiresIn: env.JWT_ACCESS_EXPIRES_AT,
  } as SignOptions);
  return token;
};

export const verifyToken = (token: string) => {
  const decode = jwt.verify(token, env.JWT_ACCESS_SECRET);

  if (!decode) {
    throw new AppError(httpStatus.UNAUTHORIZED, "Unauthorized access");
  }

  return decode;
};
