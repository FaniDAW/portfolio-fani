// Importamos Express (framework backend)
import express from "express";

// Permite peticiones desde otro puerto (React)
import cors from "cors";

// Permite usar variables de entorno (.env)
import dotenv from "dotenv";

// Importamos las rutas de proyectos
import projectsRoutes from "./routes/projects.routes.js";

//y las rutas de los contactos
import contactRoutes from "./routes/contact.routes.js";

//nuevas rutas para autenticación y las métricas
import authRoutes from "./routes/auth.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";


// Cargamos las variables del archivo .env
dotenv.config();

// Creamos la aplicación Express
const app = express();

// Middlewares
app.use(cors());                    // Permite peticiones desde el frontend
app.use(express.json());            // Permite leer JSON en req.body

// Rutas
app.use("/projects", projectsRoutes);
app.use("/contact", contactRoutes);

app.use("/", contactsRoutes);

app.use("/auth", authRoutes);
app.use("/dashboard", dashboardRoutes);



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
