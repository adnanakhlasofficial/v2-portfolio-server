import { env } from "../../configs/env";
import AppError from "../../helpers/AppError";
import { prisma } from "../../libs/prisma";
import { TAdmin } from "./admin.interface";
import bcrypt from "bcrypt";
import httpStatus from "http-status-codes";

const getAdminPublic = async () => {
  const data = await prisma.admin.findUnique({
    where: {
      username: env.ADMIN_USERNAME,
    },
    select: {
      id: true,
      profile: true,
      blurProfile: true,
      name: true,
      email: true,
      bio: true,
      description: true,
      story: true,
      _count: true,
    },
  });
  return data;
};

const updateAdmin = async (id: string, payload: TAdmin) => {
  const admin = await prisma.admin.findUnique({
    where: { id },
  });

  if (!admin) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Admin not found. Update failed."
    );
  }

  const isPasswordOK = await bcrypt.compare(
    payload.password as string,
    admin.password
  );

  if (!isPasswordOK) {
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid credentials");
  }

  const { password, ...updatePayload } = payload;

  const data = await prisma.admin.update({
    where: { id },
    data: updatePayload,
  });
  return data;
};

const getAdminPrivate = async () => {
  const data = await prisma.admin.findUnique({
    where: { username: env.ADMIN_USERNAME },
    include: {
      _count: true,
    },
  });
  return data;
};

export const AdminService = {
  getAdminPublic,
  updateAdmin,
  getAdminPrivate,
};
