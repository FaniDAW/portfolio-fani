/**
 * ============================================
 * RUTAS CONTACTO
 * ============================================
 */

import express from "express";
import {
  createContact,
  getContacts,
  getContactMetrics
} from "../controllers/contact.controller.js";

import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

/**
 * POST - Enviar formulario
 * URL FINAL: /contact
 */
router.post("/", createContact);

/**
 * GET - Obtener mensajes (admin)
 * URL FINAL: /contact/contacts
 */
router.get("/contacts", verifyToken, getContacts);

/**
 * GET - Métricas
 * URL FINAL: /contact/metrics
 */
router.get("/metrics", verifyToken, getContactMetrics);

export default router;
