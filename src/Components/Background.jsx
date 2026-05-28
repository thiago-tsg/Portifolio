import { useEffect, useState } from "react";

const getRandom = (min, max) => Math.random() * (max - min) + min;

export default function Background() {
    const [shapes, setShapes] = useState([]);
    const [ready, setReady] = useState(false);

    // função segura de tamanho (corrige mobile bug)
    const getSize = () => ({
        w: window.innerWidth,
        h: window.innerHeight || document.documentElement.clientHeight
    });

    // inicialização das formas
    useEffect(() => {
        const { w, h } = getSize();

        const initial = [
            {
                id: 1,
                type: "circle",
                x: getRandom(0, Math.max(0, w - 120)),
                y: getRandom(0, Math.max(0, h - 120)),
                vx: getRandom(-4, 4),
                vy: getRandom(-4, 4),
            },
            {
                id: 2,
                type: "circle",
                x: getRandom(0, Math.max(0, w - 120)),
                y: getRandom(0, Math.max(0, h - 120)),
                vx: getRandom(-4, 4),
                vy: getRandom(-4, 4),
            },
            {
                id: 3,
                type: "circle",
                x: getRandom(0, Math.max(0, w - 120)),
                y: getRandom(0, Math.max(0, h - 120)),
                vx: getRandom(-4, 4),
                vy: getRandom(-4, 4),
            },
            {
                id: 4,
                type: "circle",
                x: getRandom(0, Math.max(0, w - 120)),
                y: getRandom(0, Math.max(0, h - 120)),
                vx: getRandom(-4, 4),
                vy: getRandom(-4, 4),
            },
            {
                id: 5,
                type: "circle",
                x: getRandom(0, Math.max(0, w - 120)),
                y: getRandom(0, Math.max(0, h - 120)),
                vx: getRandom(-4, 4),
                vy: getRandom(-4, 4),
            },
            {
                id: 6,
                type: "circle",
                x: getRandom(0, Math.max(0, w - 120)),
                y: getRandom(0, Math.max(0, h - 120)),
                vx: getRandom(-4, 4),
                vy: getRandom(-4, 4),
            },
            {
                id: 7,
                type: "circle",
                x: getRandom(0, Math.max(0, w - 120)),
                y: getRandom(0, Math.max(0, h - 120)),
                vx: getRandom(-4, 4),
                vy: getRandom(-4, 4),
            },
            {
                id: 8,
                type: "circle",
                x: getRandom(0, Math.max(0, w - 120)),
                y: getRandom(0, Math.max(0, h - 120)),
                vx: getRandom(-4, 4),
                vy: getRandom(-4, 4),
            },
            {
                id: 9,
                type: "circle",
                x: getRandom(0, Math.max(0, w - 120)),
                y: getRandom(0, Math.max(0, h - 120)),
                vx: getRandom(-4, 4),
                vy: getRandom(-4, 4),
            },
            {
                id: 10,
                type: "circle",
                x: getRandom(0, Math.max(0, w - 120)),
                y: getRandom(0, Math.max(0, h - 120)),
                vx: getRandom(-4, 4),
                vy: getRandom(-4, 4),
            },
            {
                id: 11,
                type: "circle",
                x: getRandom(0, Math.max(0, w - 120)),
                y: getRandom(0, Math.max(0, h - 120)),
                vx: getRandom(-4, 4),
                vy: getRandom(-4, 4),
            },
            {
                id: 12,
                type: "circle",
                x: getRandom(0, Math.max(0, w - 120)),
                y: getRandom(0, Math.max(0, h - 120)),
                vx: getRandom(-4, 4),
                vy: getRandom(-4, 4),
            },
        ];

        setShapes(initial);

        setTimeout(() => setReady(true), 50);
    }, []);

    // lógica de movimento e colisão
    useEffect(() => {
        if (!ready) return;

        const interval = setInterval(() => {
            setShapes(prev => {
                const newShapes = prev.map(s => ({ ...s }));

                const { w: screenW, h: screenH } = getSize();

                for (let i = 0; i < newShapes.length; i++) {
                    for (let j = i + 1; j < newShapes.length; j++) {
                        const a = newShapes[i];
                        const b = newShapes[j];

                        const dx = a.x - b.x;
                        const dy = a.y - b.y;

                        const dist = Math.sqrt(dx * dx + dy * dy);
                        const minDist = 50;

                        if (dist < minDist && dist > 0) {
                            const force = (minDist - dist) / minDist;

                            const fx = (dx / dist) * force * 1.2;
                            const fy = (dy / dist) * force * 1.2;

                            a.vx += fx;
                            a.vy += fy;

                            b.vx -= fx;
                            b.vy -= fy;
                        }
                    }
                }

                return newShapes.map(s => {
                    let x = s.x + s.vx;
                    let y = s.y + s.vy;

                    let vx = s.vx;
                    let vy = s.vy;

                    if (x <= 0 || x >= screenW - 100) vx *= -1;
                    if (y <= 0 || y >= screenH - 100) vy *= -1;

                    return { ...s, x, y, vx, vy };
                });
            });
        }, 16);

        return () => clearInterval(interval);
    }, [ready]);

    // corrige mudança de orientação (evita bug de "zoom/pulo")
    useEffect(() => {
        const handleResize = () => {
            window.dispatchEvent(new Event("resize"));
        };

        window.addEventListener("orientationchange", handleResize);

        return () => {
            window.removeEventListener("orientationchange", handleResize);
        };
    }, []);

    return (
        <div className="bg">
            {shapes.map(s => (
                <div
                    key={s.id}
                    className={`shape ${s.type}`}
                    style={{
                        transform: `translate(${s.x}px, ${s.y}px)`
                    }}
                />
            ))}
        </div>
    );
}