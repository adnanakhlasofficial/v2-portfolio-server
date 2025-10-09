import { Prisma } from "@prisma/client";

export type TUser = Pick<Prisma.AdminCreateInput, "username" | "password">;
