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

export const ProjectController = { addProject };
