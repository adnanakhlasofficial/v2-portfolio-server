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
      username: env.ADMIN_USERNAME || "admin",
      name: env.ADMIN_NAME || "Default Admin",
      email: env.ADMIN_EMAIL || "admin@example.com",
      password: hashedPassword,
    },
  });

  console.log("🎉 Default admin created successfully:", admin.email);
}
