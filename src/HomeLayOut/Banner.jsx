import React from 'react';
import carImg from '../assets/blake-meyer-CRNbHjNaljo-unsplash.jpg'
import { Link } from 'react-router';
import { motion } from "motion/react"

const Banner = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Image with Parallax Effect */}
            <motion.div 
                className="absolute inset-0"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <img
                    src={carImg}
                    alt="Car Image"
                    className="w-full h-full object-cover"
                />
            </motion.div>
            
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Decorative Elements - Hidden on mobile */}
            <div className="hidden md:block absolute top-20 right-20 w-72 h-72 bg-[#B11F24]/20 rounded-full filter blur-3xl animate-blob"></div>
            <div className="hidden md:block absolute bottom-20 left-20 w-72 h-72 bg-[#B11F24]/15 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 z-10  sm:pt-0">
                <div className="max-w-5xl space-y-6 sm:space-y-8">
                    

                    {/* Main Heading */}
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight px-2"
                        initial={{ x: 40, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        Connecting You to
                        <span className="block mt-2 bg-gradient-to-r from-white via-[#F3F4F6] to-white bg-clip-text text-transparent">
                            Every Destination
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed px-4"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Discover the perfect ride for your journey. Book reliable, affordable vehicles in minutes.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-2 sm:pt-4 px-4"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <Link to="/allVehicles" className="w-full sm:w-auto">
                            <button className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#B11F24] hover:bg-[#8F1820] text-white text-sm sm:text-base font-bold rounded-full shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Book Your Ride Now
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </button>
                        </Link>

                        <Link to="/allVehicles" className="w-full sm:w-auto">
                            <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white text-sm sm:text-base font-bold rounded-full border-2 border-white/30 hover:border-white/50 transition-all duration-300 transform hover:scale-105">
                                <span className="flex items-center justify-center gap-2">
                                    Explore Vehicles
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </button>
                        </Link>
                    </motion.div>

                    {/* Feature Pills */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 pt-4 sm:pt-6 md:pt-8 px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#B11F24]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs sm:text-sm font-medium text-white whitespace-nowrap">Verified Owners</span>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#B11F24]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                            </svg>
                            <span className="text-xs sm:text-sm font-medium text-white whitespace-nowrap">24/7 Support</span>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#B11F24]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs sm:text-sm font-medium text-white whitespace-nowrap">Instant Booking</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator - Hidden on small mobile */}
            <motion.div
                className=" sm:flex absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-white/60 text-xs font-medium">Scroll to explore</span>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </motion.div>
        </div>
    );
};

export default Banner;