import React, { useEffect, useRef } from "react";

const getSeason = () => {
  const month = new Date().getMonth() + 1; // 1–12
  if ([12, 1, 2].includes(month)) return "winter";
  if ([3, 4, 5].includes(month)) return "spring";
  if ([6, 7, 8].includes(month)) return "summer"; // optional
  return "autumn";
};

const SeasonBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const season = getSeason();

    // particle setup
    const particles: {
      x: number;
      y: number;
      size: number;
      speed: number;
      angle: number;
    }[] = [];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 3,
        speed: Math.random() * 1 + 0.5,
        angle: Math.random() * 360,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.save();
        ctx.translate(p.x, p.y);

        if (season === "winter") {
          ctx.fillStyle = "white";
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        }

        if (season === "spring") {
          ctx.rotate((p.angle * Math.PI) / 180);
          ctx.fillStyle = "pink";
          ctx.beginPath();
          // Draw oval (petal)
          ctx.scale(1, 0.5);
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        }

        if (season === "autumn") {
          ctx.fillStyle = ["#d35400", "#e67e22", "#f39c12"][
            Math.floor(Math.random() * 3)
          ];
          ctx.beginPath();
          ctx.arc(0, 0, p.size + 2, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();

        // update positions
        p.y += p.speed;
        p.angle += 1; // slight rotation
        if (p.y > canvas.height) {
          p.y = 0;
          p.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(draw);
    };

    draw();

    // resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
};

export default SeasonBackground;
