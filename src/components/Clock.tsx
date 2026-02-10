import { useEffect, useState } from "react";

/**
 * Componente Reloj
 * - Se actualiza cada segundo
 * - Demuestra uso de estado + efectos
 */
export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Cada segundo actualizamos la hora
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // LIMPIEZA (muy importante en React)
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="font-mono text-sm text-gray-500 dark:text-gray-400">
      {time.toLocaleTimeString()}
    </span>
  );
}
