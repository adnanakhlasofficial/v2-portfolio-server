import AppError from "../../helpers/AppError";
import { prisma } from "../../libs/prisma";
import { generateToken } from "../../utils/jwt";
import { TUser } from "./auth.interface";
import bcrypt from "bcrypt";
import httpStatus from "http-status-codes";

const verify = async (payload: TUser) => {
  const data = await prisma.admin.findUnique({
    where: {
      username: payload.username,
    },
    select: {
      id: true,
      username: true,
      password: true,
    },
  });

  if (!data) {
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid credentials");
  }

  const isPasswordOK = await bcrypt.compare(payload.password, data.password);

  if (!isPasswordOK) {
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid credentials");
  }

  const { password: NotUse, ...user } = data;
  const token = generateToken(user);

  return token;
};

export const AuthService = { verify };
