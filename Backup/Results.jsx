import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Results() {
    const [sliderPosition, setSliderPosition] = useState(50);

    const handleSliderChange = (e) => {
        setSliderPosition(e.target.value);
    };

    return (
        <section id="results" className="py-20 bg-dark-bg relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-neon-orange font-bold tracking-wider mb-2">RESULTADOS REAIS</h2>
                    <h3 className="text-fluid-h2 font-display font-bold text-white">
                        ANTES & <span className="text-neon-blue">DEPOIS</span>
                    </h3>
                    <p className="text-gray-400 mt-4">Arraste para ver a transformaÃ§Ã£o de 2 meses</p>
                </div>

                <div className="max-w-md mx-auto relative rounded-3xl overflow-hidden aspect-[3/4] border border-white/10 shadow-2xl select-none group">

                    {/* Slider Container */}
                    <div className="absolute inset-0 w-full h-full">
                        {/* Base Image (After - Result) */}
                        <div className="absolute inset-0 w-full h-full bg-gray-800">
                            <img
                                src="/assets/result-after.jpg"
                                className="w-full h-full object-cover"
                                alt="Resultado de hipertrofia e definiÃ§Ã£o apÃ³s 2 meses de consultoria online"
                            />
                            <span className="absolute top-4 right-4 z-10 font-bold text-sm md:text-base text-neon-orange bg-black/50 px-3 py-1 rounded-lg backdrop-blur-sm">DEPOIS</span>
                        </div>

                        {/* Overlay Image (Before) - Clipped */}
                        <div
                            className="absolute inset-0 w-full h-full bg-gray-900 border-r-2 border-white overflow-hidden"
                            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                        >
                            <img
                                src="/assets/result-before.jpg"
                                className="w-full h-full object-cover"
                                alt="Corpo antes de iniciar o treinamento personalizado"
                            />
                            <span className="absolute top-4 left-4 z-10 font-bold text-sm md:text-base text-white/80 bg-black/50 px-3 py-1 rounded-lg backdrop-blur-sm">ANTES</span>
                        </div>

                        {/* Slider Handle Visual */}
                        <div
                            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20"
                            style={{ left: `${sliderPosition}%` }}
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-dark-bg font-bold shadow-lg shadow-white/20 hover:scale-110 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-12" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* Hidden Range Input for Interaction */}
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={sliderPosition}
                        onChange={handleSliderChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                        aria-label="Controle de comparaÃ§Ã£o antes e depois"
                    />
                </div>

                <div className="flex justify-center mt-12 gap-8">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white">2</div>
                        <div className="text-sm text-gray-400">Meses de Foco</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-neon-orange">100%</div>
                        <div className="text-sm text-gray-400">Natural</div>
                    </div>
                </div>
            </div>
        </section>
    );
}