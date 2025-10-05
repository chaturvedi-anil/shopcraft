import ErrorHandler from "../../utils/error-handler";
import { ProdcutProps } from "./product.controller";
import * as productRepository from "./product.repository";

export const getProducts = async () => {
  const products = await productRepository.getAllProducts();
  return products;
};

export const myProductsList = async (ownerId: number) => {
  const products = await productRepository.getProductsByOwnerId(ownerId);
  return products;
};

export const addProduct = async (data: ProdcutProps, ownerId: number) => {
  const isProductExit = await productRepository.findProductByNameAndOwnerId(
    data.name,
    ownerId
  );

  if (isProductExit) {
    throw new ErrorHandler("Duplicate product is not allowed", 400);
  }

  const product = await productRepository.addProduct(data);
  return product;
};

export const updateProduct = async (
  id: number,
  data: ProdcutProps,
  ownerId: number
) => {
  const isProductExit = await productRepository.findProductByIdAndOwnerId(
    id,
    ownerId
  );

  if (!isProductExit) {
    throw new ErrorHandler(`Product with ID ${id} not found`, 404);
  }

  const product = await productRepository.updateProductDetails(
    id,
    data,
    ownerId
  );

  return product;
};

export const deleteProduct = async (id: number, ownerId: number) => {
  const isProductExit = await productRepository.findProductByIdAndOwnerId(
    id,
    ownerId
  );

  if (!isProductExit) {
    throw new ErrorHandler(`Product with ID ${id} not found`, 404);
  }
  const deletedProduct = await productRepository.deleteProductById(id, ownerId);
  return deletedProduct;
};
