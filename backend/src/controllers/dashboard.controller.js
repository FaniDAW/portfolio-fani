import { db } from "../db/db.js";

/**
 * Devuelve métricas del panel admin
 */
export const getDashboardStats = async (req, res) => {
  try {
    // Total mensajes
    const [contacts] = await db.query(
      "SELECT COUNT(*) as total FROM contacts"
    );

    // Total proyectos
    const [projects] = await db.query(
      "SELECT COUNT(*) as total FROM projects"
    );

    // Mensajes esta semana
    const [weekContacts] = await db.query(`
      SELECT COUNT(*) as total 
      FROM contacts 
      WHERE created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)
    `);

    // Último mensaje
    const [lastContact] = await db.query(`
      SELECT * FROM contacts 
      ORDER BY created_at DESC 
      LIMIT 1
    `);

    res.json({
      totalContacts: contacts[0].total,
      totalProjects: projects[0].total,
      contactsThisWeek: weekContacts[0].total,
      lastContact: lastContact[0] || null
    });

  } catch (error) {
    res.status(500).json({ error: "Error obteniendo métricas" });
  }
};
