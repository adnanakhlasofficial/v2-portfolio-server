import bcrypt from "bcrypt";
import { prisma } from "../libs/prisma";
import { env } from "../configs/env";

export async function createDefaultAdmin() {
  const existingAdmin = await prisma.admin.findFirst();

  if (existingAdmin) {
    console.log("✅ Admin already exists:", existingAdmin.email);
    return;
  }

  const hashedPassword = await bcrypt.hash(
    env.ADMIN_PASSWORD || "admin123",
    10
  );

  const admin = await prisma.admin.create({
    data: {
      profile: env.ADMIN_PROFILE,
      username: env.ADMIN_USERNAME,
      name: env.ADMIN_NAME,
      email: env.ADMIN_EMAIL,
      password: hashedPassword,
      bio: env.ADMIN_BIO,
      description: env.ADMIN_DESCRIPTION,
      story: env.ADMIN_STORY,
    },
  });

  console.log("🎉 Default admin created successfully:", admin.email);
}
