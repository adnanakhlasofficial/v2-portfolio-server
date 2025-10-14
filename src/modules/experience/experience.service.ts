import { prisma } from "../../libs/prisma";
import { createSlug } from "../../utils/create-slug";
import { IExperience } from "./experience.interface";

const addExperience = async (id: string, payload: IExperience) => {
  const modifiedPayload = {
    ...payload,
    slug: createSlug(`${payload.role} ${payload.company}`),
    adminId: id,
  };

  const data = await prisma.experience.create({
    data: modifiedPayload,
    select: {
      slug: true,
      role: true,
      company: true,
      location: true,
      startDate: true,
      endDate: true,
      description: true,
      achievement: true,
      tags: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return data;
};

const getExperiences = async () => {
  const data = await prisma.experience.findMany({
    orderBy: {
      updatedAt: "desc",
    },
    select: {
      slug: true,
      role: true,
      company: true,
      location: true,
      startDate: true,
      endDate: true,
      description: true,
      achievement: true,
      tags: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return data;
};

export const ExperienceService = { addExperience, getExperiences };
