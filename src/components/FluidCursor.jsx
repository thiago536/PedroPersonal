import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Componente de Cursor Fluido (Efeito de Água/Rastro)
 * Ideal para Landing Pages que buscam um visual moderno e dinâmico.
 */
export default function FluidCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [trail, setTrail] = useState([]);
    const [isHovering, setIsHovering] = useState(false);

    // Configurações do efeito
    const MAX_TRAIL_LENGTH = 12; // Quantidade de "gotas" no rastro
    const TRAIL_DELAY = 50; // Delay para criação de novas gotas (ms)

    useEffect(() => {
        let lastTimestamp = 0;

        const handleMouseMove = (e) => {
            const { clientX: x, clientY: y } = e;
            setMousePosition({ x, y });

            const now = Date.now();
            if (now - lastTimestamp > TRAIL_DELAY) {
                const newDot = {
                    id: now,
                    x,
                    y,
                    size: Math.random() * 20 + 10, // Tamanho aleatório para naturalidade
                };

                setTrail((prevTrail) => [...prevTrail, newDot].slice(-MAX_TRAIL_LENGTH));
                lastTimestamp = now;
            }
        };

        // Detectar hover em elementos interativos para mudar o cursor
        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden hidden md:block">
            {/* 1. Cursor Principal (A "gota" principal) */}
            <motion.div
                className="fixed top-0 left-0 mix-blend-difference"
                animate={{
                    x: mousePosition.x - (isHovering ? 20 : 12),
                    y: mousePosition.y - (isHovering ? 20 : 12),
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                    mass: 0.8
                }}
            >
                <div
                    className={`rounded-full border-2 border-white/80 bg-white/10 backdrop-blur-[2px] transition-all duration-300 ${isHovering ? 'w-10 h-10 bg-white/30' : 'w-6 h-6'
                        }`}
                />
            </motion.div>

            {/* 2. Rastro Fluido (Efeito de Água) */}
            <AnimatePresence>
                {trail.map((dot, index) => (
                    <motion.div
                        key={dot.id}
                        initial={{ opacity: 0.6, scale: 1, x: dot.x, y: dot.y }}
                        animate={{
                            opacity: 0,
                            scale: 0.2,
                            x: dot.x + (Math.random() - 0.5) * 20, // Leve dispersão
                            y: dot.y + (Math.random() - 0.5) * 20
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute top-0 left-0"
                        style={{
                            width: dot.size,
                            height: dot.size,
                            marginLeft: -dot.size / 2,
                            marginTop: -dot.size / 2,
                        }}
                    >
                        <div className="w-full h-full rounded-full bg-white/20 backdrop-blur-sm border border-white/10" />
                    </motion.div>
                ))}
            </AnimatePresence>

            {/* 3. Efeito de Distorção de Água (Opcional - CSS Filter) */}
            <svg className="hidden">
                <defs>
                    <filter id="water-filter">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="water" />
                        <feComposite in="SourceGraphic" in2="water" operator="atop" />
                    </filter>
                </defs>
            </svg>

            <style jsx>{`
        .water-trail {
          filter: url(#water-filter);
        }
      `}</style>
        </div>
    );
}
