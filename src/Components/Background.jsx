import { useEffect, useRef } from "react";
import "../Styles/Background.scss";

const BASE_PARTICLES = 120; // já menor
const CONNECT_DISTANCE = 100;
const MOUSE_DISTANCE = 140;

export default function Background() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let width = window.innerWidth;
        let height = window.innerHeight;

        const isMobile = width < 768;
        const PARTICLE_COUNT = isMobile ? 60 : BASE_PARTICLES;

        let mouse = { x: width / 2, y: height / 2 };
        let running = true;
        let lastTime = 0;

        const setCanvasSize = () => {
            const dpr = window.devicePixelRatio || 1;

            width = window.innerWidth;
            height = window.innerHeight;

            canvas.width = width * dpr;
            canvas.height = height * dpr;

            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        setCanvasSize();

        const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 1,
            vy: (Math.random() - 0.5) * 1,
            radius: Math.random() * 1.3 + 0.4,
        }));

        const updateMouse = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const pause = () => (running = false);
        const resume = () => {
            running = true;
            requestAnimationFrame(animate);
        };

        const animate = (time) => {
            if (!running) return;

            // throttle mobile (30fps)
            if (isMobile && time - lastTime < 33) {
                requestAnimationFrame(animate);
                return;
            }
            lastTime = time;

            ctx.clearRect(0, 0, width, height);

            // UPDATE PARTICLES
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                p.x += p.vx;
                p.y += p.vy;

                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const distSq = dx * dx + dy * dy;

                if (distSq < MOUSE_DISTANCE * MOUSE_DISTANCE) {
                    const dist = Math.sqrt(distSq) || 1;
                    const force = (MOUSE_DISTANCE - dist) / MOUSE_DISTANCE;

                    p.vx += (dx / dist) * force * 0.05;
                    p.vy += (dy / dist) * force * 0.05;
                }

                p.vx *= 0.98;
                p.vy *= 0.98;

                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;
            }

            // CONNECTIONS (OTIMIZADO: menos intensidade visual)
            ctx.lineWidth = 1;
            ctx.shadowBlur = 0;

            for (let i = 0; i < particles.length; i++) {
                const p1 = particles[i];

                // conexão com mouse
                const mdx = p1.x - mouse.x;
                const mdy = p1.y - mouse.y;
                const mouseDistSq = mdx * mdx + mdy * mdy;

                if (mouseDistSq < CONNECT_DISTANCE * CONNECT_DISTANCE) {
                    const opacity = 1 - Math.sqrt(mouseDistSq) / CONNECT_DISTANCE;

                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(mouse.x, mouse.y);

                    ctx.strokeStyle = `rgba(180,255,220,${opacity * 0.25})`;
                    ctx.stroke();
                }

                // conexão entre partículas (OTIMIZAÇÃO: só metade da densidade visual)
                for (let j = i + 1; j < particles.length; j += 2) {
                    const p2 = particles[j];

                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distSq = dx * dx + dy * dy;

                    if (distSq < CONNECT_DISTANCE * CONNECT_DISTANCE) {
                        const opacity = 1 - distSq / (CONNECT_DISTANCE * CONNECT_DISTANCE);

                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);

                        ctx.strokeStyle = `rgba(140,255,200,${opacity * 0.12})`;
                        ctx.stroke();
                    }
                }
            }

            // DRAW PARTICLES (sem shadow pesado)
            ctx.fillStyle = "rgba(180,255,220,0.85)";

            for (const p of particles) {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();
            }

            requestAnimationFrame(animate);
        };

        // EVENTS (CORRETO AGORA)
        window.addEventListener("resize", setCanvasSize);
        window.addEventListener("pointermove", updateMouse, { passive: true });

        document.addEventListener("visibilitychange", () => {
            if (document.hidden) pause();
            else resume();
        });

        requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", setCanvasSize);
            window.removeEventListener("pointermove", updateMouse);
            document.removeEventListener("visibilitychange", pause);
        };
    }, []);

    return <canvas ref={canvasRef} className="background-canvas" />;
}