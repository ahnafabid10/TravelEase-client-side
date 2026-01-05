import React from 'react';
import { FaCar, FaChartLine, FaListAlt, FaPlusCircle, FaTicketAlt, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import useAxios from '../../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';

const Dashboard = () => {
    const { user,  } = useAuth();
    const axiosInstance = useAxios();
    
    // Fetch all vehicles
    const { data: allVehicles = [], isLoading: vehiclesLoading } = useQuery({
        queryKey: ['allVehicles'],
        queryFn: async () => {
            const res = await axiosInstance.get(`/allVehicles`);
            console.log('All vehicles:', res.data);
            return res.data;
        }
    });

    // Fetch user's vehicles
    const { data: myVehicles = [] } = useQuery({
        queryKey: ['myVehicles', user?.email],
        queryFn: async () => {
            const res = await axiosInstance.get(`/myVehiclePage?email=${user.email}`);
            return res.data;
        }
    });

    // Fetch bookings
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await axiosInstance.get(`/bookNow?email=${user.email}`);
            return res.data;
        }
    });

    // Calculate stats
    const totalRevenue = bookings.reduce((sum, booking) => sum + (Number(booking.pricePerDay) || 0), 0);
    const availableVehicles = allVehicles.filter(v => v.availability === 'Available').length;

    const stats = [
        { 
            label: 'My Vehicles', 
            value: myVehicles.length.toString(), 
            icon: FaCar, 
            color: 'text-primary', 
            bgColor: 'bg-primary/10' 
        },
        { 
            label: 'My Bookings', 
            value: bookings.length.toString(), 
            icon: FaTicketAlt, 
            color: 'text-success', 
            bgColor: 'bg-success/10' 
        },
        { 
            label: 'Total Booking Cost', 
            value: `$${totalRevenue}`, 
            icon: FaChartLine, 
            color: 'text-warning', 
            bgColor: 'bg-warning/10' 
        },
        { 
            label: 'Available', 
            value: availableVehicles.toString(), 
            icon: FaUserCircle, 
            color: 'text-info', 
            bgColor: 'bg-info/10' 
        }
    ];

    // Recent activity based on actual data
    const recentActivity = [
        ...bookings.slice(0, 2).map(booking => ({
            action: `New booking for ${booking.vehicleName}`,
            time: new Date(booking.createdAt).toLocaleString(),
            type: 'booking'
        })),
        ...myVehicles.slice(0, 2).map(vehicle => ({
            action: `Vehicle: ${vehicle.vehicleName}`,
            time: new Date(vehicle.createdAt).toLocaleString(),
            type: 'vehicle'
        }))
    ].slice(0, 4);

    if (vehiclesLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-200 via-base-100 to-base-200">
                <div className="text-center">
                    <span className="loading loading-bars loading-lg text-primary w-20"></span>
                    <p className="mt-4 text-base-content/70 font-medium">Loading dashboard...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="p-6">
            {/* Welcome Banner */}
            <div className="relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 mb-8 shadow-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl font-bold text-white mb-2">Welcome back, {user?.displayName || 'User'}! 👋</h2>
                    <p className="text-white/90">Here's what's happening with your vehicle rentals today.</p>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-base-100 rounded-3xl p-6 shadow-xl border border-base-300/50 transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 ${stat.bgColor} rounded-2xl`}>
                                <stat.icon className={`w-6 h-6 ${stat.color}`} />
                            </div>
                        </div>
                        <h3 className="text-3xl font-bold text-base-content mb-2">{stat.value}</h3>
                        <p className="text-base-content/60 text-sm">{stat.label}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Activity */}
                <div className="bg-base-100 rounded-3xl shadow-xl border border-base-300/50 overflow-hidden">
                    <div className="bg-gradient-to-r from-primary/15 via-primary/10 to-transparent px-6 py-4 border-b border-base-300/50">
                        <h3 className="text-xl font-bold text-base-content">Recent Activity</h3>
                    </div>
                    <div className="p-6 space-y-4">
                        {recentActivity.length > 0 ? (
                            recentActivity.map((activity, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-base-200 transition-all duration-300">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                    <div className="flex-1">
                                        <p className="text-base-content font-medium">{activity.action}</p>
                                        <p className="text-base-content/60 text-sm">{activity.time}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-8 text-base-content/60">
                                <p>No recent activity</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-base-100 rounded-3xl  shadow-xl border border-base-300/50 overflow-hidden">
                    <div className="bg-gradient-to-r from-primary/15 via-primary/10 to-transparent px-6 py-4 border-b border-base-300/50">
                        <h3 className="text-xl font-bold text-base-content">Quick Actions</h3>
                    </div>
                    <div className="flex flex-col p-6 space-y-4">
                        <Link to="/dashboard/addVehicle">
                            <button className="btn btn-primary w-full gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                                <FaPlusCircle className="w-5 h-5" />
                                Add New Vehicle
                            </button>
                        </Link>
                        <Link to="/dashboard/myVehicle">
                            <button className="btn btn-outline btn-primary w-full gap-2 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                                <FaListAlt className="w-5 h-5" />
                                View My Vehicles
                            </button>
                        </Link>
                        <Link to="/dashboard/myBookings">
                            <button className="btn btn-outline btn-success w-full gap-2 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                                <FaTicketAlt className="w-5 h-5" />
                                Manage Bookings
                            </button>
                        </Link>
                        <Link to="/allVehicles">
                            <button className="btn btn-outline btn-info w-full gap-2 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                                <FaChartLine className="w-5 h-5" />
                                Browse All Vehicles
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;