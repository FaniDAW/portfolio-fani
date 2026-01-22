// Importamos Express (framework backend)
import express from "express";

// Permite peticiones desde otro puerto (React)
import cors from "cors";

// Permite usar variables de entorno (.env)
import dotenv from "dotenv";

// Importamos las rutas de proyectos
import projectsRoutes from "./routes/projects.routes.js";

// Cargamos las variables del archivo .env
dotenv.config();

// Creamos la aplicación Express
const app = express();

// Middlewares
app.use(cors());           // Permite peticiones desde el frontend
app.use(express.json());   // Permite leer JSON en req.body

// Rutas
app.use("/projects", projectsRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Backend del portfolio funcionando");
});

// Puerto del servidor
const PORT = process.env.PORT || 3001;

// Arrancamos el servidor
app.listen(PORT, () => {
  console.log(`Servidor backend en http://localhost:${PORT}`);
});
