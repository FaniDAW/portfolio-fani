import { db } from "../db/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await db.query(
      "SELECT * FROM admins WHERE email = ?",
      [email]
    );

    if (rows.length === 0) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const admin = rows[0];

    const match = await bcrypt.compare(password, admin.password);

    if (!match) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const token = jwt.sign(
      { id: admin.id, email: admin.email },
      "SUPER_SECRET_KEY",
      { expiresIn: "2h" }
    );

    res.json({ token });

  } catch (error) {
    res.status(500).json({ error: "Error en login" });
  }
};
