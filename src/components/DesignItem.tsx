import { useReveal } from "../hooks/useReveal";

type DesignItemProps = {
  image: string;
  title: string;
  client: string;
};

const DesignItem = ({ image, title, client }: DesignItemProps) => {
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref}
      className={`
        relative group overflow-hidden rounded-xl
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      {/* IMAGEN */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* OVERLAY */}
      <div
        className="
          absolute inset-0
          bg-black/60
          opacity-0
          group-hover:opacity-100
          transition
          flex items-center justify-center
        "
      >
        <div className="text-center text-white px-4">
          <p className="font-semibold">{title}</p>
          <p className="text-sm opacity-80">{client}</p>
        </div>
      </div>
    </div>
  );
};

export default DesignItem;
