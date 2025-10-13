import { Request, Response } from "express";
import { catchAsync } from "../../utils/catch-async";
import { ProjectService } from "./project.service";
import { sendResponse } from "../../utils/send-response";
import httpStatus from "http-status-codes";

const addProject = catchAsync(async (req: Request, res: Response) => {
  const id = req.user.id;
  const payload = req.body;
  console.log(payload);
  const data = await ProjectService.addProject(id, payload);
  sendResponse(res, {
    status: httpStatus.CREATED,
    success: true,
    message: "Project added successfully!",
    data,
  });
});

const getProjects = catchAsync(async (req: Request, res: Response) => {
  const data = await ProjectService.getProjects();
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Projects retrieved successfully!",
    data,
  });
});

const getSingleProjects = catchAsync(async (req: Request, res: Response) => {
  const slug = req.params.slug;
  const data = await ProjectService.getSingleProjects(slug);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Project retrieved successfully!",
    data,
  });
});

export const ProjectController = { addProject, getProjects, getSingleProjects };
