import { useEffect, useRef } from "react";

import "../Styles/App.scss";

const PARTICLE_COUNT = 140;
const CONNECT_DISTANCE = 100;
const MOUSE_DISTANCE = 140;

export default function Background() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let width = window.innerWidth;
        let height = window.innerHeight;

        // RESOLUTION FIX
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

        // MOUSE
        const mouse = {
            x: width / 2,
            y: height / 2,
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        // PARTICLES
        const particles = Array.from(
            { length: PARTICLE_COUNT },
            () => ({
                x: Math.random() * width,
                y: Math.random() * height,

                vx: (Math.random() - 0.5) * 1.2,
                vy: (Math.random() - 0.5) * 1.2,

                radius: Math.random() * 2 + 1,
            })
        );

        let animationFrame;

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // UPDATE PARTICLES
            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;

                // INTERAÇÃO COM MOUSE
                const dxMouse = p.x - mouse.x;
                const dyMouse = p.y - mouse.y;

                const distMouseSq =
                    dxMouse * dxMouse +
                    dyMouse * dyMouse;

                if (
                    distMouseSq <
                    MOUSE_DISTANCE * MOUSE_DISTANCE
                ) {
                    const dist = Math.sqrt(distMouseSq) || 1;

                    const force =
                        (MOUSE_DISTANCE - dist) /
                        MOUSE_DISTANCE;

                    p.vx +=
                        (dxMouse / dist) * force * 0.08;

                    p.vy +=
                        (dyMouse / dist) * force * 0.08;
                }

                // DAMPING
                p.vx *= 0.99;
                p.vy *= 0.99;

                // BOUNDS
                if (p.x <= 0 || p.x >= width)
                    p.vx *= -1;

                if (p.y <= 0 || p.y >= height)
                    p.vy *= -1;
            }

            // CONNECTIONS
            ctx.lineWidth = 1;
            ctx.shadowBlur = 0;

            for (let i = 0; i < particles.length; i++) {
                const p1 = particles[i];

                // LINHA COM MOUSE
                const mdx = p1.x - mouse.x;
                const mdy = p1.y - mouse.y;

                const mouseDist = Math.sqrt(
                    mdx * mdx + mdy * mdy
                );

                if (mouseDist < CONNECT_DISTANCE) {
                    const opacity =
                        1 -
                        mouseDist / CONNECT_DISTANCE;

                    ctx.beginPath();

                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(mouse.x, mouse.y);

                    ctx.strokeStyle = `rgba(122,242,152,${opacity * 0.5})`;

                    ctx.stroke();
                }

                // LINHAS ENTRE PARTICULAS
                for (
                    let j = i + 1;
                    j < particles.length;
                    j++
                ) {
                    const p2 = particles[j];

                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;

                    const distSq = dx * dx + dy * dy;

                    if (
                        distSq <
                        CONNECT_DISTANCE *
                            CONNECT_DISTANCE
                    ) {
                        const opacity =
                            1 -
                            distSq /
                                (CONNECT_DISTANCE *
                                    CONNECT_DISTANCE);

                        ctx.beginPath();

                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);

                        ctx.strokeStyle = `rgba(122,242,152,${opacity * 0.25})`;

                        ctx.stroke();
                    }
                }
            }

            // DRAW PARTICLES
            for (const p of particles) {
                ctx.beginPath();

                ctx.arc(
                    p.x,
                    p.y,
                    p.radius,
                    0,
                    Math.PI * 2
                );

                ctx.fillStyle = "#7AF298";
                ctx.fill();
            }

            animationFrame =
                requestAnimationFrame(animate);
        };

        animate();

        // EVENTS
        window.addEventListener(
            "resize",
            setCanvasSize
        );

        window.addEventListener(
            "mousemove",
            handleMouseMove
        );

        // CLEANUP
        return () => {
            cancelAnimationFrame(animationFrame);

            window.removeEventListener(
                "resize",
                setCanvasSize
            );

            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="background-canvas"
        />
    );
}