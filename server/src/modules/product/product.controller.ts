import { NextFunction, Request, Response } from "express";
import { CatchAsyncRequest } from "../../middleware/catchAsync.middleware";
import * as authServices from "./product.services";

export type ProdcutProps = {
  name: string;
  price: number;
  category: string;
  description: string;
  createdBy: number;
};
export const getProducts = CatchAsyncRequest(
  async (req: Request, res: Response, next: NextFunction) => {
    const products = await authServices.getProducts();

    res.status(200).json({
      success: true,
      products,
    });
  }
);

export const myProductsList = CatchAsyncRequest(
  async (req: Request, res: Response, next: NextFunction) => {
    const products = await authServices.myProductsList(req.user!.id);

    res.status(200).json({
      success: true,
      products,
    });
  }
);

export const addProduct = CatchAsyncRequest(
  async (req: Request, res: Response, next: NextFunction) => {
    const ownerId = req.user!.id;

    const product = await authServices.addProduct(req.body, ownerId);

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  }
);

export const updateProduct = CatchAsyncRequest(
  async (req: Request, res: Response, next: NextFunction) => {
    const ownerId = req.user!.id;

    const id = Number(req.params.id);

    const product = await authServices.updateProduct(id, req.body, ownerId);

    res.status(200).json({
      success: true,
      message: "Product details updated successfully",
      product,
    });
  }
);

export const deleteProduct = CatchAsyncRequest(
  async (req: Request, res: Response, next: NextFunction) => {
    const ownerId = req.user!.id;
    const id = Number(req.params.id);

    const product = await authServices.deleteProduct(id, ownerId);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  }
);
