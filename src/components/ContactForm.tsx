import { useState } from "react";

/**
 * ContactForm 
 * - Conectado a backend
 * - Loader animado + Feedback visual elegante
 * - Honeypot anti-bots
 */

export default function ContactForm() {
  /**
   * Estado del formulario
   */
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    company: "", // honeypot invisible
  });

  /**
   * Estado de envío
   */
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  /**
   * Actualiza campos
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /**
   * Submit real al backend
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot → si tiene algo, es bot
    if (form.company) return;

    try {
      setLoading(true);
      setError(false);

      const res = await fetch("http://localhost:3001/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Error");

      setSuccess(true);

      // Reset form
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
        company: "",
      });

    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-screen py-32 overflow-hidden bg-white bg-white dark:bg-black">

      {/* FONDO  */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/40 to-transparent dark:from-pink-950/20" />

      <div className="relative max-w-4xl mx-auto px-6">
        

        {/* TEXTO */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-semibold text-pink-900 dark:text-gray-200 mb-6">
            Hablemos
          </h2>

          <p className="text-zinc-700 font-light dark:text-gray-200 leading-relaxed max-w-2xl mx-auto">
            ¿Tienes una idea, un proyecto o simplemente una pregunta?
            Estoy abierta a colaboraciones, propuestas profesionales
            y nuevos retos donde el diseño y el desarrollo frontend
            tengan un papel protagonista.
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="grid gap-6 bg-white p-10 rounded-2xl shadow-xl border border-zinc-100"
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
            value={form.name}
            onChange={handleChange}
            className="input"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={handleChange}
            className="input"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Teléfono (opcional)"
            value={form.phone}
            onChange={handleChange}
            className="input"
          />

          <textarea
            name="message"
            placeholder="Cuéntame qué tienes en mente..."
            rows={5}
            required
            value={form.message}
            onChange={handleChange}
            className="input resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="
              mt-4 py-3 rounded-full
              bg-pink-900 text-white
              hover:bg-pink-800
              transition-all
              active:scale-95
              disabled:opacity-60
            "
          >
            {loading ? "Enviando..." : "Enviar mensaje"}
          </button>

          {/* FEEDBACK ÉXITO */}
          {success && (
            <div className="text-green-600 text-sm animate-fade-in">
              ✔ Mensaje enviado correctamente
            </div>
          )}

          {/* FEEDBACK ERROR */}
          {error && (
            <div className="text-red-500 text-sm animate-fade-in">
              ✖ Algo ha fallado. Inténtalo de nuevo.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
