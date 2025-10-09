import { NextFunction, Request, Response } from "express";
import AppError from "../helpers/AppError";
import httpStatus from "http-status-codes";
import { ZodError } from "zod";

const globalError = async (
  err: AppError | Error | ZodError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let status = httpStatus.BAD_REQUEST;
  let message = "Something went wrong.";

  if (err instanceof AppError) {
    status = err.status;
    message = err.message;
  }

  if (err instanceof Error) {
    status = 500;
    message = err.message;
  }

  res.status(status).json({
    success: false,
    message,
    error: err,
    stack: err.stack,
  });
};

export default globalError;
