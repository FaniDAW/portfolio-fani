/**
 * Controlador del formulario de contacto
 * - Guarda mensajes
 * - Devuelve contactos (admin)
 */

import { db } from "../db/db.js";

/**
 * POST /contact
 * Crea un nuevo mensaje
 */
export const createContact = async (req, res) => {
  try {
    const { name, email, phone, message, company } = req.body;

    /**
     * HONEYPOT -->>  Si el campo "company" tiene algo → es bot
     * No guardamos nada
     */
    if (company) {
      return res.status(200).json({ message: "OK" });
    }

    // Insertamos contacto
    const [result] = await db.query(
      "INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)",
      [name, email, phone || null, message]
    );

    // Recuperamos el contacto recién creado
    const [rows] = await db.query(
      "SELECT * FROM contacts WHERE id = ?",
      [result.insertId]
    );

    // Devolvemos el objeto completo
    res.status(201).json(rows[0]);

  } catch (error) {
    console.error("Error creando contacto:", error);
    res.status(500).json({ error: "Error guardando contacto" });
  }
};

/**
 * GET /contact
 * Devuelve todos los contactos (para admin)
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
