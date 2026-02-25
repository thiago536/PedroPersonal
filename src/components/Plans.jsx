import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const plans = [
    {
        name: "CONSULTORIA ONLINE",
        price: "R$ 100",
        period: "/mês",
        description: "Liberdade para treinar onde quiser com meu suporte.",
        features: ["Treino personalizado via App", "Suporte técnico pelo WhatsApp", "Análise de vídeos de execução", "Ajustes de treino conforme evolução"],
        highlight: false,
        color: "neon-blue"
    },
    {
        name: "PRESENCIAL 2X",
        price: "R$ 250",
        period: "/mês",
        description: "Ideal para começar com acompanhamento.",
        features: ["8 sessões mensais (2x/semana)", "Treino personalizado", "Correção biomecânica em tempo real", "Motivação e suporte constante"],
        highlight: false,
        color: "neon-green"
    },
    {
        name: "PRESENCIAL 3X",
        price: "R$ 350",
        period: "/mês",
        description: "Equilíbrio perfeito de frequência.",
        features: ["12 sessões mensais (3x/semana)", "Evolução acelerada", "Acompanhamento de medidas", "Suporte nutricional básico"],
        highlight: true,
        color: "neon-orange"
    },
    {
        name: "PRESENCIAL 4X",
        price: "R$ 450",
        period: "/mês",
        description: "Para quem busca alta performance.",
        features: ["16 sessões mensais (4x/semana)", "Máxima intensidade", "Periodização avançada", "Prioridade na agenda"],
        highlight: false,
        color: "neon-purple"
    },
    {
        name: "PRESENCIAL 5X",
        price: "R$ 550",
        period: "/mês",
        description: "O nível atleta de acompanhamento.",
        features: ["25 sessões mensais (5x/semana)", "Acompanhamento diário", "Foco total em resultado", "Consultoria completa inclusa"],
        highlight: false,
        color: "neon-red"
    }
];

export default function Plans() {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <section id="plans" className="py-20 bg-dark-bg relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-neon-orange font-bold tracking-wider mb-2">PLANOS</h2>
                    <h3 className="text-fluid-h2 font-display font-bold text-white">
                        ESCOLHA SUA <span className="text-neon-blue">EVOLUÇÃO</span>
                    </h3>
                </div>

                {/* Mobile: Snap Scroll / Desktop: Grid */}
                <div className="relative group/slider">
                    {/* Mobile Navigation Buttons */}
                    <button
                        onClick={scrollLeft}
                        className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/10 active:scale-95 transition-all animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                        aria-label="Anterior"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={scrollRight}
                        className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/10 active:scale-95 transition-all animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                        aria-label="Próximo"
                    >
                        <ChevronRight size={24} />
                    </button>

                    <div
                        ref={sliderRef}
                        className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto overflow-x-auto snap-x snap-mandatory pb-12 md:pb-0 px-4 md:px-0 -mx-4 md:mx-0 scrollbar-hide scroll-smooth"
                    >
                        {plans.map((plan, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className={`relative p-8 rounded-3xl border transition-all duration-300 group flex-shrink-0 w-[85vw] md:w-auto snap-center ${plan.highlight
                                    ? 'bg-white/10 border-neon-orange/50 shadow-[0_0_30px_rgba(255,107,53,0.1)]'
                                    : 'bg-white/5 border-white/10 hover:border-white/30'
                                    }`}
                            >
                                {plan.highlight && (
                                    <div className="absolute top-0 right-0 p-3 bg-neon-orange rounded-bl-2xl rounded-tr-2xl">
                                        <Zap className="text-dark-bg w-5 h-5" fill="currentColor" />
                                    </div>
                                )}

                                <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
                                <div className="flex items-end gap-1 mb-4">
                                    <span className={`text-4xl font-bold ${plan.highlight ? 'text-neon-orange' : 'text-white'}`}>
                                        {plan.price}
                                    </span>
                                    <span className="text-gray-400 text-sm mb-1">{plan.period}</span>
                                </div>
                                <p className="text-gray-400 text-sm mb-8 border-b border-white/10 pb-8 min-h-[60px]">
                                    {plan.description}
                                </p>

                                <ul className="space-y-4 mb-8 min-h-[160px]">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                            <div className={`mt-0.5 p-1 rounded-full flex-shrink-0 ${plan.highlight ? 'bg-neon-orange/20' : 'bg-white/10'}`}>
                                                <Check size={10} className={plan.highlight ? 'text-neon-orange' : 'text-white'} />
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={`https://wa.me/5583999373803?text=Olá Pedro, tenho interesse no plano ${plan.name} de ${plan.price}.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-full py-4 rounded-xl font-bold transition-all uppercase tracking-wide flex items-center justify-center gap-2 ${plan.highlight
                                        ? 'bg-neon-orange text-dark-bg hover:bg-neon-orange/90 shadow-lg shadow-neon-orange/20'
                                        : 'bg-white text-dark-bg hover:bg-gray-200'
                                        }`}
                                >
                                    <MessageCircle size={18} /> Contratar Agora
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}