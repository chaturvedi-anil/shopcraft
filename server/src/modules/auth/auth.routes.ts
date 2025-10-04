import express from "express";

const authRouter = express.Router();

authRouter.post("/login");
authRouter.post("/register");

authRouter.get("/me");

export default authRouter;
