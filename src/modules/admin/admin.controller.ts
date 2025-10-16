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
    message: "Owner details retrieved successfully.",
    data,
  });
});

const updateAdmin = catchAsync(async (req: Request, res: Response) => {
  const id = req.user.id;
  const payload = req.body;
  const data = await AdminService.updateAdmin(id, payload);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Admin profile updated successfully.",
    data,
  });
});

const getAdminPrivate = catchAsync(async (req: Request, res: Response) => {
  const data = await AdminService.getAdminPrivate();
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Admin details retrieved successfully.",
    data,
  });
});

export const AdminController = {
  getAdminPublic,
  updateAdmin,
  getAdminPrivate,
};
