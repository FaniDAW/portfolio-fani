import { useState } from "react";
import { api } from "../services/api";

const ProjectForm = () => {

  // Estado del formulario
  const [form, setForm] = useState({
    title: "",
    description: "",
    technologies: "",
    url: "",
  });

  // Actualiza el estado cuando el usuario escribe
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // POST al backend
    await api.post("/projects", form);

    alert("Proyecto creado correctamente");

    // Opcional: limpiar formulario
    setForm({
      title: "",
      description: "",
      technologies: "",
      url: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-8">

      <input
        name="title"
        placeholder="Título"
        value={form.title}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        name="description"
        placeholder="Descripción"
        value={form.description}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        name="technologies"
        placeholder="Tecnologías"
        value={form.technologies}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        name="url"
        placeholder="URL"
        value={form.url}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <button
        type="submit"
        className="bg-black text-white px-4 py-2"
      >
        Crear proyecto
      </button>
    </form>
  );
};

export default ProjectForm;
