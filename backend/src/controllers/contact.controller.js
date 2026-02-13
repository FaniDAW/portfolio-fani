/**
 * ============================================
 * CONTROLADOR DE CONTACTOS
 * ============================================
 */

import { db } from "../db/db.js";


/**
 * ============================================
 * POST /api/contact
 * Crear nuevo mensaje
 * ============================================
 */
export const createContact = async (req, res) => {
  try {
    const { name, email, phone, message, company } = req.body;

    /**
     * HONEYPOT
     * Si "company" viene relleno → es bot
     */
    if (company) {
      return res.status(200).json({ message: "OK" });
    }

    /**
     * Insertamos en base de datos
     * created_at se genera automáticamente
     */
    const [result] = await db.query(
      "INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)",
      [name, email, phone || null, message]
    );

    /**
     * Recuperamos el mensaje creado
     */
    const [rows] = await db.query(
      "SELECT * FROM contacts WHERE id = ?",
      [result.insertId]
    );

    res.status(201).json(rows[0]);

  } catch (error) {
    console.error("Error creando contacto:", error);
    res.status(500).json({ error: "Error guardando contacto" });
  }
};


/**
 * ============================================
 * GET /api/contacts
 * Obtener todos los mensajes (ADMIN)
 * ============================================
 */
export const getContacts = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM contacts ORDER BY created_at DESC"
    );

    res.json(rows);

  } catch (error) {
    console.error("Error obteniendo contactos:", error);
    res.status(500).json({ error: "Error obteniendo contactos" });
  }
};


/**
 * ============================================
 * GET /api/contacts/metrics
 * Obtener métricas para dashboard
 * ============================================
 */
export const getContactMetrics = async (req, res) => {
  try {

    /**
     * Total mensajes
     */
    const [totalResult] = await db.query(
      "SELECT COUNT(*) as total FROM contacts"
    );

    /**
     * Últimos 7 días
     */
    const [weekResult] = await db.query(
      `SELECT COUNT(*) as weekTotal
       FROM contacts
       WHERE created_at >= NOW() - INTERVAL 7 DAY`
    );

    res.json({
      total: totalResult[0].total,
      weekTotal: weekResult[0].weekTotal
    });

  } catch (error) {
    console.error("Error obteniendo métricas:", error);
    res.status(500).json({ error: "Error obteniendo métricas" });
  }
};
