import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import UnderlineHover from "./UnderlineHover";


/**
 * Bloque de texto explicativo
 * - Mismo ancho que la galería
 * - Animación al hacer scroll
 */
export default function ProjectsDescription() {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <section className="bg-white dark:bg-zinc-900 py-20">
      <div
        ref={ref}
        className={`
          max-w-6xl mx-auto px-6
          transition-all duration-700
          ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }
        `}
      >
        <p className="text-3xl text-center leading-relaxed text-pink-900">
            Proyectos desarrollados durante mi formación, </p>
        <p className="text-5xl text-center leading-relaxed text-pink-900">    enfocados en <strong><UnderlineHover>diseño de interfaces</UnderlineHover></strong>, 
            desarrollo frontend y <strong><UnderlineHover>experiencia de usuario</UnderlineHover></strong>.</p>
        <br /><br />
        <p className="text-lg font-light leading-relaxed text-zinc-700 dark:text-zinc-300">

            Aunque estos proyectos nacen en el entorno académico, están construidos con tecnologías y flujos de trabajo
            profesionales, similares a los utilizados en entornos reales de producción.
            <br />
            <br />
            Entre ellos se incluyen la construcción de <strong>layouts complejos mediante sistemas 
            de grid</strong>, el desarrollo de <strong>landings completas orientadas a diseño y conversión</strong>, 
            y un proyecto centrado en <strong>animaciones e interacciones con JavaScript</strong>,
            donde la lógica y la experiencia de usuario juegan un papel clave.
            <br />
            <br />
            Además, he trabajado con <strong>Bootstrap</strong> para comprender
            sistemas de componentes y rejillas responsivas, comparando su enfoque
            con soluciones más modernas como Tailwind CSS.
        </p>
      </div>
    </section>
  );
}
