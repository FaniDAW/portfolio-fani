import { useEffect, useRef, useState } from "react";

/**
 * Footer con reloj en tiempo real
 * - Animación al entrar en viewport
 * - Hover elegante
 */

export default function Footer() {
  const [time, setTime] = useState(new Date());
  const footerRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  // Reloj
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Detectar scroll (cuando aparece el footer)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`
        mt-32 border-t
        border-zinc-200 dark:border-zinc-800
        transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <div className="mx-auto max-w-7xl px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* LOGO */}
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold text-zinc-600">
            Fani<span className="text-pink-900 dark:text-pink-800">.design</span>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Todos los derechos reservados
          </p>
        </div>

        {/* RELOJ */}
        <div
          className="
            font-mono px-6 py-2 rounded-full
            border border-zinc-300 dark:border-zinc-600
            transition-all duration-300
            hover:scale-110 hover:bg-pink-900 hover:text-white
          "
        >
          {time.toLocaleTimeString()}
        </div>

        {/* REDES */}
        <div className="flex gap-6 text-gray-500 dark:text-gray-400">
          <a href="https://www.instagram.com/fani_esquerdo/" target="_blank" className="hover:text-pink-900 transition">
            Instagram
          </a>
          <a href="https://www.linkedin.com/in/fani-esquerdo-a7627363/" target="_blank" className="hover:text-pink-900 transition">
            LinkedIn
          </a>
          <a href="https://github.com/FaniDAW" target="_blank" className="hover:text-pink-900 transition">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
