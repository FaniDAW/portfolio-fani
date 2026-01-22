import { useEffect, useState } from "react";
import { api } from "../services/api";

interface Project {
  id: number;
  title: string;
  description: string;
}

const Proyectos = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    api.get("/projects").then(res => {
      setProjects(res.data);
    });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Proyectos</h1>

      {projects.map(project => (
        <div key={project.id} className="mb-4">
          <h2 className="font-bold">{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Proyectos;
