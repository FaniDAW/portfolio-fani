/**
 * Marquee de logos de clientes
 * - Full width REAL
 * - Animación infinita
 * - Funciona aunque esté dentro de layouts centrados
 */

const clients = [
  {
    name: "Bodhi",
    logo: "https://res.cloudinary.com/diaryelxt/image/upload/v1770668931/logo-1-1_mzpme6.png",
  },
  {
    name: "Rabat",
    logo: "https://res.cloudinary.com/diaryelxt/image/upload/v1770668930/Rabat_logo-_yyedtx.jpg",
  },
  {
    name: "Interbaby",
    logo: "https://res.cloudinary.com/diaryelxt/image/upload/v1770668930/interbaby-trans_n2qjan.png",
  },
];

export default function ClientsMarquee() {
  return (
    <section className="w-full overflow-hidden py-16">
      {/* pista animada */}
      <div className="flex w-max animate-marquee-fast gap-24 px-12">
        {/* duplicamos 3 veces para asegurar ancho */}
        {[...clients, ...clients, ...clients].map((client, i) => (
          <img
            key={i}
            src={client.logo}
            alt={client.name}
            className="
              h-14
              object-contain
              grayscale
              opacity-40
              hover:opacity-80
              transition
              duration-300
              select-none
            "
          />
        ))}
      </div>
    </section>
  );
}
