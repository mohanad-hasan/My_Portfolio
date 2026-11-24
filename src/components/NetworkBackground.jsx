
import { useEffect, useRef } from "react";

export const NetworkBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        const motionQuery = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

        let width = 0;
        let height = 0;
        let particles = [];
        let animationId = null;
        let isVisible = true;

        const connectionDistance = 130;
        const particleSize = 1.5;

        const getThemeColors = () => {
            const styles = getComputedStyle(document.documentElement);

            return {
                dot: styles.getPropertyValue("--network-dot").trim() || "59, 130, 246",
                line: styles.getPropertyValue("--network-line").trim() || "59, 130, 246",
                glow: styles.getPropertyValue("--network-glow").trim() || "59, 130, 246",
            };
        };

        let colors = getThemeColors();

        const createParticles = () => {
            const area = width * height;

            // Adjust particle count according to screen size.
            const count = Math.min(
                110,
                Math.max(30, Math.floor(area / 14000))
            );

            particles = Array.from({ length: count }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35,
                radius: Math.random() * 1.2 + particleSize,
            }));
        };

        const resizeCanvas = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);

            width = window.innerWidth;
            height = window.innerHeight;

            canvas.width = width * dpr;
            canvas.height = height * dpr;

            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            createParticles();
            draw();
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw connections between nearby particles.
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const p1 = particles[i];
                    const p2 = particles[j];

                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        const opacity =
                            (1 - distance / connectionDistance) * 0.35;

                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);

                        ctx.strokeStyle = `rgba(${colors.line}, ${opacity})`;
                        ctx.lineWidth = 0.7;
                        ctx.stroke();
                    }
                }
            }

            // Draw particles.
            particles.forEach((particle) => {
                ctx.beginPath();

                ctx.arc(
                    particle.x,
                    particle.y,
                    particle.radius,
                    0,
                    Math.PI * 2
                );

                ctx.fillStyle = `rgba(${colors.dot}, 0.85)`;

                ctx.shadowBlur = 10;
                ctx.shadowColor = `rgba(${colors.glow}, 0.5)`;

                ctx.fill();
            });

            ctx.shadowBlur = 0;
        };

        const update = () => {
            particles.forEach((particle) => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                // Bounce particles at screen edges.
                if (particle.x <= 0 || particle.x >= width) {
                    particle.vx *= -1;
                }

                if (particle.y <= 0 || particle.y >= height) {
                    particle.vy *= -1;
                }
            });
        };

        const animate = () => {
            if (!isVisible || motionQuery.matches) return;

            update();
            draw();

            animationId = requestAnimationFrame(animate);
        };

        const startAnimation = () => {
            cancelAnimationFrame(animationId);
            animationId = null;

            if (!isVisible) return;

            if (motionQuery.matches) {
                draw();
                return;
            }

            animate();
        };

        const handleMotionChange = () => {
            startAnimation();
        };

        const handleVisibilityChange = () => {
            isVisible = !document.hidden;
            startAnimation();
        };

        // Update canvas colors when the theme changes.
        const themeObserver = new MutationObserver(() => {
            colors = getThemeColors();
            draw();
        });

        themeObserver.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class", "data-theme"],
        });

        window.addEventListener("resize", resizeCanvas);
        document.addEventListener("visibilitychange", handleVisibilityChange);

        motionQuery.addEventListener("change", handleMotionChange);

        resizeCanvas();
        startAnimation();

        return () => {
            cancelAnimationFrame(animationId);

            window.removeEventListener("resize", resizeCanvas);
            document.removeEventListener(
                "visibilitychange",
                handleVisibilityChange
            );

            motionQuery.removeEventListener("change", handleMotionChange);
            themeObserver.disconnect();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="network-background"
        />
    );
};
