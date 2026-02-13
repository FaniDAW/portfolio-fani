/**
 * ============================================
 * SERVIDOR PRINCIPAL BACKEND
 * ============================================
 */

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import projectsRoutes from "./routes/projects.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import authRoutes from "./routes/auth.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";

dotenv.config();

const app = express();

/**
 * MIDDLEWARES
 */
app.use(cors());
app.use(express.json());

/**
 * RUTAS
 */

// CRUD proyectos
app.use("/projects", projectsRoutes);

// Contactos
app.use("/contact", contactRoutes);

// Login
app.use("/auth", authRoutes);

// Dashboard (si lo usas)
app.use("/dashboard", dashboardRoutes);

/**
 * Ruta base
 */
app.get("/", (req, res) => {
  res.send("Backend del portfolio funcionando");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor backend en http://localhost:${PORT}`);
});
