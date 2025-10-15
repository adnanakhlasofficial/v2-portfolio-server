import { Router } from "express";
import checkAuth from "../../middlewares/check-auth";
import { checkRequest } from "../../middlewares/check-request";
import { BlogController } from "./blog.controller";
import { blogPostZodSchema } from "./blog.zod";

const router = Router();

router.post(
  "/",
  checkAuth(),
  checkRequest(blogPostZodSchema),
  BlogController.addBlog
);

router.get("/", BlogController.getBlogs);

export const BlogRouter = router;
