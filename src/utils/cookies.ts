import { Response } from "express";

export const setCookie = (
  res: Response,
  cookieName: string,
  cookieValue: string,
  expiration: number
) => {
  res.cookie(cookieName, cookieValue, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    // maxAge: expiration,
  });
};

export const clearCookie = (res: Response, cookieName: string) => {
  res.clearCookie(cookieName, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });
};
