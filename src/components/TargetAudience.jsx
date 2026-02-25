import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, BicepsFlexed } from 'lucide-react';

const audience = [
    {
        icon: BicepsFlexed,
        title: "Iniciantes do Zero",
        text: "Você não precisa estar em forma para começar. Meu foco é ensinar a técnica correta para você ganhar confiança na academia."
    },
    {
        icon: Clock,
        title: "Rotina Corrida",
        text: "Treinos otimizados de 40 a 50 minutos. Intensidade na medida certa para ter resultados sem morar na academia."
    },
    {
        icon: ShieldCheck,
        title: "Treino sem Dor",
        text: "Foco total na biomecânica e segurança articular. O objetivo é fortalecer seu corpo, prevenindo dores e lesões."
    }
];

export default function TargetAudience() {
    return (
        <section id="target-audience" className="py-20 bg-dark-bg border-y border-white/5 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-orange/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-neon-orange font-bold tracking-wider mb-2">PERFIL</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-white">
                        ESTE TREINO É PARA <span className="text-neon-blue">VOCÊ SE...</span>
                    </h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {audience.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-neon-orange/30 hover:bg-white/10 transition-all group"
                        >
                            <div className="w-14 h-14 bg-neon-orange/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <item.icon size={28} className="text-neon-orange" />
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-4">{item.title}</h4>
                            <p className="text-gray-300 leading-relaxed">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}