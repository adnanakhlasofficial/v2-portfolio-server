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
    select: {
      slug: true,
      title: true,
      description: true,
      category: true,
      tags: true,
      thumbnail: true,
      content: true,
      liveLink: true,
      clientRepoLink: true,
      serverRepoLink: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return data;
};

const getProjects = async () => {
  const data = await prisma.project.findMany({
    orderBy: {
      updatedAt: "desc",
    },
    select: {
      slug: true,
      title: true,
      description: true,
      category: true,
      tags: true,
      thumbnail: true,
      content: true,
      liveLink: true,
      clientRepoLink: true,
      serverRepoLink: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return data;
};

const getSingleProjects = async (slug: string) => {
  const data = await prisma.project.findUnique({
    where: { slug },
    select: {
      slug: true,
      title: true,
      description: true,
      category: true,
      tags: true,
      thumbnail: true,
      content: true,
      liveLink: true,
      clientRepoLink: true,
      serverRepoLink: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return data;
};

const deleteProject = async (slug: string) => {
  const data = await prisma.project.delete({
    where: { slug },
    select: {
      slug: true,
      title: true,
      description: true,
      category: true,
      tags: true,
      thumbnail: true,
      content: true,
      liveLink: true,
      clientRepoLink: true,
      serverRepoLink: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return data;
};

const updateProject = async (slug: string, payload: TProject) => {
  const data = await prisma.project.update({
    where: { slug },
    data: payload,
    select: {
      slug: true,
      title: true,
      description: true,
      category: true,
      tags: true,
      thumbnail: true,
      content: true,
      liveLink: true,
      clientRepoLink: true,
      serverRepoLink: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return data;
};

export const ProjectService = {
  addProject,
  getProjects,
  getSingleProjects,
  deleteProject,
  updateProject,
};
