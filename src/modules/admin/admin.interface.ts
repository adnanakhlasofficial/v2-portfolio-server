import { Prisma } from "@prisma/client";

export type TAdmin = Partial<
  Pick<
    Prisma.AdminCreateInput,
    | "username"
    | "name"
    | "email"
    | "password"
    | "profile"
    | "blurProfile"
    | "bio"
    | "description"
    | "story"
  >
>;
