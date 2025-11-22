import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = ({ universityName, tagline, backgroundImage }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <div ref={ref} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image with Strong Overlay */}
            <motion.div 
                className="absolute inset-0"
                style={{ y }}
            >
                <img
                    src={backgroundImage}
                    alt="University Campus"
                    loading="eager"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                        transform: 'translateZ(0)',
                        WebkitTransform: 'translateZ(0)',
                    }}
                />
                {/* Strong Black Overlay for Readability */}
                <div className="absolute inset-0 bg-black/60"></div>
            </motion.div>

            {/* Hero Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 px-4 sm:px-6 max-w-5xl mx-auto text-center"
            >
                {/* Elegant Title */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 sm:mb-6 px-2"
                >
                    {universityName}
                </motion.h1>

                {/* Elegant Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-base sm:text-lg md:text-xl text-gray-200 mt-2 sm:mt-4 font-light mb-8 sm:mb-12 px-2"
                >
                    {tagline}
                </motion.p>

                {/* Premium Glass Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <a
                        href="#overview"
                        className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm sm:text-base font-semibold transition-all hover:bg-white/20 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                        <span>Explore Campus</span>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                        </svg>
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center backdrop-blur-sm">
                    <div className="w-1 h-2 bg-white rounded-full mt-2"></div>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;
