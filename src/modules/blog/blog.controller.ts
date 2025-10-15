import { Request, Response } from "express";
import { catchAsync } from "../../utils/catch-async";
import { sendResponse } from "../../utils/send-response";
import httpStatus from "http-status-codes";
import { BlogService } from "./blog.service";

const addBlog = catchAsync(async (req: Request, res: Response) => {
  const id = req.user.id;
  const payload = req.body;
  const data = await BlogService.addBlog(id, payload);
  sendResponse(res, {
    status: httpStatus.CREATED,
    success: true,
    message: "Blog added successfully.",
    data,
  });
});

const getBlogs = catchAsync(async (req: Request, res: Response) => {
  const data = await BlogService.getBlogs();
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Blogs retrieved successfully!",
    data,
  });
});

export const BlogController = { addBlog, getBlogs };
