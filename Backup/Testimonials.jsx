import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "JoÃ£o Silva",
        text: "O melhor investimento que fiz na minha saÃºde. Perdi 10kg em 3 meses com constÃ¢ncia e sem passar fome.",
        role: "Aluno hÃ¡ 6 meses"
    },
    {
        name: "Maria Santos",
        text: "O Pedro entende muito de biomecÃ¢nica. Meus joelhos nunca mais doeram durante o agachamento.",
        role: "Aluna hÃ¡ 1 ano"
    },
    {
        name: "Carlos Costa",
        text: "Treino pesado e inteligente. SaÃ­ do sedentarismo para a melhor forma da minha vida.",
        role: "Aluno hÃ¡ 4 meses"
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-dark-bg border-y border-white/5 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-neon-orange font-bold tracking-wider mb-2">DEPOIMENTOS</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-white">
                        O QUE DIZEM <span className="text-neon-purple">POR AÃ</span>
                    </h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} className="fill-neon-yellow text-neon-yellow" />)}
                            </div>
                            <p className="text-gray-300 italic mb-6">"{t.text}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-neon-orange to-neon-blue" />
                                <div>
                                    <div className="text-white font-bold">{t.name}</div>
                                    <div className="text-xs text-gray-500">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}