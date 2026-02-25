import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Star, Activity, MessageCircle } from 'lucide-react';

const features = [
    {
        icon: Smartphone,
        title: "Consultoria Online/Híbrida",
        subtitle: "Atendimento onde você estiver."
    },
    {
        icon: Star,
        title: "Atendimento Exclusivo",
        subtitle: "Vagas limitadas para máxima atenção."
    },
    {
        icon: Activity,
        title: "Treino Personalizado",
        subtitle: "Planejamento baseado na sua rotina."
    },
    {
        icon: MessageCircle,
        title: "Suporte Diário",
        subtitle: "Tire dúvidas e corrija movimentos."
    },
];

export default function About() {
    return (
        <section id="about" className="py-20 bg-dark-bg relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden aspect-[4/5] group">
                            <img
                                src="/assets/pedro-action.png"
                                alt="Pedro Silva Personal Trainer focando na execução correta do movimento"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-8">
                                <h3 className="text-3xl font-display font-bold text-white mb-2">Foco & Disciplina</h3>
                                <p className="text-gray-400">A base de todo resultado consistente.</p>
                            </div>
                        </div>
                        {/* Background elements - Orange Accent */}
                        <div className="absolute -z-10 top-10 -left-10 w-full h-full border border-white/5 rounded-3xl" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-neon-orange font-bold tracking-wider mb-2">SOBRE MIM</h2>
                        <h3 className="text-fluid-h2 font-display font-bold text-white mb-6">
                            MAIS QUE UM TREINO, <br />
                            UMA <span className="text-neon-blue">TRANSFORMAÇÃO</span>
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Meu nome é Pedro Silva. Sou especialista em biomecânica e fisiologia do exercício. Minha missão é levar você ao seu melhor físico, respeitando sua individualidade biológica e rotina. Não vendo apenas fichas de treino, entrego um estilo de vida novo.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-neon-orange/30 transition-colors group">
                                    <feature.icon size={32} className="text-neon-orange mb-4 group-hover:scale-110 transition-transform" />
                                    <div className="text-xl font-bold text-white mb-1 leading-tight">{feature.title}</div>
                                    <div className="text-sm text-gray-400 leading-snug">{feature.subtitle}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}