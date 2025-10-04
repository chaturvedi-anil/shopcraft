import { NextFunction, Request, Response } from "express";
import { CatchAsyncRequest } from "../../middleware/catchAsync.middleware";
import * as authServices from "./auth.service";

export type SignupProp = {
  name: string;
  email: string;
  password: string;
};

export type SigninProp = {
  email: string;
  password: string;
};

export const signup = CatchAsyncRequest(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = await authServices.signupUser(req.body);
    res.status(201).json({
      success: true,
      data,
    });
  }
);

export const signin = CatchAsyncRequest(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = await authServices.singinUser(req.body);
    res.status(200).json({
      success: true,
      data,
    });
  }
);

export const getMe = CatchAsyncRequest(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;
    const data = await authServices.getMe(email);
    res.status(200).json({
      success: true,
      data,
    });
  }
);
