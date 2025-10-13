import { Prisma } from "@prisma/client";

export type TProject = Pick<
  Prisma.ProjectCreateInput,
  | "title"
  | "description"
  | "category"
  | "tags"
  // | "content"
  | "thumbnail"
  | "liveLink"
  | "clientRepoLink"
  | "serverRepoLink"
>;
