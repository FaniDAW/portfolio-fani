import React, { useEffect, useRef, useState } from "react";

/*
  Linea de tiempo:
  - año del proyecto + título del trabajo + descripción breve
  - linea del tiempo -> left | right
  - onVisible: función que avisa al padre cuando el item es visible
*/

type TimelineItemProps = {
  year: string;
  title: string;
  description: string;
  side: "left" | "right";
};

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  description,
  side,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Empieza en true para que nunca desaparezca
  const [active, setActive] = useState(true);

  /*
    Observer solo para activar el punto rosa.
    NO para controlar visibilidad.
  */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="contents">

      {/* IZQUIERDA */}
      <div className="col-start-1">
        {side === "left" && (
          <div className="bg-white dark:bg-neutral-900 shadow-xl rounded-2xl p-8 mb-20">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              {year}
            </p>

            <p className="text-lg text-pink-900 dark:text-gray-200">
              {title}
            </p>

            <p className="text-zinc-700 font-light dark:text-zinc-400 mt-2 leading-relaxed">
              {description}
            </p>
          </div>
        )}
      </div>

      {/* CENTRO (PUNTO) */}
      <div className="col-start-2 flex justify-center relative">
        <div
          className={`
            w-4 h-4 rounded-full border-2 mt-8 transition-all duration-500
            ${
              active
                ? "bg-pink-900 border-pink-900 dark:bg-pink-500 dark:border-pink-500"
                : "bg-white dark:bg-neutral-800 border-gray-400"
            }
          `}
        />
      </div>

      {/* DERECHA */}
      <div className="col-start-3">
        {side === "right" && (
          <div className="bg-white dark:bg-neutral-900 shadow-xl rounded-2xl p-8 mb-20">
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
              {year}
            </p>

            <p className="text-lg text-pink-900 dark:text-zinc-200">
              {title}
            </p>

            <p className="text-zinc-700 font-light dark:text-zinc-400 mt-2 leading-relaxed">
              {description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
