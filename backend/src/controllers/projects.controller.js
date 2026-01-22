import { db } from "../db/db.js";

export const getProjects = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM projects");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener proyectos" });
  }
};


export const createProject = async (req, res) => {
  //console.log("BODY RECIBIDO:", req.body);  --> para comprobar

  const { title, description, technologies, url } = req.body;

  try {
    const [result] = await db.query(
      "INSERT INTO projects (title, description, technologies, url) VALUES (?, ?, ?, ?)",
      [title, description, technologies, url]
    );

    res.status(201).json({
      id: result.insertId,
      title,
      description,
      technologies,
      url,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al crear proyecto" });
  }
};


/* Para crear algun proyecto internamente:

export const getProjects = (req, res) => {
  res.json([
    {
      id: 1,
      title: "Portfolio personal",
      description: "Portfolio desarrollado con React, Tailwind y Express",
      technologies: "React, Tailwind, Express",
      url: "https://portfolio-fani.com"
    }
  ]);
};
*/

