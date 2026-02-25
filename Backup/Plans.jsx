import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, MessageCircle } from 'lucide-react';

const plans = [
    {
        name: "CONSULTORIA ONLINE",
        price: "R$ 100",
        period: "/mÃªs",
        description: "Liberdade para treinar onde quiser com meu suporte.",
        features: ["Treino personalizado via App", "Suporte tÃ©cnico pelo WhatsApp", "AnÃ¡lise de vÃ­deos de execuÃ§Ã£o", "Ajustes de treino conforme evoluÃ§Ã£o"],
        highlight: false,
        color: "neon-blue"
    },
    {
        name: "PRESENCIAL 2X",
        price: "R$ 250",
        period: "/mÃªs",
        description: "Ideal para comeÃ§ar com acompanhamento.",
        features: ["8 sessÃµes mensais (2x/semana)", "Treino personalizado", "CorreÃ§Ã£o biomecÃ¢nica em tempo real", "MotivaÃ§Ã£o e suporte constante"],
        highlight: false,
        color: "neon-green"
    },
    {
        name: "PRESENCIAL 3X",
        price: "R$ 350",
        period: "/mÃªs",
        description: "EquilÃ­brio perfeito de frequÃªncia.",
        features: ["12 sessÃµes mensais (3x/semana)", "EvoluÃ§Ã£o acelerada", "Acompanhamento de medidas", "Suporte nutricional bÃ¡sico"],
        highlight: true,
        color: "neon-orange"
    },
    {
        name: "PRESENCIAL 4X",
        price: "R$ 450",
        period: "/mÃªs",
        description: "Para quem busca alta performance.",
        features: ["16 sessÃµes mensais (4x/semana)", "MÃ¡xima intensidade", "PeriodizaÃ§Ã£o avanÃ§ada", "Prioridade na agenda"],
        highlight: false,
        color: "neon-purple"
    },
    {
        name: "PRESENCIAL 5X",
        price: "R$ 550",
        period: "/mÃªs",
        description: "O nÃ­vel atleta de acompanhamento.",
        features: ["25 sessÃµes mensais (5x/semana)", "Acompanhamento diÃ¡rio", "Foco total em resultado", "Consultoria completa inclusa"],
        highlight: false,
        color: "neon-red"
    }
];

export default function Plans() {
    return (
        <section id="plans" className="py-20 bg-dark-bg relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-neon-orange font-bold tracking-wider mb-2">PLANOS</h2>
                    <h3 className="text-fluid-h2 font-display font-bold text-white">
                        ESCOLHA SUA <span className="text-neon-blue">EVOLUÃ‡ÃƒO</span>
                    </h3>
                </div>

                {/* Mobile: Snap Scroll / Desktop: Grid */}
                <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto overflow-x-auto snap-x snap-mandatory pb-12 md:pb-0 px-4 md:px-0 -mx-4 md:mx-0 scrollbar-hide">
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
                                href={`https://wa.me/5583999373803?text=OlÃ¡ Pedro, tenho interesse no plano ${plan.name} de ${plan.price}.`}
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
        </section>
    );
}