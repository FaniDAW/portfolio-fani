import { useEffect, useRef, useState } from "react";

/**
 * useRevealOnScroll
 * -----------------
 * Hook reutilizable para animaciones al hacer scroll
 *
 * - Detecta cuando un elemento entra en el viewport
 * - Devuelve una ref y un booleano
 */
export function useRevealOnScroll() {
  // Referencia al elemento que queremos observar
  const ref = useRef<HTMLDivElement | null>(null);

  // Estado: ¿ya es visible?
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    // Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // solo una vez
        }
      },
      {
        threshold: 0.2, // 20% visible
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}
