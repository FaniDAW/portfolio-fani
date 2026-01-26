import { useEffect, useRef, useState } from "react";

/**
 * Hook para revelar elementos al hacer scroll
 */
export const useReveal = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Cuando el elemento entra en pantalla
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // deja de observar (solo una vez)
        }
      },
      {
        threshold: 0.2, // 20% visible para activarse
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};
