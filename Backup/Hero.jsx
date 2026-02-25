import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
        <section ref={containerRef} className="relative h-[95vh] flex flex-col items-center justify-center overflow-hidden bg-dark-bg">
            {/* Background Gradient Mesh (Subtle) */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-neon-orange blur-[150px] rounded-full mix-blend-screen animate-pulse-slow" />
            </div>

            {/* Main Content Layer */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pointer-events-none">

                {/* Massive Typography - Top */}
                <motion.h1
                    className="text-fluid-h1 font-display font-black text-white tracking-tighter leading-[0.8] z-20 mix-blend-exclusion text-center pointer-events-none select-none"
                    style={{ y: textY }}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    PEDRO
                </motion.h1>

                {/* Central Image Layer */}
                <motion.div
                    style={{ y, scale }}
                    className="relative z-10 w-full max-w-2xl aspect-[3/4] md:aspect-square -my-[5vh] pointer-events-none"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent z-20" />
                    <img
                        src="/assets/pedro-hero.png"
                        alt="Pedro Silva"
                        className="w-full h-full object-cover object-top mask-image-gradient"
                    />
                </motion.div>

                {/* Massive Typography - Bottom */}
                <motion.h1
                    className="text-fluid-h1 font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/0 tracking-tighter leading-[0.8] z-20 -mt-[10vh] mix-blend-overlay text-center pointer-events-none select-none"
                    style={{ y: textY }}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                    SILVA
                </motion.h1>

                {/* Floating CTA - NEEDS POINTER EVENTS AUTO */}
                <motion.div
                    className="absolute bottom-[10vh] left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-4 pointer-events-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <p className="text-neon-green font-bold tracking-[0.3em] text-sm uppercase">Personal Trainer</p>

                    <a
                        href="#plans"
                        className="group flex items-center gap-3 px-8 py-4 bg-white text-dark-bg font-bold rounded-full hover:bg-neon-green transition-colors duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(0,255,135,0.4)]"
                    >
                        <span>COMEÃ‡AR AGORA</span>
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}