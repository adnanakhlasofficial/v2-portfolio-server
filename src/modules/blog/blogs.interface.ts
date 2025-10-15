import { Prisma } from "@prisma/client";

export interface IBlog
  extends Pick<
    Prisma.BlogCreateInput,
    "title" | "description" | "thumbnail" | "content" | "published"
  > {}
