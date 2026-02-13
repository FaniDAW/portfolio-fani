// src/components/AboutSection.tsx

import React from "react";
import UnderlineHover from "./UnderlineHover";


/*
  SECCIÓN SOBRE MÍ
  - Imagen izquierda
  - Texto derecha
  - Responsive (en móvil se apilan)
*/

const AboutSection: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 md:px-16">
      
      {/* Contenedor centrado */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* IMAGEN */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://res.cloudinary.com/diaryelxt/image/upload/v1770921904/7930d7_c3ddfa3e020742159e811bfc6bc50709_mv2_ttkguy.avif"
            alt="Fani Esquerdo"
            className="shadow-xl object-cover w-180 h-96"
          />
        </div>

        {/* TEXTO */}
        <div className="md:w-1/2">


          <p className="text-xl text-pink-900 leading-relaxed mb-4">
            <UnderlineHover>Pasión por el detalle, ilusión y experiencia </UnderlineHover>  son cualidades
             que <UnderlineHover> definen mis proyectos.</UnderlineHover>
          </p>

          <p className="text-lg text-zinc-700 font-light dark:text-gray-200 leading-relaxed mb-4">
            Siempre con el máximo de energía y dedicación en cada trabajo, 
            desde el retoque fotográfico hasta el diseño de packaging de lujo.
          </p>

          <p className="text-lg text-zinc-700 font-light dark:text-gray-200 leading-relaxed mb-4">
            Me apasiona crear experiencias visuales coherentes, 
            elegantes y con identidad propia.
          </p> 

          <p className="text-lg text-zinc-700 font-light dark:text-gray-200 leading-relaxed mb-4">
          Este portfolio recoge mi camino técnico:
          proyectos web, aplicaciones, y soluciones interactivas desarrolladas con React, TypeScript y tecnologías modernas.
          </p> 

          <p className="text-lg text-zinc-700 font-light dark:text-gray-200 leading-relaxed mb-4">          
          ¡Encantada de que estés aquí!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
