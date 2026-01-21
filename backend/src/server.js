import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import projectsRoutes from "./routes/projects.routes.js";


dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/projects", projectsRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Backend del portfolio funcionando");
});


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor backend en http://localhost:${PORT}`);
});
