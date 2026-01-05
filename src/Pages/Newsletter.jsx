import React, { useState } from 'react';
import { FaEnvelope, FaPaperPlane, FaCar, FaCheckCircle } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        
        if (!email) {
            toast.error('Please enter your email address', {
                position: "top-center",
                autoClose: 3000,
            });
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error('Please enter a valid email address', {
                position: "top-center",
                autoClose: 3000,
            });
            return;
        }

        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            toast.success('Successfully subscribed to our newsletter!', {
                position: "top-center",
                autoClose: 3000,
            });
            setEmail('');
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-base-200 via-base-100 to-base-200 py-20 px-4">
            {/* Background Decorations */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(177,31,36,0.05),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(177,31,36,0.03),transparent_50%)]"></div>
            
            {/* Floating Car Icons */}
            <div className="absolute top-10 left-10 opacity-10 animate-bounce">
                <FaCar className="w-16 h-16 text-primary" />
            </div>
            <div className="absolute bottom-10 right-10 opacity-10 animate-bounce" style={{ animationDelay: '1s' }}>
                <FaCar className="w-20 h-20 text-primary" />
            </div>

            <div className="relative max-w-6xl mx-auto">
                {/* Main Newsletter Card */}
                <div className="bg-gradient-to-r from-primary to-primary/90 rounded-[3rem] shadow-2xl overflow-hidden border border-primary/20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Left Side - Content */}
                        <div className="p-8 md:p-12 lg:p-16 space-y-6 text-white relative">
                            {/* Icon Badge */}
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl shadow-lg mb-4">
                                <FaEnvelope className="w-8 h-8 text-white" />
                            </div>

                            {/* Heading */}
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                                    Join Our Newsletter
                                </h2>
                                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                                    Get the latest updates on vehicle rentals, exclusive deals, and travel tips delivered straight to your inbox.
                                </p>
                            </div>

                            {/* Benefits List */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <FaCheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-white/90">Exclusive rental discounts & promotions</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <FaCheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-white/90">New vehicle listings & updates</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <FaCheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-white/90">Travel tips & destination guides</span>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="flex gap-8 pt-6">
                                <div>
                                    <div className="text-3xl font-bold text-white">10K+</div>
                                    <div className="text-sm text-white/70">Subscribers</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-white">500+</div>
                                    <div className="text-sm text-white/70">Vehicles</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-white">4.9★</div>
                                    <div className="text-sm text-white/70">Rating</div>
                                </div>
                            </div>

                            {/* Decorative Pattern */}
                            <div className="absolute bottom-0 right-0 opacity-10">
                                <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                                    <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="2" />
                                    <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="2" />
                                    <circle cx="100" cy="100" r="40" stroke="white" strokeWidth="2" />
                                </svg>
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div className="bg-base-100 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                            <form onSubmit={handleSubscribe} className="space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-base-content mb-2">
                                        Subscribe Now
                                    </h3>
                                    <p className="text-base-content/70">
                                        Don't miss out on our latest offers and updates
                                    </p>
                                </div>

                                {/* Email Input */}
                                <div className="space-y-4">
                                    <div className="relative">
                                        <label className="label">
                                            <span className="label-text font-semibold text-base flex items-center gap-2">
                                                <FaEnvelope className="w-4 h-4 text-primary" />
                                                Email Address
                                            </span>
                                        </label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="your.email@example.com"
                                            className="input input-bordered w-full input-lg focus:input-primary transition-all duration-300 hover:border-primary/50"
                                        />
                                    </div>

                                    {/* Subscribe Button */}
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="btn btn-primary w-full btn-lg gap-2 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group relative overflow-hidden"
                                    >
                                        {loading ? (
                                            <>
                                                <span className="loading loading-spinner"></span>
                                                Subscribing...
                                            </>
                                        ) : (
                                            <>
                                                <FaPaperPlane className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                                <span>Subscribe Now</span>
                                            </>
                                        )}
                                        {/* Shine Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                    </button>
                                </div>

                                {/* Privacy Note */}
                                <p className="text-sm text-base-content/60 text-center">
                                    We respect your privacy. Unsubscribe at any time.
                                </p>

                                {/* Trust Badges */}
                                <div className="flex items-center justify-center gap-4 pt-4">
                                    <div className="badge badge-outline badge-success gap-2">
                                        <FaCheckCircle className="w-3 h-3" />
                                        No Spam
                                    </div>
                                    <div className="badge badge-outline badge-info gap-2">
                                        <FaCheckCircle className="w-3 h-3" />
                                        Secure
                                    </div>
                                    <div className="badge badge-outline badge-warning gap-2">
                                        <FaCheckCircle className="w-3 h-3" />
                                        Free
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    <div className="bg-base-100 rounded-2xl p-6 shadow-lg border border-base-300 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                            <FaEnvelope className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-lg font-bold text-base-content mb-2">Weekly Updates</h4>
                        <p className="text-base-content/70 text-sm">Get fresh content every week</p>
                    </div>
                    <div className="bg-base-100 rounded-2xl p-6 shadow-lg border border-base-300 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                        <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mb-4">
                            <FaCar className="w-6 h-6 text-success" />
                        </div>
                        <h4 className="text-lg font-bold text-base-content mb-2">Early Access</h4>
                        <p className="text-base-content/70 text-sm">Be first to know about new vehicles</p>
                    </div>
                    <div className="bg-base-100 rounded-2xl p-6 shadow-lg border border-base-300 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                        <div className="w-12 h-12 bg-warning/10 rounded-xl flex items-center justify-center mb-4">
                            <FaCheckCircle className="w-6 h-6 text-warning" />
                        </div>
                        <h4 className="text-lg font-bold text-base-content mb-2">Special Offers</h4>
                        <p className="text-base-content/70 text-sm">Exclusive deals for subscribers</p>
                    </div>
                </div>
            </div>

            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default Newsletter;