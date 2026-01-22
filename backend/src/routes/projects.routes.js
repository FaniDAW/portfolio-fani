// Importamos Router desde express
import { Router } from "express";

// Importamos los controllers
import {
  getProjects,
  createProject
} from "../controllers/projects.controller.js";

// Creamos el router (es una mini-app de Express solo para rutas)
const router = Router();

// GET /projects → devuelve todos los proyectos (escucha peticiones GET)
router.get("/", getProjects);

// POST /projects → crea un nuevo proyecto (escucha peticiones POST)
router.post("/", createProject);

// Exportamos el router
export default router;
