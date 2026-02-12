import express from "express";
import {
  createContact,
  getContacts,
  getContactMetrics
} from "../controllers/contacts.controller.js";

import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

/**
 * FORMULARIO PÚBLICO
 * POST /api/contact
 */
router.post("/contact", createContact);

/**
 * ADMIN - mensajes
 * GET /api/contacts
 */
router.get("/contacts", verifyToken, getContacts);

/**
 * ADMIN - métricas
 * GET /api/contacts/metrics
 */
router.get("/contacts/metrics", verifyToken, getContactMetrics);

export default router;
