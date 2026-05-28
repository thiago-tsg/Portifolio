import { useEffect, useState } from "react";

const getRandom = (min, max) => Math.random() * (max - min) + min;

export default function Background() {
    const [shapes, setShapes] = useState([]);

    // pega tamanho seguro da tela
    const getScreen = () => ({
        w: window.innerWidth,
        h: window.innerHeight || document.documentElement.clientHeight
    });

    // cria shapes
    useEffect(() => {
        const { w, h } = getScreen();

        const initial = [
            {
                id: 1,
                type: "circle",
                x: getRandom(0, w - 120),
                y: getRandom(0, h - 120),
                vx: getRandom(-1.2, 1.2),
                vy: getRandom(-1.2, 1.2),
            },
            {
                id: 2,
                type: "circle",
                x: getRandom(0, w - 120),
                y: getRandom(0, h - 120),
                vx: getRandom(-1.2, 1.2),
                vy: getRandom(-1.2, 1.2),
            },
            {
                id: 3,
                type: "circle",
                x: getRandom(0, w - 120),
                y: getRandom(0, h - 120),
                vx: getRandom(-1.2, 1.2),
                vy: getRandom(-1.2, 1.2),
            },
            {
                id: 4,
                type: "square",
                x: getRandom(0, w - 120),
                y: getRandom(0, h - 120),
                vx: getRandom(-1.2, 1.2),
                vy: getRandom(-1.2, 1.2),
            },
            {
                id: 5,
                type: "triangle",
                x: getRandom(0, w - 120),
                y: getRandom(0, h - 120),
                vx: getRandom(-1.2, 1.2),
                vy: getRandom(-1.2, 1.2),
            },
            {
                id: 6,
                type: "rect",
                x: getRandom(0, w - 120),
                y: getRandom(0, h - 120),
                vx: getRandom(-1.2, 1.2),
                vy: getRandom(-1.2, 1.2),
            },
        ];

        setShapes(initial);
    }, []);

    // animação
    useEffect(() => {
        if (!shapes.length) return;

        const interval = setInterval(() => {
            setShapes(prev => {
                const { w, h } = getScreen();

                const updated = prev.map(shape => {
                    let x = shape.x + shape.vx;
                    let y = shape.y + shape.vy;

                    let vx = shape.vx;
                    let vy = shape.vy;

                    // colisão borda
                    if (x <= 0 || x >= w - 100) vx *= -1;
                    if (y <= 0 || y >= h - 100) vy *= -1;

                    return {
                        ...shape,
                        x,
                        y,
                        vx,
                        vy
                    };
                });

                // separação entre shapes
                for (let i = 0; i < updated.length; i++) {
                    for (let j = i + 1; j < updated.length; j++) {
                        const a = updated[i];
                        const b = updated[j];

                        const dx = a.x - b.x;
                        const dy = a.y - b.y;

                        const dist = Math.sqrt(dx * dx + dy * dy);

                        const minDist = 90;

                        if (dist < minDist && dist > 0) {
                            const force = (minDist - dist) / minDist;

                            a.x += (dx / dist) * force * 2;
                            a.y += (dy / dist) * force * 2;

                            b.x -= (dx / dist) * force * 2;
                            b.y -= (dy / dist) * force * 2;
                        }
                    }
                }

                return updated;
            });
        }, 16);

        return () => clearInterval(interval);
    }, [shapes.length]);

    return (
        <div className="bg">
            {shapes.map(shape => (
                <div
                    key={shape.id}
                    className={`shape ${shape.type}`}
                    style={{
                        transform: `translate3d(${shape.x}px, ${shape.y}px, 0)`
                    }}
                />
            ))}
        </div>
    );
}