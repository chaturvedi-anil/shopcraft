import { prismaClient } from "../../config/database";
import { ProdcutProps } from "./product.controller";

export const getProductsByOwnerId = (ownerId: number) => {
  return prismaClient.product.findMany({ where: { createdBy: ownerId } });
};

export const getAllProducts = () => {
  return prismaClient.product.findMany();
};

export const addProduct = (data: ProdcutProps) => {
  return prismaClient.product.create({
    data: data,
  });
};

export const updateProductDetails = (
  id: number,
  data: ProdcutProps,
  ownerId: number
) => {
  return prismaClient.product.update({
    where: { id: id, createdBy: ownerId },
    data: {
      price: data.price,
      category: data.category,
      description: data.description,
    },
  });
};

export const deleteProductById = (id: number, ownerId: number) => {
  return prismaClient.product.delete({ where: { id: id, createdBy: ownerId } });
};

export const findProductByNameAndOwnerId = (name: string, ownerId: number) => {
  return prismaClient.product.findFirst({
    where: { name: name, createdBy: ownerId },
  });
};

export const findProductByIdAndOwnerId = (id: number, ownerId: number) => {
  return prismaClient.product.findFirst({
    where: { id: id, createdBy: ownerId },
  });
};
