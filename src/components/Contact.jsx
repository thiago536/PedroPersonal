import React from 'react';
import { Send, Instagram, Phone } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-dark-bg relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">

                    <div>
                        <h2 className="text-neon-orange font-bold tracking-wider mb-2">CONTATO</h2>
                        <h3 className="text-fluid-h2 font-display font-bold text-white mb-6">
                            VAMOS <span className="text-neon-orange">COMEÇAR?</span>
                        </h3>
                        <p className="text-gray-400 text-lg mb-8">
                            Pronto para levar seu treino para o próximo nível? Entre em contato direto pelas redes sociais ou envie uma mensagem.
                        </p>

                        <div className="space-y-6">
                            <a
                                href="https://www.instagram.com/pdrpersonal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 text-white hover:text-neon-orange transition-colors group"
                            >
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-neon-orange/50 group-hover:bg-neon-orange/10 transition-all">
                                    <Instagram size={20} />
                                </div>
                                <span className="text-lg font-medium">@pdrpersonal</span>
                            </a>
                            <a
                                href="https://wa.me/5583999373803?text=Olá Pedro, vi seu site e gostaria de saber mais."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 text-white hover:text-neon-orange transition-colors group"
                            >
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-neon-orange/50 group-hover:bg-neon-orange/10 transition-all">
                                    <Phone size={20} />
                                </div>
                                <span className="text-lg font-medium">(83) 99937-3803</span>
                            </a>
                        </div>
                    </div>

                    <form className="space-y-6 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm" onSubmit={(e) => e.preventDefault()}>
                        {/* Note: In a static site without backend, forms usually redirect to WhatsApp or use a service like Formspree. 
                 Given the user request to be "interactive" but "stateless (vercel)", redirecting the form submit to WhatsApp is a clever hack. */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Nome</label>
                            <input type="text" id="name" className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-orange focus:ring-1 focus:ring-neon-orange transition-all placeholder:text-gray-600" placeholder="Seu nome" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Objetivo</label>
                            <select id="goal" className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-orange focus:ring-1 focus:ring-neon-orange transition-all">
                                <option>Hipertrofia</option>
                                <option>Emagrecimento</option>
                                <option>Condicionamento</option>
                                <option>Consultoria Online</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Frequência de Treino Pretendida</label>
                            <select id="frequency" className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-orange focus:ring-1 focus:ring-neon-orange transition-all">
                                <option>2x por semana</option>
                                <option>3x por semana</option>
                                <option>4x por semana</option>
                                <option>5x ou mais</option>
                            </select>
                        </div>

                        <button
                            type="button"
                            onClick={() => {
                                const name = document.getElementById('name').value;
                                const goal = document.getElementById('goal').value;
                                const frequency = document.getElementById('frequency').value;
                                const text = `Olá Pedro, me chamo ${name}. Meu objetivo é ${goal} e pretendo treinar ${frequency}. Gostaria de mais informações.`;
                                window.open(`https://wa.me/5583999373803?text=${encodeURIComponent(text)}`, '_blank');
                            }}
                            className="w-full py-4 bg-neon-orange text-dark-bg font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-neon-orange/90 transition-colors"
                        >
                            ENVIAR NO WHATSAPP <Send size={18} />
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
}