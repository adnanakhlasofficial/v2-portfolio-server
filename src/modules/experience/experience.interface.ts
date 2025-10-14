import { Prisma } from "@prisma/client";

export interface IExperience
  extends Pick<
    Prisma.ExperienceCreateInput,
    | "role"
    | "company"
    | "location"
    | "startDate"
    | "endDate"
    | "description"
    | "achievement"
    | "tags"
  > {
  endDate?: Prisma.ExperienceCreateInput["endDate"];
}
