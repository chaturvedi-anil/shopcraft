import express from "express";
import cors from "cors";
import { ErrorMiddleware } from "./middleware/error.middleware";
import router from "./modules/index.routes";

const app = express();

app.use(express.json());
app.use(cors());

// test route
app.get("/ping", (req, res) => {
  res.status(200).send("pong");
});

// app routes
app.use("/api/v1/", router);

// error handler middleware
app.use(ErrorMiddleware);

export default app;
