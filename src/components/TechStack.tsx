import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

/**
 * TechStack
 * ---------
 * Sección de tecnologías utilizadas
 * - Layout 1/3 texto + 2/3 logos
 * - Animación al hacer scroll
 */

const techs = [
  { name: "React", logo: "/logos/react.svg" },
  { name: "TypeScript", logo: "/logos/typescript.svg" },
  { name: "Tailwind", logo: "/logos/tailwind.svg" },
  { name: "Vite", logo: "/logos/vite.svg" },
  { name: "Bootstrap", logo: "/logos/bootstrap.svg" },
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
          <h3 className="text-2xl font-semibold text-pink-900 mb-4">
            Software & herramientas
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
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
