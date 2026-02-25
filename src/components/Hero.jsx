import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BackgroundPaths } from './ui/background-paths';
import HeroAnimation from './HeroAnimation';

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <BackgroundPaths>
            <div ref={containerRef} className="h-[95vh] min-h-0 flex flex-col items-center justify-center overflow-hidden relative">

                {/* Grid Layout para perfeito alinhamento */}
                <div className="relative z-10 w-full h-full grid grid-rows-[auto_1fr_auto] items-center justify-items-center gap-0 pointer-events-none py-12">

                    {/* PEDRO - Texto Superior */}
                    <motion.h1
                        className="text-fluid-h1 font-display font-black text-white tracking-tighter leading-[0.8] text-center select-none self-end"
                        style={{ y: textY }}
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        PEDRO
                    </motion.h1>

                    {/* HeroAnimation - Centro (maior e perfeitamente centralizado) */}
                    <motion.div
                        style={{ y, scale }}
                        className="relative w-full max-w-3xl h-full flex items-center justify-center"
                    >
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-dark-bg/80 z-10 pointer-events-none" />

                        {/* Animation Container */}
                        <div className="w-full h-full max-h-[60vh] flex items-center justify-center">
                            <HeroAnimation className="w-full h-full object-contain brightness-90" />
                        </div>
                    </motion.div>

                    {/* SILVA - Texto Inferior */}
                    <motion.h1
                        className="text-fluid-h1 font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/0 tracking-tighter leading-[0.8] text-center select-none self-start"
                        style={{ y: textY }}
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        SILVA
                    </motion.h1>
                </div>

                {/* Floating CTA */}
                <motion.div
                    className="absolute bottom-[10vh] left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-4 pointer-events-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <p className="text-neon-green font-bold tracking-[0.3em] text-sm uppercase">Personal Trainer</p>

                    <a
                        href="#plans"
                        className="group flex items-center gap-3 px-8 py-4 bg-white text-dark-bg font-bold rounded-full hover:bg-neon-green transition-colors duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(0,255,135,0.4)] animate-pulse md:animate-none"
                    >
                        <span>COMEÇAR AGORA</span>
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </BackgroundPaths>
    );
}