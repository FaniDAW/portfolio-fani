import { useEffect, useRef } from "react";

const HeroDots = () => {
  // Referencia al canvas (el lienzo donde dibujamos)
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Ajustar canvas al tamaño de la pantalla
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Guardamos el mouse
    const mouse = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: 120,
    };

    // Escuchamos el movimiento del ratón
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    // Creamos los puntos
    const dots: Dot[] = [];
    const DOTS_AMOUNT = 80;

    for (let i = 0; i < DOTS_AMOUNT; i++) {
      dots.push(new Dot(canvas, ctx));
    }

    // Animación principal
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        dot.update(mouse);
        dot.draw();
      });

      connectDots(dots, ctx);

      requestAnimationFrame(animate);
    };

    animate();

    // Ajustar al cambiar tamaño de pantalla
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <section className="relative h-screen bg-slate-950 overflow-hidden">
      {/* CANVAS */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* CONTENIDO */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Diseño + Código
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Conectando ideas visuales con lógica frontend.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroDots;

/* =========================
   CLASE DOT (CADA PUNTO)
========================= */

class Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D
  ) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;

    this.vx = (Math.random() - 0.5) * 0.6;
    this.vy = (Math.random() - 0.5) * 0.6;

    this.size = 2;
  }

  update(mouse: { x: number; y: number; radius: number }) {
    this.x += this.vx;
    this.y += this.vy;

    // Rebote en bordes
    if (this.x < 0 || this.x > this.canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > this.canvas.height) this.vy *= -1;

    // Interacción con el mouse
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < mouse.radius) {
      this.x -= dx / 20;
      this.y -= dy / 20;
    }
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.fillStyle = "rgba(255,255,255,0.8)";
    this.ctx.fill();
  }
}

/* =========================
   CONECTAR PUNTOS
========================= */

function connectDots(dots: Dot[], ctx: CanvasRenderingContext2D) {
  for (let i = 0; i < dots.length; i++) {
    for (let j = i; j < dots.length; j++) {
      const dx = dots[i].x - dots[j].x;
      const dy = dots[i].y - dots[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 120) {
        ctx.strokeStyle = `rgba(255,255,255,${1 - distance / 120})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(dots[i].x, dots[i].y);
        ctx.lineTo(dots[j].x, dots[j].y);
        ctx.stroke();
      }
    }
  }
}
