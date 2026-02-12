/**
 * ============================================
 * CONTACTS CONTROLLER
 * ============================================
 * Gestiona:
 * - Crear mensaje (formulario público)
 * - Obtener mensajes (admin)
 * - Obtener métricas (admin)
 */

import { db } from "../db/db.js";


/**
 * ==================================================
 * POST /contact
 * Crear un nuevo mensaje desde el formulario público
 * ==================================================
 */
export const createContact = async (req, res) => {
  try {
    const { name, email, phone, message, company } = req.body;

    /**
     * HONEYPOT
     * Si el campo oculto "company" viene con contenido, asumimos que es un bot y NO guardamos nada.
     */
    if (company) {
      return res.status(200).json({ message: "OK" });
    }

    /**
     * Insertamos el mensaje en base de datos created_at se genera automáticamente
     */
    const [result] = await db.query(
      "INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)",
      [name, email, phone || null, message]
    );

    /**
     * Recuperamos el mensaje recién creado para devolver el objeto completo al frontend
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
 * ==================================================
 * GET /contacts
 * Devuelve TODOS los mensajes (solo admin)
 * ==================================================
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
 * ==================================================
 * GET /contacts/metrics -->>. Devuelve métricas para dashboard admin
 * ==================================================
 */
export const getContactMetrics = async (req, res) => {
  try {

    /**
     * Total de mensajes almacenados
     */
    const [totalResult] = await db.query(
      "SELECT COUNT(*) as total FROM contacts"
    );

    /**
     * Mensajes creados en los últimos 7 días
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
