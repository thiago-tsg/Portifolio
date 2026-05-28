import { useEffect, useRef } from "react";

const SHAPE_SIZE = 32;
const TOTAL_SHAPES = 12;

const MAX_SPEED = 3;
const MIN_SPEED = 0.3;

const getRandom = (min, max) => Math.random() * (max - min) + min;

const getSize = () => ({
    w: window.innerWidth,
    h: window.innerHeight
});

export default function Background() {
    const animationRef = useRef();

    const mouse = useRef({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    });

    const shapesRef = useRef([]);

    const elementsRef = useRef([]);

    // INITIALIZE SHAPES
    useEffect(() => {
        const { w, h } = getSize();

        shapesRef.current = Array.from(
            { length: TOTAL_SHAPES },
            (_, i) => ({
                id: i,

                x: getRandom(0, w - SHAPE_SIZE),
                y: getRandom(0, h - SHAPE_SIZE),

                vx: getRandom(-2, 2),
                vy: getRandom(-2, 2),
            })
        );
    }, []);

    // MOUSE MOVE
    useEffect(() => {
        const handleMouseMove = (e) => {
            mouse.current = {
                x: e.clientX,
                y: e.clientY
            };
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );
        };
    }, []);

    // ANIMATION LOOP
    useEffect(() => {
        const update = () => {
            const { w, h } = getSize();

            const shapes = shapesRef.current;

            //
            // PARTICLE INTERACTION
            //
            for (let i = 0; i < shapes.length; i++) {
                for (let j = i + 1; j < shapes.length; j++) {
                    const a = shapes[i];
                    const b = shapes[j];

                    const dx = a.x - b.x;
                    const dy = a.y - b.y;

                    const dist = Math.sqrt(dx * dx + dy * dy);

                    const minDist = 80;

                    if (dist < minDist && dist > 0) {
                        const force =
                            (minDist - dist) / minDist;

                        const fx =
                            (dx / dist) * force * 0.08;

                        const fy =
                            (dy / dist) * force * 0.08;

                        a.vx += fx;
                        a.vy += fy;

                        b.vx -= fx;
                        b.vy -= fy;
                    }
                }
            }

            //
            // UPDATE
            //
            for (let i = 0; i < shapes.length; i++) {
                const s = shapes[i];

                //
                // MOVIMENTO CONSTANTE
                //
                s.vx += getRandom(-0.02, 0.02);
                s.vy += getRandom(-0.02, 0.02);

                //
                // MOUSE FORCE
                //
                const dx = s.x - mouse.current.x;
                const dy = s.y - mouse.current.y;

                const dist = Math.sqrt(dx * dx + dy * dy);

                const radius = 180;

                if (dist < radius && dist > 0) {
                    const force =
                        (radius - dist) / radius;

                    s.vx +=
                        (dx / dist) * force * 0.5;

                    s.vy +=
                        (dy / dist) * force * 0.5;
                }

                //
                // DAMPING
                //
                s.vx *= 0.995;
                s.vy *= 0.995;

                //
                // VELOCIDADE MÍNIMA
                //
                if (Math.abs(s.vx) < MIN_SPEED) {
                    s.vx += s.vx >= 0
                        ? 0.02
                        : -0.02;
                }

                if (Math.abs(s.vy) < MIN_SPEED) {
                    s.vy += s.vy >= 0
                        ? 0.02
                        : -0.02;
                }

                //
                // SPEED LIMIT
                //
                s.vx = Math.max(
                    -MAX_SPEED,
                    Math.min(MAX_SPEED, s.vx)
                );

                s.vy = Math.max(
                    -MAX_SPEED,
                    Math.min(MAX_SPEED, s.vy)
                );

                //
                // POSITION
                //
                s.x += s.vx;
                s.y += s.vy;

                //
                // BOUNDS
                //
                if (s.x <= 0) {
                    s.x = 0;
                    s.vx *= -1;
                }

                if (s.x >= w - SHAPE_SIZE) {
                    s.x = w - SHAPE_SIZE;
                    s.vx *= -1;
                }

                if (s.y <= 0) {
                    s.y = 0;
                    s.vy *= -1;
                }

                if (s.y >= h - SHAPE_SIZE) {
                    s.y = h - SHAPE_SIZE;
                    s.vy *= -1;
                }

                //
                // DOM UPDATE
                //
                const el = elementsRef.current[i];

                if (el) {
                    el.style.transform =
                        `translate3d(${s.x}px, ${s.y}px, 0)`;
                }
            }

            animationRef.current =
                requestAnimationFrame(update);
        };

        animationRef.current =
            requestAnimationFrame(update);

        return () => {
            cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return (
        <div className="bg">
            {Array.from({
                length: TOTAL_SHAPES
            }).map((_, i) => (
                <div
                    key={i}
                    ref={(el) =>
                        (elementsRef.current[i] = el)
                    }
                    className="shape circle"
                />
            ))}
        </div>
    );
}