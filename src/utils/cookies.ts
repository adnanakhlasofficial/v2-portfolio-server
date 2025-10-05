import { Response } from "express";

export const setCookie = (
  res: Response,
  cookieName: string,
  cookieValue: string
) => {
  res.cookie(cookieName, cookieValue, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });
};

export const clearCookie = (res: Response, cookieName: string) => {
  res.clearCookie(cookieName, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });
};
