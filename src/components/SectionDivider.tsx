/**
 * SectionDivider
 * Separador visual degradado en movimiento -->> secciones
 */

export default function SectionDivider() {
  return (
    <div className="w-full py-16 flex justify-center">
      <div className="h-[100px] absolute inset-0 bg-gradient-to-r from-pink-950 via-pink-500 to-indigo-600 animate-gradient" />
      <div className="h-[100px] absolute inset-0 bg-black/30" />

    </div>
  );
}
