import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import LeadForm from '../components/LeadForm';
import Footer from '../components/Footer';
import FeeModal from '../components/FeeModal';
import { universities, feeStructure } from '../data/universityData';

const GlobalInstitute = () => {
    const data = universities.global;
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#030712] text-white font-sans selection:bg-green-500/30">
            <Navbar universityName={data.name} themeColor={data.themeColor} />
            <Hero
                universityName={data.name}
                tagline={data.tagline}
                backgroundImage={data.backgroundImage}
            />

            <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[20%] right-[0%] w-[40%] h-[40%] bg-green-900/10 rounded-full blur-[120px]" />
                </div>

                <div className="lg:col-span-2 relative">
                    <InfoSection content={data.content} themeColor={data.themeColor} />

                    <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-6 sm:px-8 py-3 sm:py-4 border border-white/30 text-white hover:bg-white/10 font-bold text-sm sm:text-base rounded-xl backdrop-blur-md transform transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto"
                        >
                            Check Course-wise Fees
                        </button>
                        <a
                            href="/Hawksworth-Business-School-Brochure.pdf"
                            download="Hawksworth-Business-School-Brochure.pdf"
                            className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm sm:text-base rounded-xl backdrop-blur-md transform transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                            Download Brochure
                        </a>
                    </div>
                </div>

                <div className="lg:col-span-1">
                    <div className="sticky top-28" id="contact">
                        <LeadForm themeColor={data.themeColor} universityName={data.name} />
                    </div>
                </div>
            </div>

            <Footer />

            <FeeModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                universityType="business"
            />
        </div>
    );
};

export default GlobalInstitute;
