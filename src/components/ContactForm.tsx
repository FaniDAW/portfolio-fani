import { useState } from "react";

/**
 * ContactForm:
 * - Honeypot anti-bots
 * - Validación básica
 */

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    company: "",            //  --> honeypot (NO mostrar)
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Si el honeypot tiene contenido → bot
    if (form.company) return;

    // Aquí enviarías al backend
    console.log("Formulario enviado:", form);
  };

  return (
    <section className="relative w-screen py-32 bg-white dark:bg-zinc-950 overflow-hidden">
      
      {/* Fondo sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/40 to-transparent dark:from-pink-950/20" />

      <div className="relative max-w-4xl mx-auto px-6">
        
        {/* Texto */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-semibold text-zinc-900 dark:text-white mb-6">
            Hablemos
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            ¿Tienes una idea, un proyecto o simplemente una pregunta?
            Estoy abierta a colaboraciones, propuestas profesionales
            y nuevos retos donde el diseño y el desarrollo frontend
            tengan un papel protagonista.
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="grid gap-6 bg-white dark:bg-zinc-900 p-10 rounded-2xl shadow-lg"
        >
          {/* Honeypot invisible */}
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            className="hidden"
          />

          <input
            type="text"
            name="name"
            placeholder="Nombre"
            required
            onChange={handleChange}
            className="input"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
            className="input"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Teléfono (opcional)"
            onChange={handleChange}
            className="input"
          />

          <textarea
            name="message"
            placeholder="Cuéntame qué tienes en mente..."
            rows={5}
            required
            onChange={handleChange}
            className="input resize-none"
          />

          <button
            type="submit"
            className="
              mt-4 py-3 rounded-full
              bg-pink-900 text-white
              hover:bg-pink-800 transition
            "
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
