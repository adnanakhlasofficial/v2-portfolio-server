import { prisma } from "../../libs/prisma";
import { createSlug } from "../../utils/create-slug";
import { TProject } from "./project.interface";

const addProject = async (id: string, payload: TProject) => {
  const modifiedPayload = {
    ...payload,
    slug: createSlug(`${payload.title} ${payload.category}`),
    adminId: id,
  };

  const data = await prisma.project.create({
    data: modifiedPayload,
  });

  return data;
};

export const ProjectService = { addProject };
