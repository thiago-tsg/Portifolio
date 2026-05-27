import { useEffect, useState } from "react";

const getRandom = (min, max) => Math.random() * (max - min) + min;

const initialShapes = Array.from({ length: 10 }).map((_, i) => {
    const types = ["circle", "triangle", "rect", "diamond", "line"];

    return {
        id: i + 1,
        type: types[Math.floor(Math.random() * types.length)],

        x: getRandom(0, window.innerWidth - 100),
        y: getRandom(0, window.innerHeight - 100),

        vx: getRandom(-2.5, 2.5),
        vy: getRandom(-2.5, 2.5)
    };
});

export default function Background() {
    const [shapes, setShapes] = useState(initialShapes);

    useEffect(() => {
        const interval = setInterval(() => {
            setShapes(prev => {
                const newShapes = prev.map(s => ({ ...s }));

                for (let i = 0; i < newShapes.length; i++) {
                    for (let j = i + 1; j < newShapes.length; j++) {
                        const a = newShapes[i];
                        const b = newShapes[j];

                        const dx = a.x - b.x;
                        const dy = a.y - b.y;

                        const dist = Math.sqrt(dx * dx + dy * dy);

                        const minDist = 40; // distância de "colisão"

                        if (dist < minDist && dist > 0) {
                            const force = (minDist - dist) / minDist;

                            const fx = (dx / dist) * force * 1.5;
                            const fy = (dy / dist) * force * 1.5;

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

                    const screenW = window.innerWidth;
                    const screenH = window.innerHeight;

                    // bordas
                    if (x <= 0 || x >= screenW - 60) vx *= -1;
                    if (y <= 0 || y >= screenH - 60) vy *= -1;

                    return {
                        ...s,
                        x,
                        y,
                        vx,
                        vy
                    };
                });
            });
        }, 16);

        return () => clearInterval(interval);
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