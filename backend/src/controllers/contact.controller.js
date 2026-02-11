import { db } from "../db/db.js";

export const createContact = async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Validación mínima (muy importante)
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  }

  try {
    await db.query(
      `
      INSERT INTO contacts (name, email, phone, message)
      VALUES (?, ?, ?, ?)
      `,
      [name, email, phone || null, message]
    );

    res.status(201).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al guardar el mensaje" });
  }
};
