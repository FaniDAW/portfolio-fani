// src/components/DesignGallery.tsx
import React from "react";

// Tipo para cada imagen
type GalleryImage = {
  src: string;          // URL de la imagen
  top: string;          // posición vertical (puede ser % o px)
  left: string;         // posición horizontal
  width: string;        // ancho de la imagen
  height: string;       // alto de la imagen
  objectPosition?: string; // cómo se recorta la imagen ("top", "top right", "center")
};

// Definimos las imágenes del grid con posiciones y tamaños distintos
const galleryImages: GalleryImage[] = [
  {
    src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg",
    top: "0%",
    left: "5%",
    width: "28%",
    height: "60%",
    objectPosition: "top",
  },
  {
    src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg",
    top: "15%",
    left: "35%",
    width: "33%",
    height: "55%",
    objectPosition: "top right",
  },
  {
    src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg",
    top: "5%",
    left: "72%",
    width: "25%",
    height: "65%",
    objectPosition: "center",
  },
  {
    src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg",
    top: "50%",
    left: "10%",
    width: "38%",
    height: "45%",
    objectPosition: "top",
  },
  {
    src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg",
    top: "55%",
    left: "55%",
    width: "35%",
    height: "40%",
    objectPosition: "center",
  },
];

const DesignGallery: React.FC = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white">
      {galleryImages.map((img, idx) => (
        <div
          key={idx}
          className="absolute overflow-hidden rounded-lg"
          style={{
            top: img.top,
            left: img.left,
            width: img.width,
            height: img.height,
            zIndex: idx + 1, // para asegurar que se superpongan ordenadamente
          }}
        >
          {/* Imagen recortable como en tailwind Example */}
          <img
            src={img.src}
            alt={`hero-${idx}`}
            className="w-full h-full object-cover"
            style={{
              objectPosition: img.objectPosition || "center",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default DesignGallery;
