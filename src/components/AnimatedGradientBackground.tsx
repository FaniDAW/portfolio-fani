/**
 * AnimatedGradientBackground
 * ---------------------------------------
 * Solo fondo animado reutilizable
 * Sin contenido
 */

export default function AnimatedGradientBackground() {
  return (
    <>
      {/* Fondo degradado animado */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-950 via-pink-500 to-indigo-600 animate-gradient" />

      {/* Capa oscura para contraste */}
      <div className="absolute inset-0 bg-black/40" />
    </>
  );
}
