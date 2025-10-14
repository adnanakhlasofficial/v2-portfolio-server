import { Request, Response } from "express";
import { catchAsync } from "../../utils/catch-async";
import { ExperienceService } from "./experience.service";
import { sendResponse } from "../../utils/send-response";
import httpStatus from "http-status-codes";

const addExperience = catchAsync(async (req: Request, res: Response) => {
  const id = req.user.id;
  const payload = req.body;
  const data = await ExperienceService.addExperience(id, payload);
  sendResponse(res, {
    status: httpStatus.CREATED,
    success: true,
    message: "Experience added successfully.",
    data,
  });
});

const getExperiences = catchAsync(async (req: Request, res: Response) => {
  const data = await ExperienceService.getExperiences();
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Experiences retrieved successfully!",
    data,
  });
});

export const ExperienceController = { addExperience, getExperiences };
