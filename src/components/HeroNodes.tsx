import { useEffect, useRef } from "react";

/**
 * HeroNodes
 * ----------
 * Hero visual con canvas interactivo
 * - Puntos flotantes (nodos)
 * - Conexiones solo al pasar el ratón
 * - Estética elegante y sutil
 * - Ideal para portfolio frontend / design
 */

export default function HeroNodes() {
  // Referencia al canvas
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    /**
     * Ajusta el canvas al tamaño de la ventana
     */
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.75; // 👈 hero menos alto
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    /**
     * Estado del ratón
     */
    const mouse = {
      x: canvas.width / 2,
      y: canvas.height / 2,
    };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    /**
     * Creamos los nodos
     */
    const DOTS_AMOUNT = 90;
    const dots: Dot[] = [];

    for (let i = 0; i < DOTS_AMOUNT; i++) {
      dots.push(new Dot(canvas));
    }

    /**
     * Loop de animación principal
     */
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Reset del color base (blanco/gris elegante)
      dots.forEach((dot) => {
        dot.color = "rgba(255,255,255,0.75)";
        dot.update();
        dot.draw(ctx);
      });

      // Conectar nodos solo cerca del ratón
      connectDots(dots, ctx, mouse);

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section className="relative bg-zinc-950 overflow-hidden">
      {/* Canvas de fondo */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Contenido del hero */}
      <div className="relative z-10 flex min-h-[75vh] items-center justify-center">
        <div className="text-center max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Diseño + Código
          </h1>
          <p className="text-lg md:text-xl text-zinc-400">
            Interfaces limpias, interacción consciente y lógica frontend.
          </p>
        </div>
      </div>
    </section>
  );
}

/* =================================================
   CLASE DOT (CADA NODO)
================================================= */

class Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  canvas: HTMLCanvasElement;
  color: string;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;

    // Posición inicial aleatoria
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;

    // Velocidad suave
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;

    this.radius = 2;
    this.color = "rgba(255,255,255,0.75)";
  }

  /**
   * Movimiento + rebote en bordes
   */
  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > this.canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > this.canvas.height) this.vy *= -1;
  }

  /**
   * Dibuja el nodo
   */
  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

/* =================================================
   CONEXIONES ENTRE NODOS
================================================= */

/**
 * Conecta nodos cercanos SOLO si están cerca del ratón
 * - Líneas muy sutiles
 * - Los nodos conectados se vuelven pink-800
 */
function connectDots(
  dots: Dot[],
  ctx: CanvasRenderingContext2D,
  mouse: { x: number; y: number }
) {
  dots.forEach((a) => {
    dots.forEach((b) => {
      if (a === b) return;

      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const mx = a.x - mouse.x;
      const my = a.y - mouse.y;
      const mouseDistance = Math.sqrt(mx * mx + my * my);

      // Solo conectamos cerca del ratón
      if (distance < 120 && mouseDistance < 160) {
        // Línea elegante (muy suave)
        ctx.strokeStyle = "rgba(255,255,255,0.15)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();

        // 🎨 Resaltamos nodos conectados (pink-800)
        a.color = "rgb(157,23,77)";
        b.color = "rgb(157,23,77)";
      }
    });
  });
}
