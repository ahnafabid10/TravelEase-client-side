import { Link } from 'react-router';
import { useState } from 'react';

const TopCategories = () => {
    const [hoveredId, setHoveredId] = useState(null);

    const latestVehicles = [
        {
            "_id": "67b10a1fcf901a1bb1000029",
            "vehicleName": "Toyota Noah",
            "owner": "Wahidul Haque",
            "category": "Van",
            "pricePerDay": 115,
            "location": "Dhaka, Bangladesh",
            "availability": "Available",
            "description": "Comfortable 7-seater van for family trips.",
            "coverImage": "https://i.ibb.co.com/wrjQ7wtg/Gemini-Generated-Image-y9z0gxy9z0gxy9z0.jpg",
            "userEmail": "wahid@example.com",
            "createdAt": "2025-09-20T09:20:00+00:00",
            "categories": "Van"
        },
        {
            "_id": "67b10a1fcf901a1bb1000021",
            "vehicleName": "Mercedes GLC",
            "owner": "Tanvir Ahmed",
            "category": "SUV",
            "pricePerDay": 200,
            "location": "Dhaka, Bangladesh",
            "availability": "Available",
            "description": "Luxury SUV with leather interior and premium features.",
            "coverImage": "https://i.ibb.co.com/j9mKR3Wh/897.png",
            "userEmail": "tanvir@example.com",
            "createdAt": "2025-10-01T12:22:00+00:00",
            "categories": "SUV"
        },
        {
            "_id": "67b10a1fcf901a1bb1000019",
            "vehicleName": "Suzuki Swift",
            "owner": "Farhan Chowdhury",
            "category": "Sedan",
            "pricePerDay": 55,
            "location": "Dhaka, Bangladesh",
            "availability": "Available",
            "description": "Compact and affordable daily rental car.",
            "coverImage": "https://i.ibb.co.com/cKygR77d/Gemini-Generated-Image-a4timua4timua4ti.jpg",
            "userEmail": "farhan@example.com",
            "createdAt": "2025-10-12T10:00:00+00:00",
            "categories": "Sedan"
        },
        {
            "_id": "67b10a1fcf901a1bb1000020",
            "vehicleName": "BMW i3",
            "owner": "Mehedi Hasan",
            "category": "Electric",
            "pricePerDay": 140,
            "location": "Dhaka, Bangladesh",
            "availability": "Booked",
            "description": "Premium electric hatchback with modern features.",
            "coverImage": "https://i.ibb.co.com/wh6N6yBx/151.png",
            "userEmail": "mehedi@example.com",
            "createdAt": "2025-07-22T15:30:00+00:00",
            "categories": "Electric"
        }
    ];

    return (
        <div className="relative bg-gradient-to-b from-white via-gray-50 to-white dark:from-[#0F0F0F] dark:via-black dark:to-[#0F0F0F] py-20 px-6 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#B11F24]/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#F3F4F6]/30 dark:bg-[#F3F4F6]/10 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#B11F24]/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

            <div className='max-w-[1440px] mx-auto relative z-10'>
                <div className="max-w-screen-xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-16 space-y-4">
                        <div className="inline-block">
                            <span className="text-sm font-semibold tracking-wider uppercase text-[#B11F24]">
                                Explore Our Fleet
                            </span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] dark:text-white leading-tight">
                            Top Categories
                        </h2>
                        <p className="text-lg sm:text-xl text-base text-gray-600 dark:text-[#F3F4F6]/80 max-w-2xl mx-auto">
                            Find The Perfect Vehicle For Your Journey
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {latestVehicles.map((recent, index) => (
                            <div
                                key={recent._id}
                                className="group relative fade-in-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                                onMouseEnter={() => setHoveredId(recent._id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                {/* Card Container */}
                                <div className="relative bg-white dark:bg-[#0F0F0F] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-800">
                                    {/* Gradient Overlay on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#B11F24]/0 to-[#B11F24]/0 group-hover:from-[#B11F24]/10 group-hover:to-[#B11F24]/5 transition-all duration-500 z-10 pointer-events-none rounded-3xl"></div>
                                    
                                    {/* Image Container */}
                                    <div className="relative w-full h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                                        <img 
                                            src={recent.coverImage} 
                                            alt={recent.categories}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        {/* Category Badge */}
                                        <div className="absolute top-4 right-4">
                                            <span className={`px-4 py-2 rounded-full text-xs font-bold backdrop-blur-sm border ${
                                                recent.availability?.toLowerCase() === 'available' 
                                                    ? 'bg-green-500/90 text-white border-green-400' 
                                                    : 'bg-yellow-500/90 text-white border-yellow-400'
                                            }`}>
                                                {recent.availability}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 space-y-4">
                                        <h3 className="text-2xl font-bold text-[#1A1A1A] dark:text-white group-hover:text-[#B11F24] transition-colors duration-300">
                                            {recent.categories}
                                        </h3>
                                        
                                        <p className="text-sm text-gray-600 dark:text-[#F3F4F6]/80 line-clamp-2">
                                            {recent.description}
                                        </p>

                                        {/* Price Tag */}
                                        <div className="flex items-center justify-between pt-2">
                                            <div>
                                                <p className="text-xs text-gray-500 dark:text-[#F3F4F6]/60">Starting at</p>
                                                <p className="text-2xl font-bold text-[#B11F24]">
                                                    ${recent.pricePerDay}
                                                    <span className="text-sm font-normal text-gray-500 dark:text-[#F3F4F6]/60">/day</span>
                                                </p>
                                            </div>
                                            
                                            {/* Arrow Icon */}
                                            <div className={`w-10 h-10 rounded-full bg-[#B11F24] flex items-center justify-center transform transition-all duration-300 ${
                                                hoveredId === recent._id ? 'scale-110 rotate-45' : 'scale-100 rotate-0'
                                            }`}>
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom Shine Effect */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#B11F24] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className='flex justify-center mt-16'>
                        <Link to="/allVehicles">
                            <button className="btn-donate group relative overflow-hidden">
                                <span className="relative z-10 flex items-center gap-2">
                                    Explore All Vehicles
                                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                                {/* Shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopCategories;