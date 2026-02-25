import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';

/**
 * HeroAnimation - Image sequence animation of Personal Trainer
 * 60fps sequence from frame 000 to 059
 */
export default function HeroAnimation({ className = '' }) {
    const [currentFrame, setCurrentFrame] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    // Configuration
    const TOTAL_FRAMES = 60; // 00 to 59
    const FRAME_RATE = 40; // ms per frame (approx 25fps for web performance)
    const START_FRAME = 0;
    const END_FRAME = 59;

    // Refs for animation loop
    const frameRef = useRef(0);
    const timerRef = useRef(null);
    const imagesRef = useRef({});

    // Generate image paths memoized
    const imagePaths = useMemo(() => {
        const paths = [];
        for (let i = 0; i < TOTAL_FRAMES; i++) {
            // Determine frame number to load
            let frameNum = i;

            // Handle missing frame 57 -> fallback to 56 or 58
            // Based on available files, 058 exists. Let's just duplicate 56 to fill the gap if 57 is strictly missing
            // or just rely on the fact that we will map index to filename
            if (i === 57) frameNum = 56; // Fallback for known missing frame

            const frameStr = frameNum.toString().padStart(3, '0');
            paths.push(`/Heroanimation/Criação_de_Vídeo_de_Academia_Profissional_${frameStr}.png`);
        }
        return paths;
    }, []);

    // Preload images
    useEffect(() => {
        let loadedCount = 0;

        const preloadImage = (path) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = path;
                img.onload = () => resolve(img);
                img.onerror = () => {
                    console.warn(`Failed to load: ${path}`);
                    resolve(null); // Resolve anyway to continue
                };
            });
        };

        const loadAll = async () => {
            const promises = imagePaths.map(path => preloadImage(path));
            const results = await Promise.all(promises);

            // Store preloaded images in ref to prevent GC
            results.forEach((img, index) => {
                if (img) imagesRef.current[index] = img;
            });

            setImagesLoaded(true);
        };

        loadAll();

        return () => {
            imagesRef.current = {};
        };
    }, [imagePaths]);

    // Animation Loop
    useEffect(() => {
        if (!imagesLoaded) return;

        const animate = () => {
            if (frameRef.current < END_FRAME) {
                setCurrentFrame(prev => {
                    const next = prev + 1;
                    frameRef.current = next;
                    return next;
                });
                timerRef.current = setTimeout(() => requestAnimationFrame(animate), FRAME_RATE);
            }
        };

        // Start animation after a small delay
        const startTimeout = setTimeout(() => {
            requestAnimationFrame(animate);
        }, 500);

        return () => {
            clearTimeout(timerRef.current);
            clearTimeout(startTimeout);
        };
    }, [imagesLoaded]);

    return (
        <motion.div
            className={`relative w-full max-w-5xl mx-auto h-[70vh] md:h-[85vh] flex items-center justify-center ${className}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            {imagesLoaded ? (
                <img
                    src={imagePaths[currentFrame]}
                    alt={`Animation Frame ${currentFrame}`}
                    className="w-full h-full object-contain object-center scale-110"
                    style={{
                        willChange: 'contents', // optimization
                    }}
                />
            ) : (
                // Loading state / Placeholder - Show first frame static or a spinner
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-white/20 border-t-neon-green rounded-full animate-spin" />
                </div>
            )}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/40 via-transparent to-dark-bg/20 pointer-events-none" />
        </motion.div>
    );
}
