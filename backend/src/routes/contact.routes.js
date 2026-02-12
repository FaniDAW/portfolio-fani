/**
 * Rutas del formulario de contacto
 */

import express from "express";
import rateLimit from "express-rate-limit";
import { createContact, getContacts } from "../controllers/contact.controller.js";

const router = express.Router();

/**
 * RATE LIMIT -->> Máximo 5 envíos cada 10 minutos por IP
 */
const contactLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutos
  max: 5,
  message: "Demasiados intentos. Inténtalo más tarde.",
});

/**
 * POST /contact
 * Guardar mensaje
 */
router.post("/", contactLimiter, createContact);

/**
 * GET /contact
 * Obtener todos los mensajes (admin)
 */
router.get("/", getContacts);

export default router;
