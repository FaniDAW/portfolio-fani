import express from "express";
import { getDashboardStats } from "../controllers/dashboard.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

// Ruta protegida
router.get("/", verifyToken, getDashboardStats);

export default router;
