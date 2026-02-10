import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

const techs = [
    { name: "React", logo: "https://res.cloudinary.com/diaryelxt/image/upload/v1770704961/react_cpt9vc.png" },
    { name: "TypeScript", logo: "https://res.cloudinary.com/diaryelxt/image/upload/v1770705128/typescript_uozsvy.svg" },
    { name: "Tailwind", logo: "https://res.cloudinary.com/diaryelxt/image/upload/v1770704961/tailwind-css-logo-vector_hnzzh8.svg" },
    { name: "Vite", logo: "https://res.cloudinary.com/diaryelxt/image/upload/v1770704961/lg-676a3861d111b-Vite_t3iw2b.webp" },
    { name: "React", logo: "https://res.cloudinary.com/diaryelxt/image/upload/v1770704961/react_cpt9vc.png" },

];

export default function TechStack() {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <section className="bg-white py-20">
      <div
        ref={ref}
        className={`
          max-w-6xl mx-auto px-6
          grid grid-cols-2 md:grid-cols-5 gap-12 items-center
          transition-all duration-700
          ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }
        `}
      >
        {techs.map((tech) => (
          <img
            key={tech.name}
            src={tech.logo}
            alt={tech.name}
            className="
              h-12 mx-auto
              grayscale opacity-50
              hover:grayscale-0 hover:opacity-100 hover:scale-110
              transition
            "
          />
        ))}
      </div>
    </section>
  );
}
