import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

/**
 * TechStack
 * ---------
 * Sección de tecnologías utilizadas
 * - Layout 1/3 texto + 2/3 logos
 * - Animación al hacer scroll
 */

const techs = [
  { name: "React", logo: "https://res.cloudinary.com/diaryelxt/image/upload/v1770920183/react_duz4qp.png" },
  { name: "JavaScript", logo: "https://res.cloudinary.com/diaryelxt/image/upload/v1770920183/javaScript_anaikb.png" },
  { name: "Tailwind", logo: "https://res.cloudinary.com/diaryelxt/image/upload/v1770920183/tailwind2_xgj4uq.png" },
  { name: "Vite", logo: "https://res.cloudinary.com/diaryelxt/image/upload/v1770920186/vite2_ndcdcl.png" },
  { name: "Bootstrap", logo: "https://res.cloudinary.com/diaryelxt/image/upload/v1770920185/Bootstrap_logo.svg_t3xyaj.png" },
  { name: "Node", logo: "https://res.cloudinary.com/diaryelxt/image/upload/v1770920185/Node2_nb47de.png" },

  
];

export default function TechStack() {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <section className="bg-white dark:bg-zinc-900 py-24">
      <div
        ref={ref}
        className={`
          max-w-6xl mx-auto px-6
          grid grid-cols-1 md:grid-cols-3 gap-12
          transition-all duration-700
          ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }
        `}
      >
        {/* TEXTO */}
        <div className="md:col-span-1">
          <h3 className="text-2xl font-semibold text-pink-900 dark:text-pink-800 mb-4">
            Software & herramientas
          </h3>
          <p className="text-zinc-700 font-light dark:text-zinc-300 leading-relaxed">
            Tecnologías utilizadas a lo largo del desarrollo de los proyectos,
            desde la estructura y el diseño hasta la lógica y las animaciones.
          </p>
        </div>

        {/* LOGOS */}
        <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-10 items-center">
          {techs.map((tech) => (
            <img
              key={tech.name}
              src={tech.logo}
              alt={tech.name}
              className="
                h-12 mx-auto
                grayscale opacity-50
                hover:grayscale-0 hover:opacity-100 hover:scale-110
                transition
              "
            />
          ))}
        </div>
      </div>
    </section>
  );
}
