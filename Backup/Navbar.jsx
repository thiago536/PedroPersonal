import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Sobre Mim', href: '#about' },
        { name: 'Planos', href: '#plans' },
        { name: 'Resultados', href: '#results' },
        { name: 'Para Quem', href: '#target-audience' },
        { name: 'Contato', href: '#contact' },
    ];

    return (
        <nav className={cn(
            "fixed w-full z-50 transition-all duration-300",
            scrolled ? "bg-dark-bg/80 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"
        )}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <a href="#" className="text-2xl font-display font-bold text-white tracking-wider">
                    PEDRO<span className="text-neon-orange">SILVA</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-neon-orange transition-colors font-medium text-sm tracking-wide uppercase relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-orange transition-all group-hover:w-full" />
                        </a>
                    ))}
                    <a
                        href="https://wa.me/5583999373803?text=OlÃ¡ Pedro, quero comeÃ§ar agora!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-neon-orange text-dark-bg font-bold rounded-full hover:bg-neon-orange/90 transition-transform hover:scale-105"
                    >
                        QUERO COMEÃ‡AR
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-dark-bg border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-4 flex flex-col items-center">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-white text-lg font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="https://wa.me/5583999373803?text=OlÃ¡ Pedro, quero comeÃ§ar agora!"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 bg-neon-orange text-dark-bg font-bold rounded-full w-full text-center"
                            >
                                QUERO COMEÃ‡AR
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}