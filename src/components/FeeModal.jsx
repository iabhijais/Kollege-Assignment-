import React from 'react';
import { X } from 'lucide-react';

const FeeModal = ({ isOpen, onClose, universityType }) => {
    if (!isOpen) return null;

    // Different fee structures for each university
    const feeData = {
        tech: [
            { course: 'B.Tech (Computer Science)', fee: '₹2.0L - ₹3.0L / Year', duration: '4 Years' },
            { course: 'B.Tech (Mechanical)', fee: '₹1.8L - ₹2.8L / Year', duration: '4 Years' },
            { course: 'M.Tech (AI & ML)', fee: '₹2.5L - ₹3.5L / Year', duration: '2 Years' },
            { course: 'M.Tech (Data Science)', fee: '₹2.3L - ₹3.2L / Year', duration: '2 Years' }
        ],
        business: [
            { course: 'MBA', fee: '₹3.0L - ₹4.5L / Year', duration: '2 Years' },
            { course: 'BBA', fee: '₹1.5L - ₹2.2L / Year', duration: '3 Years' },
            { course: 'B.Com (Honors)', fee: '₹1.2L - ₹1.8L / Year', duration: '3 Years' },
            { course: 'M.Com', fee: '₹1.5L - ₹2.0L / Year', duration: '2 Years' }
        ]
    };

    const currentFees = universityType === 'tech' ? feeData.tech : feeData.business;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-4" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" aria-hidden="true" onClick={onClose}></div>

            {/* Modal */}
            <div className="relative bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl transform transition-all max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all z-10"
                >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                {/* Header */}
                <div className="px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-4 sm:pb-6">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white pr-8" id="modal-title">Course Fee Structure</h3>
                    <p className="text-slate-400 mt-1 sm:mt-2 text-xs sm:text-sm">Detailed fee breakdown for all courses</p>
                </div>

                {/* Table */}
                <div className="px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
                    <div className="overflow-x-auto rounded-xl sm:rounded-2xl border border-white/10">
                        <table className="min-w-full divide-y divide-white/10">
                            <thead className="bg-white/5">
                                <tr>
                                    <th scope="col" className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider">Course</th>
                                    <th scope="col" className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider">Fee Range</th>
                                    <th scope="col" className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider">Duration</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10 bg-transparent">
                                {currentFees.map((item, index) => (
                                    <tr key={index} className="hover:bg-white/5 transition-colors">
                                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm lg:text-base font-semibold text-white">{item.course}</td>
                                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm lg:text-base text-slate-300">{item.fee}</td>
                                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm lg:text-base text-slate-400">{item.duration}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Note */}
                    <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-white/5 rounded-lg sm:rounded-xl border border-white/10">
                        <p className="text-xs sm:text-sm text-slate-400">
                            <span className="font-semibold text-white">Note:</span> Fees may vary based on specialization and scholarship eligibility. Contact admissions for detailed information.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeeModal;
