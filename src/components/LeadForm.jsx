import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const LeadForm = ({ themeColor, universityName }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        state: '',
        course: '',
        intakeYear: '',
        consent: false
    });
    const [status, setStatus] = useState(null); // 'success', 'error', 'loading'

    const indianStates = [
        'Maharashtra',
        'Delhi',
        'Karnataka',
        'Tamil Nadu',
        'Uttar Pradesh'
    ];

    const courses = [
        'B.Tech',
        'MBA',
        'BBA',
        'M.Tech'
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const validatePhone = (phone) => {
        return /^\d{10}$/.test(phone);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validatePhone(formData.phone)) {
            alert('Please enter a valid 10-digit phone number.');
            return;
        }

        setStatus('loading');
        
        try {
            const response = await fetch('https://eo19m8xdw49ors8.m.pipedream.net', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    ...formData, 
                    university: universityName,
                    timestamp: new Date().toISOString()
                }),
            });

            if (response.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    // Success Card
    if (status === 'success') {
        return (
            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/10" id="apply">
                <div className="text-center py-8">
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                            <CheckCircle className="w-10 h-10 text-green-400" />
                        </div>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Application Received!</h3>
                    <p className="text-slate-300 text-lg">We will contact you soon.</p>
                    <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
                        <p className="text-sm text-slate-400">
                            Thank you for your interest in {universityName}. Our admissions team will review your application and get back to you within 24-48 hours.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    // Form
    return (
        <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/10" id="apply">
            <div className="mb-6 text-center">
                <h3 className="text-2xl font-bold text-white">Apply Now</h3>
                <p className="text-slate-400 text-sm mt-1">Start your journey with {universityName}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Full Name"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:ring-2 focus:ring-opacity-50 focus:border-transparent outline-none transition-all"
                    />

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Email Address"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:ring-2 focus:ring-opacity-50 focus:border-transparent outline-none transition-all"
                    />

                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Phone Number (10 digits)"
                        maxLength="10"
                        pattern="\d{10}"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:ring-2 focus:ring-opacity-50 focus:border-transparent outline-none transition-all"
                    />

                    <select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-opacity-50 focus:border-transparent outline-none transition-all [&>option]:bg-gray-900"
                    >
                        <option value="">State</option>
                        {indianStates.map(state => (
                            <option key={state} value={state}>{state}</option>
                        ))}
                    </select>

                    <div className="grid grid-cols-2 gap-4">
                        <select
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-opacity-50 focus:border-transparent outline-none transition-all [&>option]:bg-gray-900"
                        >
                            <option value="">Course</option>
                            {courses.map(course => (
                                <option key={course} value={course}>{course}</option>
                            ))}
                        </select>

                        <select
                            name="intakeYear"
                            value={formData.intakeYear}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-opacity-50 focus:border-transparent outline-none transition-all [&>option]:bg-gray-900"
                        >
                            <option value="">Year</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                        </select>
                    </div>
                </div>

                <div className="flex items-start pt-2">
                    <div className="flex items-center h-5">
                        <input
                            id="consent"
                            name="consent"
                            type="checkbox"
                            checked={formData.consent}
                            onChange={handleChange}
                            required
                            className="w-4 h-4 rounded border-gray-600 bg-white/5 text-indigo-600 focus:ring-indigo-500"
                        />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="consent" className="font-medium text-slate-400">
                            I agree to receive communications and updates.
                        </label>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className={`w-full py-3.5 px-4 border border-transparent rounded-xl shadow-lg text-base font-bold text-white ${themeColor} hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
                >
                    {status === 'loading' ? (
                        <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Sending...</span>
                        </>
                    ) : (
                        'Submit Application'
                    )}
                </button>

                {status === 'error' && (
                    <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 text-red-400 rounded-xl text-center font-medium">
                        Something went wrong. Please try again.
                    </div>
                )}
            </form>
        </div>
    );
};

export default LeadForm;
