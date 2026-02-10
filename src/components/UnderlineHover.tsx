/**
 * UnderlineHover
 * --------------
 * Componente para subrayado elegante al hover
 * - Línea fina
 * - Animación suave
 * - Reutilizable en textos
 */

export default function UnderlineHover({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span
      className="
        relative
        cursor-default
        after:absolute
        after:left-0
        after:-bottom-0.5
        after:h-[1px]
        after:w-0
        after:bg-pink-800
        after:transition-all
        after:duration-300
        hover:after:w-full
      "
    >
      {children}
    </span>
  );
}
