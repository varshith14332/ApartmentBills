import "dotenv/config";
import express from "express";
import cors from "cors";
import multer from "multer";
import path from "path";
import { handleDemo } from "./routes/demo";
import { handleAdminLogin } from "./routes/admin";
import { handlePaymentSubmit } from "./routes/payments";
import { handleDashboard } from "./routes/dashboard";
import { authenticateToken } from "./middleware/auth";

// Configure multer for file uploads
const upload = multer({
  storage: multer.diskStorage({
    destination: (_req, _file, cb) => {
      cb(null, "uploads/");
    },
    filename: (_req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(
        null,
        file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname),
      );
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (_req, file, cb) => {
    const allowedMimes = ["image/jpeg", "image/png", "application/pdf"];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type"));
    }
  },
});

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/uploads", express.static("uploads"));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Admin routes
  app.post("/api/admin/login", handleAdminLogin);

  // Payment routes
  app.post(
    "/api/payments/submit",
    upload.single("screenshot"),
    handlePaymentSubmit,
  );

  // Dashboard routes (protected)
  app.get("/api/admin/dashboard", authenticateToken, handleDashboard);

  return app;
}
