/*
  SectionDivider
  -----------------------------
  Separador visual horizontal
  - Degradado animado
  - Altura configurable
  - Se coloca entre secciones
  - NO usa absolute
  - No rompe el layout
*/

type SectionDividerProps = {
  height?: string; // Permite cambiar altura si quieres
};

export default function SectionDivider({
  height = "h-[80px]",
}: SectionDividerProps) {
  return (
    <div className={`w-full relative ${height} overflow-hidden`}>
      
      {/* Capa degradado animado */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-pink-950
          via-pink-500
          to-indigo-600
          bg-[length:200%_200%]
          animate-gradient
        "
      />

      {/* Overlay opcional para suavizar */}
      <div className="absolute inset-0 bg-black/20 dark:bg-black/40" />

    </div>
  );
}
