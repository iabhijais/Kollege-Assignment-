import React from 'react';
import { Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative bg-[#030712] border-t border-white/10 text-white py-10 mt-20">
            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-purple-900/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6">
                {/* Mobile: Stacked Layout, Desktop: Single Line */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 w-full">
                    {/* Left Side - Made with */}
                    <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start">
                        <p className="text-slate-400 text-xs sm:text-sm">Made with</p>
                        <span className="text-red-500 text-sm sm:text-base animate-pulse drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]">❤️</span>
                        <p className="text-slate-400 text-xs sm:text-sm">by</p>
                        <a
                            href="https://iabhijais.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 sm:gap-2 group"
                        >
                            <img
                                src="/iabhijais.ico"
                                alt="iabhijais"
                                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-white/10 group-hover:border-white/30 transition-all"
                            />
                            <span className="text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                                iabhijais
                            </span>
                        </a>
                    </div>

                    {/* Center - Built For (Hidden on mobile, shown on desktop) */}
                    <div className="hidden md:block md:absolute md:left-1/2 md:-translate-x-1/2">
                        <p className="text-slate-500 text-xs sm:text-sm font-medium whitespace-nowrap">Built for Kollege Apply Assignment</p>
                    </div>

                    {/* Mobile: Built For (Shown only on mobile) */}
                    <div className="md:hidden text-center">
                        <p className="text-slate-500 text-xs font-medium">Built for Kollege Apply Assignment</p>
                    </div>

                    {/* Right Side - Social Links */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <a
                            href="https://github.com/iabhijais"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
                        >
                            <img
                                src="/github-icon.png"
                                alt="GitHub"
                                className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-70 group-hover:opacity-100 transition-opacity"
                            />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/iabhijais"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
                        >
                            <img
                                src="/linkedin-icon.png"
                                alt="LinkedIn"
                                className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-70 group-hover:opacity-100 transition-opacity"
                            />
                        </a>

                        <a
                            href="mailto:iabhijais@gmail.com"
                            className="group relative w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
                        >
                            <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 group-hover:text-white transition-colors" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
