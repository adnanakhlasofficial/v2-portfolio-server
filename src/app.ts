import compression from "compression";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import router from "./routers";
import globalError from "./middlewares/global-error";

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
); // Enables Cross-Origin Resource Sharing
app.use(express.json({ limit: "2mb" })); // Parse incoming JSON requests
app.use(compression()); // Compresses response bodies for faster delivery
app.use(morgan("dev"));
app.use(cookieParser());
app.use("/api/v1", router);

// Default route for testing
app.get("/", (_req, res) => {
  res.send("API is running");
});

// Global Error Handler
app.use(globalError);

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

export default app;
