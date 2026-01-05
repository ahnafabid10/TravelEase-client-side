import React, { useEffect, useState } from 'react';
import useAxios from '../Hooks/useAxios';
import { Link } from 'react-router';
import useAuth from '../Hooks/useAuth';

const AllVehicles = () => {
    const {loading} = useAuth()
    const axiosInstance = useAxios();
    const [allVehicles, setAllVehicles] = useState([]);
    const [isLoadingVehicles, setIsLoadingVehicles] = useState(true);
    const [search, setSearch] = useState("");
    const [location, setLocation] = useState('')
    const [category, setCategory] = useState('')
    const [hoveredId, setHoveredId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const vehiclesPerPage = 8;

    useEffect(() => {
         setIsLoadingVehicles(true);

        axiosInstance.get(`/allVehicles`)
            .then(res => {
                console.log(res.data);
                setAllVehicles(res.data);
                setIsLoadingVehicles(false);
            })
    }, []);

 const filter = allVehicles.filter(v => {
        const matchCategory = category ? v.category === category : true;
        const matchLocation = location ? v.location === location : true;
         const matchSearch =
        v.vehicleName.toLowerCase().includes(search.toLowerCase()) ||
        v.location.toLowerCase().includes(search.toLowerCase());
        return matchCategory  &&  matchLocation  && matchSearch ;
    });

const indexOfLastVehicle = currentPage * vehiclesPerPage;
  const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage;
  const currentVehicles = filter.slice(indexOfFirstVehicle, indexOfLastVehicle);
  const totalPages = Math.ceil(filter.length / vehiclesPerPage);

  if(loading || isLoadingVehicles){
    return <div className="min-h-screen flex items-center justify-center bg-base-200">
  <span className="loading loading-bars loading-xl text-primary"></span>
</div>

  }
    return (
    <div className='min-h-screen relative bg-gradient-to-b from-white via-gray-50 to-white dark:from-[#0F0F0F] dark:via-black dark:to-[#0F0F0F] overflow-hidden'>
            {/* Decorative background elements */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-[#B11F24]/10 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#F3F4F6]/15 dark:bg-[#F3F4F6]/5 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="pt-32 sm:pt-40 pb-20 px-4 sm:px-6 relative z-10">
                <div className='max-w-[1440px] mx-auto'>
                    <div className="max-w-screen-xl mx-auto">
                        {/* Header Section */}
                        <div className="text-center mb-12 space-y-4 fade-in-up">
                            <div className="inline-block">
                                <span className="text-sm font-semibold tracking-wider uppercase text-[#B11F24]">
                                    Discover Your Ride
                                </span>
                            </div>
                            <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] dark:text-white">
                                All Vehicles
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 dark:text-[#F3F4F6]/80 max-w-2xl mx-auto">
                                Browse our complete collection and find the perfect vehicle for your journey
                            </p>
                        </div>

                        {/* Filter Section */}
                        <div className="bg-white dark:bg-[#0F0F0F] rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800 p-6 mb-12 fade-in-up" style={{ animationDelay: '0.1s' }}>
                            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                                <div className="relative w-full sm:w-72">
  <input
    type="text"
    placeholder="Search by name or location..."
    value={search}
    onChange={(e) => {
      setSearch(e.target.value);
      setCurrentPage(1);
    }}
    className="w-full px-6 py-3 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl text-[#1A1A1A] dark:text-white font-medium focus:outline-none focus:border-[#B11F24] transition-all duration-300"
  />
  <svg
    className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B11F24]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
</div>

                                {/* Category Filter */}
                                <div className="relative w-full sm:w-auto">
                                    <select
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        className="w-full sm:w-48 px-6 py-3 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl text-[#1A1A1A] dark:text-white font-medium focus:outline-none focus:border-[#B11F24] transition-all duration-300 cursor-pointer appearance-none"
                                    >
                                        <option value="">All Categories</option>
                                        <option value="Van">Van</option>
                                        <option value="SUV">SUV</option>
                                        <option value="Sedan">Sedan</option>
                                        <option value="Electric">Electric</option>
                                    </select>
                                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B11F24] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>

                                {/* Location Filter */}
                                <div className="relative w-full sm:w-auto">
                                    <select
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        className="w-full sm:w-48 px-6 py-3 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl text-[#1A1A1A] dark:text-white font-medium focus:outline-none focus:border-[#B11F24] transition-all duration-300 cursor-pointer appearance-none"
                                    >
                                        <option value="">All Locations</option>
                                        <option value="Dhaka, Bangladesh">Dhaka, Bangladesh</option>
                                        <option value="Chittagong, Bangladesh">Chittagong, Bangladesh</option>
                                        <option value="Rajshahi, Bangladesh">Rajshahi, Bangladesh</option>
                                    </select>
                                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B11F24] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>

                                {/* Clear Filters Button */}
                                {(category || location) && (
                                    <button
                                        onClick={() => {
                                            setCategory('');
                                            setLocation('');
                                        }}
                                        className="px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-[#1A1A1A] dark:text-white font-medium rounded-xl transition-all duration-300 flex items-center gap-2"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        Clear Filters
                                    </button>
                                )}
                            </div>

                            {/* Results Count */}
                            <div className="text-center mt-4">
                                <p className="text-sm text-gray-600 dark:text-[#F3F4F6]/70">
                                    Showing <span className="font-bold text-[#B11F24]">{filter.length}</span> vehicle{filter.length !== 1 ? 's' : ''}
                                </p>
                            </div>
                        </div>

                        {/* Vehicles Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {currentVehicles.map((vehicle, index) => (
                                <article
                                    key={vehicle._id}
                                    className="group relative fade-in-up"
                                    style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                                    onMouseEnter={() => setHoveredId(vehicle._id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                >
                                    {/* Card Container */}
                                    <div className="relative bg-white dark:bg-[#0F0F0F] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-800">
                                        {/* Gradient Overlay on Hover */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#B11F24]/0 to-[#B11F24]/0 group-hover:from-[#B11F24]/10 group-hover:to-[#B11F24]/5 transition-all duration-500 z-10 pointer-events-none rounded-3xl"></div>

                                        {/* Image Container */}
                                        <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
                                            <img
                                                src={vehicle.coverImage}
                                                alt={vehicle.vehicleName}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            />

                                            {/* Availability Badge */}
                                            <div className="absolute top-4 left-4">
                                                <span className={`px-4 py-2 rounded-full text-xs font-bold backdrop-blur-sm border ${
                                                vehicle.availability?.toLowerCase() === 'available' 
                                                    ? 'bg-green-500/90 text-white border-green-400' 
                                                    : 'bg-yellow-500/90 text-white border-yellow-400'
                                            }`}>
                                                {vehicle.availability}
                                            </span>
                                            </div>

                                            {/* Category Badge */}
                                            <div className="absolute top-4 right-4 bg-white/95 dark:bg-[#0F0F0F]/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
                                                <span className="text-xs font-bold text-[#B11F24]">
                                                    {vehicle.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 space-y-4">
                                            <h3 className="text-xl font-bold text-[#1A1A1A] dark:text-white group-hover:text-[#B11F24] transition-colors duration-300">
                                                {vehicle.vehicleName}
                                            </h3>

                                            <p className="text-sm text-gray-600 dark:text-[#F3F4F6]/80 line-clamp-2 min-h-[40px]">
                                                {vehicle.description}
                                            </p>

                                            {/* Info Row */}
                                            <div className="flex items-center justify-between pt-2 pb-4 border-t border-gray-100 dark:border-gray-800">
                                                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-[#F3F4F6]/80">
                                                    <svg className="w-4 h-4 text-[#B11F24]" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="truncate text-xs">{vehicle.location}</span>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-2xl font-bold text-[#B11F24]">
                                                        ${vehicle.pricePerDay}
                                                        <span className="text-xs font-normal text-gray-600 dark:text-[#F3F4F6]/60">/day</span>
                                                    </p>
                                                </div>
                                            </div>

                                            {/* CTA Button */}
                                            <Link to={`/vehicleDetails/${vehicle._id}`} className="block">
                                                <button className="relative w-full py-3 px-4 rounded-xl font-semibold text-white bg-[#B11F24] hover:bg-[#8F1820] transition-all duration-300 overflow-hidden group/btn">
                                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                                        View Details
                                                        <svg
                                                            className={`w-4 h-4 transform transition-all duration-300 ${hoveredId === vehicle._id ? 'translate-x-1 rotate-45' : 'translate-x-0 rotate-0'
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

                        {/* No Results Message */}
                        {filter.length === 0 && (
                            <div className="text-center py-20">
                                <svg className="w-20 h-20 mx-auto text-gray-400 dark:text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h3 className="text-2xl font-bold text-[#1A1A1A] dark:text-white mb-2">No vehicles found</h3>
                                <p className="text-gray-600 dark:text-[#F3F4F6]/80 mb-6">Try adjusting your filters to see more results</p>
                                <button
                                    onClick={() => {
                                        setCategory('');
                                        setLocation('');
                                    }}
                                    className="btn-donate"
                                >
                                    Clear All Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-6 mb-20 gap-2">
        <button
          className="btn btn-sm"
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`btn btn-sm ${currentPage === i + 1 ? 'bg-[#B11F24] text-white' : ''}`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="btn btn-sm"
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >Next</button>
      </div>
        </div>
    );
};

export default AllVehicles;