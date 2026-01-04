import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import useAxios from '../Hooks/useAxios';
import { Link } from 'react-router';
import { FaCar, FaMapMarkerAlt, FaDollarSign, FaCheckCircle, FaCalendarAlt, FaEye, FaTicketAlt } from 'react-icons/fa';

const MyBookings = () => {
    const { user } = useAuth();
    const [vehicle, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);
    const axiosInstance = useAxios();

    useEffect(() => {
        axiosInstance.get(`/bookNow?email=${user.email}`)
            .then(res => {
                console.log(res.data);
                setVehicles(res.data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-200 via-base-100 to-base-200">
                <div className="text-center">
                    <span className="loading loading-bars loading-lg text-primary"></span>
                    <p className="mt-4 text-base-content/70 font-medium">Loading your bookings...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-b border-primary/20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(177,31,36,0.1),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(177,31,36,0.05),transparent_50%)]"></div>
                
                <div className="relative max-w-7xl mx-auto px-4 py-24 pt-40">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-3xl mb-6 shadow-2xl transform hover:scale-110 hover:rotate-6 transition-all duration-500">
                            <FaTicketAlt className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold text-base-content mb-4 tracking-tight">
                            My Bookings
                        </h1>
                        <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                            Track and manage all your vehicle reservations
                        </p>
                        <div className="mt-8 flex justify-center gap-4 flex-wrap">
                            <div className="stats shadow-lg bg-base-100 border border-base-300/50">
                                <div className="stat">
                                    <div className="stat-title text-base-content/70">Total Bookings</div>
                                    <div className="stat-value text-primary">{vehicle.length}</div>
                                </div>
                            </div>
                            <div className="stats shadow-lg bg-base-100 border border-base-300/50">
                                <div className="stat">
                                    <div className="stat-title text-base-content/70">Active</div>
                                    <div className="stat-value text-success">{vehicle.filter(v => v.availability === 'Available').length}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bookings Grid */}
            <div className="max-w-7xl mx-auto px-4 py-16 -mt-8">
                {vehicle.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-base-300/50 rounded-full mb-6">
                            <FaTicketAlt className="w-12 h-12 text-base-content/40" />
                        </div>
                        <h3 className="text-2xl font-bold text-base-content mb-4">No Bookings Yet</h3>
                        <p className="text-base-content/70 mb-8">Start exploring and book your first vehicle</p>
                        <Link to="/allVehicles">
                            <button className="btn btn-primary btn-lg gap-2 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                                <FaCar className="w-5 h-5" />
                                Browse Vehicles
                            </button>
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {vehicle.map(Vehicles => (
                                <div
                                    key={Vehicles._id}
                                    className="group bg-base-100 rounded-3xl shadow-xl border border-base-300/50 overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
                                >
                                    {/* Image Section */}
                                    <div className="relative w-full h-56 bg-base-200 overflow-hidden">
                                        <img 
                                            src={Vehicles.coverImage} 
                                            alt={Vehicles.vehicleName}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        
                                        {/* Booking Badge */}
                                        <div className="absolute top-4 left-4">
                                            <div className="badge badge-primary gap-2 px-4 py-3 shadow-lg font-semibold">
                                                <FaTicketAlt className="w-3 h-3" />
                                                Booked
                                            </div>
                                        </div>

                                        {/* Status Badge */}
                                        <div className="absolute top-4 right-4">
                                            {Vehicles.availability === 'Available' ? (
                                                <div className="badge badge-success gap-2 px-4 py-3 shadow-lg font-semibold">
                                                    <FaCheckCircle className="w-3 h-3" />
                                                    Available
                                                </div>
                                            ) : (
                                                <div className="badge badge-warning gap-2 px-4 py-3 shadow-lg font-semibold">
                                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                                                    </svg>
                                                    Booked
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-6 space-y-4">
                                        {/* Title */}
                                        <h2 className="text-xl font-bold text-base-content line-clamp-1 group-hover:text-primary transition-colors duration-300">
                                            {Vehicles.vehicleName}
                                        </h2>

                                        {/* Description */}
                                        <p className="text-base-content/70 text-sm line-clamp-2 leading-relaxed">
                                            {Vehicles.description}
                                        </p>

                                        {/* Location */}
                                        <div className="flex items-center gap-2 text-base-content/60">
                                            <FaMapMarkerAlt className="w-4 h-4 text-primary" />
                                            <span className="text-sm">{Vehicles.location}</span>
                                        </div>

                                        {/* Price Section */}
                                        <div className="flex items-center justify-between pt-3 border-t border-base-300">
                                            <div className="flex items-center gap-2">
                                                <FaDollarSign className="w-5 h-5 text-primary" />
                                                <span className="text-3xl font-bold text-base-content">{Vehicles.pricePerDay}</span>
                                                <span className="text-base-content/60 text-sm">/day</span>
                                            </div>
                                        </div>

                                        {/* Action Button */}
                                        <Link to={`/vehicleDetails/${Vehicles._id}`}>
                                            <button className="btn btn-primary w-full gap-2 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                                                <FaEye className="w-4 h-4" />
                                                View Details
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Browse More Vehicles CTA */}
                        <div className="mt-16 text-center">
                            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-3xl p-12 border border-primary/20">
                                <FaCar className="w-16 h-16 text-primary mx-auto mb-4" />
                                <h3 className="text-3xl font-bold text-base-content mb-4">
                                    Need another vehicle?
                                </h3>
                                <p className="text-base-content/70 mb-8 max-w-2xl mx-auto">
                                    Explore our collection of premium vehicles for your next adventure
                                </p>
                                <Link to="/allVehicles">
                                    <button className="btn btn-primary btn-lg gap-2 px-8 shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 group">
                                        <FaCar className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                                        Browse More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default MyBookings;