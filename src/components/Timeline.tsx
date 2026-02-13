// src/components/Timeline.tsx

import React, { useEffect, useRef, useState } from "react";
import TimelineItem from "./TimelineItem";


const projects = [
  { year: "2023-2025", title: "Frelance", description: "Dirección de arte e imagen de marca. Diseño y desarrollo de catálogos, diseño de packagings, diseño web, contenidos para RRSS, dirección de arte en sesiones fotográficas, retoque fotográfico. Colaboraciones con agencias y fotógrafos." },
  { year: "2023", title: "Travel Spa Amenities | Therapy Bodhi Explosion · Bodhi", description: "Diseño producto, colecciones y dirección fotográfica" },
  { year: "2022", title: "Therapy Bodhi Collection", description: "Desarrollo visual y dirección creativa" },
  { year: "2021", title: "Packaging Luxury Projects", description: "Diseño packaging premium" },
  { year: "2020", title: "Dirección Fotográfica Comercial", description: "Producción y dirección creativa" },
  { year: "2019", title: "Retoque Fotográfico Profesional", description: "Postproducción avanzada" },
  { year: "2018", title: "FUSIONARTE COMUNICACIÓN", description: "Dirección de arte y diseño. Responsable de diseño, encargada del desarrollo de diseños de logotipos, catálogos, packagings, desarrollo e implantación de imagen de la marca, diseño web, creación de banners y contenidos para RRSS para diferentes clientes." },
];

const Timeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progressHeight, setProgressHeight] = useState(0);

  /*
    Calcula cuánto se rellena la línea
  */
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const totalHeight = rect.height;
      const visible = windowHeight - rect.top;

      const progress = Math.min(totalHeight, Math.max(0, visible));
      setProgressHeight(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-12 bg-white dark:bg-black transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto relative">

      <h2 className="text-3xl font-semibold text-center text-pink-950 dark:text-pink-900 mb-20">
        Experiencia 
      </h2>
      
        {/* Línea base */}
        <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-gray-300 dark:bg-neutral-700"></div>

        {/* Línea que se rellena */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[2px] transition-all duration-300"
          style={{
            height: progressHeight,
            background:
              "linear-gradient(to bottom, #831843, #db2777)",
          }}
        />

        {/* GRID 3 COLUMNAS */}
        <div className="grid grid-cols-[1fr_auto_1fr] gap-x-8 relative">
          {projects.map((project, index) => (
            <TimelineItem
              key={index}
              year={project.year}
              title={project.title}
              description={project.description}
              side={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
