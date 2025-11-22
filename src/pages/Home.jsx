import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionTemplate, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import Footer from '../components/Footer';

const ROTATION_RANGE = 20;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

// Clean Poster Card - No Text, Fully Clickable
const TiltCard = ({ to, bgImage }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const ySpring = useSpring(y, { stiffness: 300, damping: 30 });
    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
        const rX = (mouseY / rect.height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / rect.width - HALF_ROTATION_RANGE;
        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <Link to={to} className="block">
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ 
                    transformStyle: "preserve-3d", 
                    transform,
                    WebkitTransform: transform,
                    WebkitBackfaceVisibility: "hidden",
                    backfaceVisibility: "hidden",
                }}
                className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden cursor-pointer group backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(59,130,246,0.2)] hover:shadow-[0_8px_48px_0_rgba(59,130,246,0.4)] transition-all duration-500"
            >
                {/* Glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50"></div>
                
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
                
                <img
                    src={bgImage}
                    alt="University"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{
                        transform: 'translateZ(0)',
                        WebkitTransform: 'translateZ(0)',
                    }}
                />
                
                {/* Top shine effect */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                
                {/* Explore Campus Button */}
                <div className="absolute inset-0 flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold transition-all group-hover:bg-white/20 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        <span>Explore Campus</span>
                        <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                        </svg>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

const Home = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <div className="min-h-screen bg-[#030712] text-white relative overflow-hidden font-sans">

            <div ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">

                <motion.div 
                    className="absolute inset-0"
                    style={{ y }}
                >
                    <img
                        src="/FrontPage.jpg"
                        alt="Campus"
                        loading="eager"
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{
                            transform: 'translateZ(0)',
                            WebkitTransform: 'translateZ(0)',
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-[#0a0a0a]"></div>
                </motion.div>

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-600/30 via-blue-900/15 to-transparent" />
                        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-600/30 via-purple-900/15 to-transparent" />
                    </div>
                </div>

                <motion.div
                    style={{ opacity }}
                    className="relative z-10 px-4 sm:px-6 max-w-5xl mx-auto text-center"
                >
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400 drop-shadow-2xl"
                    >
                        Select Your Institution
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-slate-300 font-light tracking-wide text-base sm:text-lg mt-4 px-2"
                    >
                        Two pathways to excellence. One vision for the future.
                    </motion.p>
                </motion.div>

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

            <div className="relative bg-[#030712] z-10 mt-8 sm:mt-12">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>
                
                <div className="relative max-w-4xl w-full mx-auto px-4 sm:px-6 py-12 sm:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">

                        <TiltCard
                            to="/tech-university"
                            bgImage="/JAIScard.jpg"
                        />

                        <TiltCard
                            to="/global-institute"
                            bgImage="/Hawkcard.jpg"
                        />

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;
