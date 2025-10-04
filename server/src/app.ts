import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

// routes
app.get("/ping", (req, res) => {
  res.status(200).json({
    message: "pong",
  });
});

export default app;
