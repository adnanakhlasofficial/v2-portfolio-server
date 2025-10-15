import { prisma } from "../../libs/prisma";
import { createSlug } from "../../utils/create-slug";
import { IBlog } from "./blogs.interface";

const addBlog = async (id: string, payload: IBlog) => {
  const modifiedPayload = {
    ...payload,
    slug: createSlug(payload.title),
    adminId: id,
  };

  const data = await prisma.blog.create({
    data: modifiedPayload,
    select: {
      slug: true,
      title: true,
      description: true,
      thumbnail: true,
      content: true,
      published: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return data;
};

const getBlogs = async () => {
  const data = await prisma.blog.findMany({
    orderBy: {
      updatedAt: "desc",
    },
    select: {
      slug: true,
      title: true,
      description: true,
      thumbnail: true,
      content: true,
      published: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return data;
};

export const BlogService = { addBlog, getBlogs };
