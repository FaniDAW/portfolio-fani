import { useEffect, useState } from "react";

/**
 * 1️⃣ Tipamos el proyecto (TypeScript)
 */
type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string;
  url: string;
  image: string;
};

export default function ProjectsDevGallery() {

  /**
   * 2️⃣ Estado para guardar los proyectos
   */
  const [projects, setProjects] = useState<Project[]>([]);

  /**
   * 3️⃣ Pedimos los proyectos al backend cuando carga el componente
   */
  useEffect(() => {
    fetch("http://localhost:3001/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="w-screen py-32 bg-white dark:bg-slate-950">
      
      <h2 className="text-3xl font-semibold text-center mb-10">
        Proyectos
      </h2>

      {/* GALERÍA */}
      <div className="flex h-[400px] max-w-6xl mx-auto gap-2 px-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="
              relative
              flex-grow
              w-40
              overflow-hidden
              rounded-xl
              transition-all
              duration-500
              hover:w-full
              group
            "
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full w-full"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />

              {/* OVERLAY */}
              <div className="
                absolute inset-0
                bg-black/0
                group-hover:bg-black/60
                transition
                flex items-end
              ">
                <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition">
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="text-sm">{project.technologies}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

    </section>
  );
}
