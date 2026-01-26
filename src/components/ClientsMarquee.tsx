const clients = [
  "Google",
  "Spotify",
  "Adobe",
  "Nike",
  "Netflix",
  "Meta",
  "Amazon",
  "Airbnb",
];

export default function ClientsMarquee() {
  return (
    /* 
      w-screen = ocupa todo el viewport
      overflow-hidden = corta lo que sale (efecto continuo)
      relative = referencia para animaciones
    */
    <section className="w-screen overflow-hidden bg-transparent py-12">
      {/* 
        flex-nowrap evita saltos de línea
        animate-marquee es la animación
      */}
      <div className="flex w-max animate-marquee gap-16 px-8">
        {/* Duplicamos la lista para efecto infinito */}
        {[...clients, ...clients].map((client, i) => (
          <span
            key={i}
            className="
              text-4xl font-semibold
              text-gray-400
              whitespace-nowrap
              select-none
            "
          >
            {client}
          </span>
        ))}
      </div>
    </section>
  );
}
