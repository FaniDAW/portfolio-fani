import { useEffect, useState } from "react";

/**
 * Dashboard Admin
 * - Muestra métricas
 * - Permite crear proyectos
 */

interface Stats {
  totalContacts: number;
  totalProjects: number;
  contactsThisWeek: number;
  lastContact: any;
}

export default function AdminDashboard() {

  const [stats, setStats] = useState<Stats | null>(null);

  const [project, setProject] = useState({
    title: "",
    description: "",
    technologies: "",
    url: ""
  });

  const token = localStorage.getItem("token");

  // Cargar métricas
  useEffect(() => {
    fetch("http://localhost:3001/dashboard", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(setStats);
  }, []);

  // Crear nuevo proyecto
  const handleCreateProject = async (e: any) => {
    e.preventDefault();

    await fetch("http://localhost:3001/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(project)
    });

    alert("Proyecto creado");

    setProject({
      title: "",
      description: "",
      technologies: "",
      url: ""
    });
  };

  if (!stats) return <div className="p-20">Cargando...</div>;

  return (
    <section className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 space-y-16">

        {/* MÉTRICAS */}
        <div className="grid grid-cols-4 gap-6">

          <div className="p-6 border rounded-xl shadow">
            <p className="text-sm text-zinc-500">Total mensajes</p>
            <p className="text-3xl font-semibold">
              {stats.totalContacts}
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow">
            <p className="text-sm text-zinc-500">Mensajes esta semana</p>
            <p className="text-3xl font-semibold">
              {stats.contactsThisWeek}
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow">
            <p className="text-sm text-zinc-500">Total proyectos</p>
            <p className="text-3xl font-semibold">
              {stats.totalProjects}
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow">
            <p className="text-sm text-zinc-500">Último mensaje</p>
            <p className="text-sm">
              {stats.lastContact
                ? stats.lastContact.name
                : "Sin mensajes"}
            </p>
          </div>

        </div>

        {/* FORM CREAR PROYECTO */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Crear nuevo proyecto
          </h2>

          <form
            onSubmit={handleCreateProject}
            className="grid gap-4 max-w-xl"
          >

            <input
              placeholder="Título"
              value={project.title}
              onChange={e =>
                setProject({ ...project, title: e.target.value })
              }
              className="input"
              required
            />

            <textarea
              placeholder="Descripción"
              value={project.description}
              onChange={e =>
                setProject({ ...project, description: e.target.value })
              }
              className="input"
              required
            />

            <input
              placeholder="Tecnologías"
              value={project.technologies}
              onChange={e =>
                setProject({ ...project, technologies: e.target.value })
              }
              className="input"
              required
            />

            <input
              placeholder="URL"
              value={project.url}
              onChange={e =>
                setProject({ ...project, url: e.target.value })
              }
              className="input"
              required
            />

            <button
              type="submit"
              className="py-3 rounded-full bg-pink-900 text-white"
            >
              Crear Proyecto
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
