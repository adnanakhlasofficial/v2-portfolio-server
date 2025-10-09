import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";
import { env } from "../configs/env";

export const generateToken = async (data: JwtPayload) => {
  const token = jwt.sign(data, env.JWT_ACCESS_SECRET, {
    expiresIn: env.JWT_ACCESS_EXPIRES_AT,
  } as SignOptions);
  return token;
};
