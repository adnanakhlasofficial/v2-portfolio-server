import { env } from "../../configs/env";
import { prisma } from "../../libs/prisma";

const getAdminPublic = async () => {
  const data = await prisma.admin.findUnique({
    where: {
      username: env.ADMIN_USERNAME,
    },
    select: {
      id: true,
      name: true,
      email: true,
      bio: true,
      description: true,
      story: true,
    },
  });
  return data;
};

export const AdminService = {
  getAdminPublic,
};
