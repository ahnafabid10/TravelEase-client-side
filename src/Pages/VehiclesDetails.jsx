import React from 'react';
import { Link, useLoaderData } from 'react-router';
import useAuth from '../Hooks/useAuth';
import useAxios from '../Hooks/useAxios';
import { toast, ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';
import { FaCar, FaMapMarkerAlt, FaDollarSign, FaCheckCircle, FaUser, FaEnvelope, FaCalendarAlt, FaEdit, FaTrash, FaTicketAlt, FaTag, FaInfoCircle } from 'react-icons/fa';

const VehiclesDetails = () => {
    const data = useLoaderData();
    const { user, loading } = useAuth();
    const axiosInstance = useAxios();
    console.log('data', data)

    const handleBookNow = () => {
        const bookingData = {
            coverImage: data.coverImage,
            _id: data._id,
            vehicleName: data.vehicleName,
            pricePerDay: data.pricePerDay,
            owner: data.ownerName
,
            ownerEmail: data.userEmail,
            bookerEmail: user.email,
            bookerName: user.displayName,
            createdAt: new Date(),
            category: data.category,
            location: data.location,
            availability: data.availability,
            description: data.description
        };

        axiosInstance.post('/bookNow', bookingData)
            .then(res => {
                toast.success('🎉 Booking successful!', {
                    position: "top-center",
                    autoClose: 3000,
                });
                console.log(res.data);
            })
    };



    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-200 via-base-100 to-base-200">
                <div className="text-center">
                    <span className="loading loading-infinity loading-lg text-primary w-20"></span>
                    <p className="mt-4 text-base-content/70 font-medium">Loading Vehicle Details...</p>
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
                            <FaCar className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold text-base-content mb-4 tracking-tight">
                            Vehicle Details
                        </h1>
                        <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                            Complete information about your selected vehicle
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-16 -mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    {/* Image Section */}
                    <div className="space-y-6">
                        <div className="bg-base-100 rounded-3xl shadow-2xl border border-base-300/50 overflow-hidden p-6 transform hover:scale-[1.02] transition-all duration-500">
                            <div className="relative w-full aspect-square rounded-2xl overflow-hidden group">
                                <img
                                    src={data.coverImage}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    alt={data.vehicleName}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                {/* Status Badge */}
                                <div className="absolute top-4 right-4">
                                    {data.availability === 'Available' ? (
                                        <div className="badge badge-success gap-2 px-4 py-3 shadow-lg font-semibold text-sm">
                                            <FaCheckCircle className="w-3 h-3" />
                                            Available
                                        </div>
                                    ) : (
                                        <div className="badge badge-warning gap-2 px-4 py-3 shadow-lg font-semibold text-sm">
                                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                                            </svg>
                                            Booked
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="space-y-6">
                        {/* Title & Price Card */}
                        <div className="bg-base-100 rounded-3xl shadow-xl border border-base-300/50 overflow-hidden p-8 space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary flex items-center gap-3">
                                <FaCar className="w-8 h-8" />
                                {data.vehicleName}
                            </h2>
                            
                            <div className="flex items-center gap-3 pt-4 border-t border-base-300">
                                <FaDollarSign className="w-8 h-8 text-primary" />
                                <span className="text-5xl font-bold text-base-content">{data.pricePerDay}</span>
                                <span className="text-base-content/60 text-xl">/day</span>
                            </div>
                        </div>

                        {/* Quick Info Card */}
                        <div className="bg-base-100 rounded-3xl shadow-xl border border-base-300/50 overflow-hidden">
                            <div className="bg-gradient-to-r from-primary/15 via-primary/10 to-transparent px-6 py-4 border-b border-base-300/50">
                                <h3 className="text-xl font-bold text-base-content flex items-center gap-2">
                                    <FaInfoCircle className="w-5 h-5 text-primary" />
                                    Quick Information
                                </h3>
                            </div>
                            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3">
                                    <FaTag className="w-5 h-5 text-primary mt-0.5" />
                                    <div>
                                        <p className="text-sm text-base-content/60 font-medium">Category</p>
                                        <p className="text-base-content font-semibold">{data.category}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <FaMapMarkerAlt className="w-5 h-5 text-primary mt-0.5" />
                                    <div>
                                        <p className="text-sm text-base-content/60 font-medium">Location</p>
                                        <p className="text-base-content font-semibold">{data.location}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 sm:col-span-2">
                                    <FaCheckCircle className="w-5 h-5 text-primary mt-0.5" />
                                    <div>
                                        <p className="text-sm text-base-content/60 font-medium">Availability</p>
                                        <p className="text-base-content font-semibold">{data.availability}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Description Card */}
                        <div className="bg-base-100 rounded-3xl shadow-xl border border-base-300/50 overflow-hidden">
                            <div className="bg-gradient-to-r from-primary/15 via-primary/10 to-transparent px-6 py-4 border-b border-base-300/50">
                                <h3 className="text-xl font-bold text-base-content flex items-center gap-2">
                                    <FaInfoCircle className="w-5 h-5 text-primary" />
                                    Description
                                </h3>
                            </div>
                            <div className="p-6">
                                <p className="text-base-content/80 leading-relaxed">{data.description}</p>
                            </div>
                        </div>

                        {/* Owner Information Card */}
                        <div className="bg-base-100 rounded-3xl shadow-xl border border-base-300/50 overflow-hidden">
                            <div className="bg-gradient-to-r from-primary/15 via-primary/10 to-transparent px-6 py-4 border-b border-base-300/50">
                                <h3 className="text-xl font-bold text-base-content flex items-center gap-2">
                                    <FaUser className="w-5 h-5 text-primary" />
                                    Owner Information
                                </h3>
                            </div>
                            <div className="p-6 space-y-3">
                                <div className="flex items-center gap-3">
                                    <FaUser className="w-4 h-4 text-primary" />
                                    <span className="text-base-content/60">Name:</span>
                                    <span className="text-base-content font-semibold">{data.ownerName}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaEnvelope className="w-4 h-4 text-primary" />
                                    <span className="text-base-content/60">Email:</span>
                                    <span className="text-base-content font-semibold">{data.userEmail}</span>
                                </div>
                            </div>
                        </div>

                        {/* Added By Card */}
                        <div className="bg-base-100 rounded-3xl shadow-xl border border-base-300/50 overflow-hidden">
                            <div className="bg-gradient-to-r from-primary/15 via-primary/10 to-transparent px-6 py-4 border-b border-base-300/50">
                                <h3 className="text-xl font-bold text-base-content flex items-center gap-2">
                                    <FaCalendarAlt className="w-5 h-5 text-primary" />
                                    Added By
                                </h3>
                            </div>
                            <div className="p-6 space-y-3">
                                <div className="flex items-center gap-3">
                                    <FaUser className="w-4 h-4 text-primary" />
                                    <span className="text-base-content/60">Name:</span>
                                    <span className="text-base-content font-semibold">{data.currentUserName}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaEnvelope className="w-4 h-4 text-primary" />
                                    <span className="text-base-content/60">Email:</span>
                                    <span className="text-base-content font-semibold">{data.currentUserEmail}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaCalendarAlt className="w-4 h-4 text-primary" />
                                    <span className="text-base-content/60">Created:</span>
                                    <span className="text-base-content font-semibold">{new Date(data.createdAt).toLocaleDateString()}</span>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button 
                                onClick={handleBookNow}
                                className="btn btn-primary flex-1 gap-2 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg py-3 sm:py-6 group"
                            >
                                <FaTicketAlt className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                                Book Now
                            </button>
                            
                        </div>
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
                className="mt-16"
            />
        </div>
    );
};

export default VehiclesDetails;