import React from "react";
import DesignItem from "./DesignItem";

/* -----------------------------
   DATA DE LA GALERÍA
--------------------------------*/

const cardData = [
  {
    title: "Dirección de arte",
    image:
      "https://res.cloudinary.com/diaryelxt/image/upload/v1770921916/7930d7_9eaab729a14b4215b77f53408a57319e_yse2vu.avif",
  },
  {
    title: "Dirección de arte, diseño de marca",
    image:
      "https://res.cloudinary.com/diaryelxt/image/upload/v1770921920/7930d7_fe1183a5b8c147528dd11be99bbfe7d9_iv7spl.avif",
  },
  {
    title: "Dirección de arte de sesión fotográfica",
    image:
      "https://res.cloudinary.com/diaryelxt/image/upload/v1770921915/7930d7_eef38de1c6d941e5add33076e6463963_edvlh2.avif",
  },
  {
    title: "Imagen grafica para campaña Publicitaria",
    image:
      "https://res.cloudinary.com/diaryelxt/image/upload/v1770921910/7930d7_74671913b34a4f6a9904279719e3e101_fqlle4.avif",
  },
];

/* -----------------------------
   COMPONENTE PRINCIPAL
--------------------------------*/

const DesignGallery: React.FC = () => {
  const [stopScroll, setStopScroll] = React.useState(false);

  return (
    <>
      {/* Animación del marquee */}
      <style>{`
        .marquee-inner {
          animation: marqueeScroll linear infinite;
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* CONTENEDOR PRINCIPAL FULL SCREEN */}
      <div className="animated-gradient min-h-screen flex items-center">
        
        {/* WRAPPER con overflow oculto */}
        <div
          className="overflow-hidden w-full relative"
          onMouseEnter={() => setStopScroll(true)}
          onMouseLeave={() => setStopScroll(false)}
        >
          
          {/* Degradado lateral izquierdo */}
          <div className="absolute left-0 top-0 h-full w-32 z-10 pointer-events-none bg-gradient-to-r from-black/60 to-transparent" />

          {/* MARQUEE */}
          <div
            className="marquee-inner flex w-fit"
            style={{
              animationPlayState: stopScroll ? "paused" : "running",
              animationDuration: cardData.length * 3000 + "ms",
            }}
          >
            <div className="flex items-center">
              {[...cardData, ...cardData].map((card, index) => (
                <div key={index} className="mx-6">
                  <DesignItem
                    image={card.image}
                    title={card.title}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Degradado lateral derecho */}
          <div className="absolute right-0 top-0 h-full w-32 z-10 pointer-events-none bg-gradient-to-l from-black/60 to-transparent" />
        </div>
      </div>
    </>
  );
};

export default DesignGallery;
