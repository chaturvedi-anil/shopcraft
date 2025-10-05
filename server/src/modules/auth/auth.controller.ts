import { NextFunction, Request, Response } from "express";
import { CatchAsyncRequest } from "../../middleware/catchAsync.middleware";
import * as authServices from "./auth.service";

export type RegisterProp = {
  name: string;
  email: string;
  password: string;
};

export type LoginProp = {
  email: string;
  password: string;
};

export const register = CatchAsyncRequest(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = await authServices.registerUser(req.body);
    res.status(201).json({
      success: true,
      data,
    });
  }
);

export const login = CatchAsyncRequest(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = await authServices.loginUser(req.body);
    res.status(200).json({
      success: true,
      data,
    });
  }
);

export const getMe = CatchAsyncRequest(
  async (req: Request, res: Response, next: NextFunction) => {
    const email = req.user!.email;
    const data = await authServices.getMe(email);
    res.status(200).json({
      success: true,
      data,
    });
  }
);
