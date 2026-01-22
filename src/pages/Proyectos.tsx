import ProjectForm from "../components/ProjectForm";

// Hook de React para ejecutar código cuando el componente se monta
// y para guardar estado dentro del componente
import { useEffect, useState } from "react";

// Importamos nuestra instancia de Axios ya configurada (baseURL apuntando al backend Express)
import { api } from "../services/api";

// Definimos el tipo Project con TypeScript --> Esto describe la forma de los datos que vienen del backend
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string;
  url: string;
}

// Componente funcional Proyectos
const Proyectos = () => {

  // Estado para guardar la lista de proyectos (Inicialmente es un array vacío)
  const [projects, setProjects] = useState<Project[]>([]);

  // useEffect se ejecuta UNA VEZ cuando el componente se monta (porque el array de dependencias está vacío [])
  useEffect(() => {

    // Hacemos una petición GET al backend  ---> Llama a http://localhost:3001/projects
    api.get("/projects").then(res => {

      // res.data contiene los proyectos que devuelve Express (Guardamos esos datos en el estado)
      setProjects(res.data);
    });

  }, []);

  // Renderizado del componente
  return (
    <div className="p-8">

      {/* Título de la página */}
      <h1 className="text-3xl font-bold mb-4">Proyectos</h1>

      <ProjectForm />

      {/* Recorremos el array de proyectos */}
      {projects.map(project => (

        // Cada elemento necesita una key única (id)
        <div key={project.id} className="mb-4">

          {/* Mostramos los datos del proyecto */}
          <h2 className="font-bold">{project.title}</h2>
          <p>{project.description}</p>
          <p>{project.technologies}</p>
          <a href={project.url} target="_blank" rel="noreferrer">
            Ver proyecto
          </a>


        </div>
      ))}
    </div>
  );
};

// Exportamos el componente para poder usarlo en rutas o App.tsx
export default Proyectos;
