import express from "express";
import { getMe, login, register } from "./auth/auth.controller";
import { isAuthenticated } from "../middleware/auth.middleware";
import {
  addProduct,
  deleteProduct,
  getProducts,
  myProductsList,
  updateProduct,
} from "./product/product.controller";
import { validateRequest } from "../middleware/validate.middleware";
import { productSchema, productUpdateSchema } from "./product/product.schema";
import { registerSchema, loginSchema } from "./auth/auth.schemas";

const router = express.Router();

// auth routes
router.post("/register", validateRequest(loginSchema), register);
router.post("/login", validateRequest(registerSchema), login);
router.get("/me", isAuthenticated, getMe);

// all users
router.get("/products", getProducts);

// product routes
router.get("/my/products", isAuthenticated, myProductsList);
router.post(
  "/products",
  isAuthenticated,
  validateRequest(productSchema),
  addProduct
);
router.patch(
  "/products/:id",
  isAuthenticated,
  validateRequest(productUpdateSchema),
  updateProduct
);
router.delete("/products/:id", isAuthenticated, deleteProduct);

export default router;
