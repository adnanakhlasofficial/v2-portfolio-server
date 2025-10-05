import { Request, Response } from "express";
import { catchAsync } from "../../utils/catch-async";
import { AdminService } from "./admin.service";
import { sendResponse } from "../../utils/send-response";
import httpStatus from "http-status-codes";

const getAdminPublic = catchAsync(async (req: Request, res: Response) => {
  const data = await AdminService.getAdminPublic();
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Admin details retrieved successfully.",
    data,
  });
});

export const AdminController = {
  getAdminPublic,
};
