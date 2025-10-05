import express from "express";
import { signup, signin, getMe } from "./auth.controller";
import { validateRequest } from "../../middleware/validate.middleware";
import { signinSchema, signupSchema } from "./auth.schemas";
import { isAuthenticated } from "../../middleware/auth.middleware";
const authRouter = express.Router();

authRouter.post("/signup", validateRequest(signupSchema), signup);
authRouter.post("/signin", validateRequest(signinSchema), signin);

authRouter.get("/me", isAuthenticated, getMe);

export default authRouter;
