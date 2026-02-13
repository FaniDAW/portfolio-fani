import React from "react";

/* -----------------------------
   TIPADO DE PROPS (TypeScript)
--------------------------------*/

export type DesignItemProps = {
  image: string;   // URL de la imagen
  title: string;   // Título que aparece en hover
};

/* -----------------------------
   COMPONENTE
--------------------------------*/

const DesignItem: React.FC<DesignItemProps> = ({ image, title }) => {
  return (
    <div className="w-64 h-[24rem] relative group overflow-hidden rounded-2xl transition-all duration-300 hover:scale-95">
      
      {/* IMAGEN */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div
        className="
          absolute inset-0
          bg-black/40
          backdrop-blur-sm
          flex items-center justify-center
          opacity-0
          group-hover:opacity-100
          transition-all duration-300
        "
      >
        <p className="text-white text-lg font-semibold text-center px-4">
          {title}
        </p>
      </div>
    </div>
  );
};

export default DesignItem;
