const HeroGradient = () => {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* FONDO ANIMADO 
      absolute inset-0 -> fondo ocupa toda la pantalla // animate-gradient --> movimiento constante, como si fuera video*/}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-950 via-pink-500 to-indigo-600 animate-gradient" />

      {/* CAPA OSCURA (para que el texto se lea bien) */}
      <div className="absolute inset-0 bg-black/30" />

      {/* CONTENIDO 
      relative z-10 --> texto encima del fondo */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white max-w-3xl px-6 animate-fade-in">
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hola, soy Fani
          </h1>

          <p className="text-lg md:text-xl opacity-90 mb-8">
            Diseñadora gráfica y futura desarrolladora frontend.
            Creo interfaces donde diseño y código trabajan juntos.
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="/contacto"
              className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
            >
              Contáctame
            </a>

            <a
              href="/diseno"
              className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
            >
              Ver proyectos
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroGradient;
