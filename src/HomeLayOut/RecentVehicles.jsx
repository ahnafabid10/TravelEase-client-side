import React, { useEffect, useState } from 'react';
import useAxios from '../Hooks/useAxios';
import { Link } from 'react-router';
import { format } from 'date-fns';
import { FaLocationArrow } from 'react-icons/fa';

const RecentVehicles = () => {
    const axiosInstance = useAxios();
    const [latestVehicles, setLatestVehicles] = useState([]);
    const [hoveredId, setHoveredId] = useState(null);

    useEffect(() => {
        axiosInstance.get('/latest-vehicles').then(res => {
            setLatestVehicles(res.data || []);
        });
    }, []);

    return (
        <section className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-[#0F0F0F] dark:via-black dark:to-[#0F0F0F] overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-20 right-0 w-80 h-80 bg-[#B11F24]/15 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-40 animate-blob"></div>
            <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#F3F4F6]/20 dark:bg-[#F3F4F6]/5 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

            <div className="max-w-screen-xl mx-auto relative z-10">
                <div className="">
                    {/* Header Section */}
                    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
                        <div className="space-y-3">
                            <div className="inline-block">
                                <span className="text-sm font-semibold tracking-wider uppercase text-[#B11F24]">
                                    Fresh Arrivals
                                </span>
                            </div>
                            <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] dark:text-white">
                                Latest Vehicles
                            </h2>
                            <p className="text-base text-gray-600 dark:text-[#F3F4F6]/80">
                                Curated picks just added — {format(new Date(), 'EEEE, MMM dd, yyyy')}
                            </p>
                        </div>
                        <Link to="/allVehicles" className="mt-6 sm:mt-0">
                            <button className="btn-donate group relative overflow-hidden">
                                <span className="relative z-10 flex items-center gap-2">
                                    See All Vehicles
                                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </button>
                        </Link>
                    </header>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {latestVehicles.map((v, index) => (
                            <article 
                                key={v._id} 
                                className="group relative fade-in-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                                onMouseEnter={() => setHoveredId(v._id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                {/* Card Container */}
                                <div className="relative bg-white dark:bg-[#0F0F0F] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-800">
                                    {/* Gradient Overlay on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#B11F24]/0 to-[#B11F24]/0 group-hover:from-[#B11F24]/10 group-hover:to-[#B11F24]/5 transition-all duration-500 z-10 pointer-events-none rounded-3xl"></div>
                                    
                                    {/* Image Container */}
                                    <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
                                        <img 
                                            src={v.coverImage} 
                                            alt={`${v.vehicleName} image`} 
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        
                                        {/* Availability Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className={`px-4 py-2 rounded-full text-xs font-bold backdrop-blur-sm border ${
                                                v.availability?.toLowerCase() === 'available' 
                                                    ? 'bg-green-500/90 text-white border-green-400' 
                                                    : 'bg-yellow-500/90 text-white border-yellow-400'
                                            }`}>
                                                {v.availability}
                                            </span>
                                        </div>
                                        
                                        {/* Price Badge */}
                                        <div className="absolute top-4 right-4 bg-white/95 dark:bg-[#0F0F0F]/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
                                            <span className="text-sm font-bold text-[#B11F24]">
                                                ${v.pricePerDay}
                                                <span className="text-xs font-normal text-gray-600 dark:text-[#F3F4F6]/60">/day</span>
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 space-y-4">
                                        <h3 className="text-xl font-bold text-[#1A1A1A] dark:text-white group-hover:text-[#B11F24] transition-colors duration-300 truncate">
                                            {v.vehicleName}
                                        </h3>
                                        
                                        <p className="text-sm text-gray-600 dark:text-[#F3F4F6]/80 line-clamp-3 min-h-[60px]">
                                            {(v.description || '').length > 140 ? `${v.description.slice(0, 140)}...` : v.description}
                                        </p>

                                        {/* Info Row */}
                                        <div className="flex items-center justify-between pt-2 pb-4 border-t border-gray-100 dark:border-gray-800">
                                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-[#F3F4F6]/80">
                                                <FaLocationArrow className="text-[#B11F24] text-xs" />
                                                <span className="truncate">{v.location}</span>
                                            </div>
                                            {v.seats && (
                                                <span className="text-sm font-semibold text-[#1A1A1A] dark:text-white">
                                                    {v.seats} seats
                                                </span>
                                            )}
                                        </div>

                                        {/* CTA Button */}
                                        <Link to={`/vehicleDetails/${v._id}`} className="block">
                                            <button className="relative w-full py-3 px-4 rounded-xl font-semibold text-white bg-[#B11F24] hover:bg-[#8F1820] transition-all duration-300 overflow-hidden group/btn">
                                                <span className="relative z-10 flex items-center justify-center gap-2">
                                                    View Details
                                                    <svg 
                                                        className={`w-4 h-4 transform transition-all duration-300 ${
                                                            hoveredId === v._id ? 'translate-x-1 rotate-45' : 'translate-x-0 rotate-0'
                                                        }`} 
                                                        fill="none" 
                                                        stroke="currentColor" 
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </span>
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                                            </button>
                                        </Link>
                                    </div>

                                    {/* Bottom Shine Effect */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#B11F24] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecentVehicles;