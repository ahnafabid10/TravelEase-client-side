import React from "react";
import { FaCar, FaLock, FaStar, FaCalendarAlt } from "react-icons/fa";
import img from "../assets/paul-hanaoka-D-qq7W751vs-unsplash.jpg"

const AboutUs = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-[#0F0F0F] dark:via-black dark:to-[#0F0F0F] py-20 lg:py-28 px-6 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#B11F24]/15 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F3F4F6]/20 dark:bg-[#F3F4F6]/5 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm font-semibold tracking-wider uppercase text-[#B11F24]">
                  Who We Are
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] dark:text-white leading-tight">
                About TravelEase
              </h2>
            </div>

            <p className="text-lg text-gray-600 dark:text-[#F3F4F6]/80 leading-relaxed">
              TravelEase is a modern vehicle booking and trip management platform designed to help travelers find the perfect ride quickly, securely, and at the best price. From sedans to SUVs to eco-friendly EVs—we make every journey easier.
            </p>

            <ul className="space-y-6">
              <li className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white dark:hover:bg-gray-800/50 transition-all duration-300 fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#B11F24]/10 dark:bg-[#B11F24]/20 flex items-center justify-center group-hover:bg-[#B11F24] transition-all duration-300">
                  <FaCar className="text-xl text-[#B11F24] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A] dark:text-white mb-1">
                    Wide Range of Vehicles
                  </h3>
                  <p className="text-gray-600 dark:text-[#F3F4F6]/70">
                    Find the perfect vehicle for every trip and occasion
                  </p>
                </div>
              </li>

              <li className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white dark:hover:bg-gray-800/50 transition-all duration-300 fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#B11F24]/10 dark:bg-[#B11F24]/20 flex items-center justify-center group-hover:bg-[#B11F24] transition-all duration-300">
                  <FaLock className="text-xl text-[#B11F24] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A] dark:text-white mb-1">
                    Safe & Verified
                  </h3>
                  <p className="text-gray-600 dark:text-[#F3F4F6]/70">
                    All vehicle owners are thoroughly verified for your safety
                  </p>
                </div>
              </li>

              <li className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white dark:hover:bg-gray-800/50 transition-all duration-300 fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#B11F24]/10 dark:bg-[#B11F24]/20 flex items-center justify-center group-hover:bg-[#B11F24] transition-all duration-300">
                  <FaCalendarAlt className="text-xl text-[#B11F24] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A] dark:text-white mb-1">
                    Easy Booking
                  </h3>
                  <p className="text-gray-600 dark:text-[#F3F4F6]/70">
                    Real-time availability with seamless booking experience
                  </p>
                </div>
              </li>

              <li className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white dark:hover:bg-gray-800/50 transition-all duration-300 fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#B11F24]/10 dark:bg-[#B11F24]/20 flex items-center justify-center group-hover:bg-[#B11F24] transition-all duration-300">
                  <FaStar className="text-xl text-[#B11F24] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A] dark:text-white mb-1">
                    Trusted Platform
                  </h3>
                  <p className="text-gray-600 dark:text-[#F3F4F6]/70">
                    Relied upon by thousands of travelers for reliability
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Image */}
          <div className="relative flex justify-center lg:justify-end fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              {/* Decorative background shape */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#B11F24]/20 to-[#B11F24]/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              
              {/* Main image container */}
              <div className="relative overflow-hidden rounded-3xl border-4 border-white dark:border-gray-800 shadow-2xl">
                <img
                  src={img}
                  alt="TravelEase"
                  className="w-full max-w-md lg:max-w-lg h-[320px] sm:h-[400px] lg:h-[520px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#B11F24]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-[#0F0F0F] rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-800 transform group-hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#B11F24] flex items-center justify-center">
                    <FaStar className="text-2xl text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#1A1A1A] dark:text-white">4.9</p>
                    <p className="text-xs text-gray-600 dark:text-[#F3F4F6]/70">Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;