import React, { useState, useEffect } from 'react';
import { FaCar, FaBars, FaTimes, FaHome, FaPlusCircle, FaTicketAlt, FaSignOutAlt, FaBell, FaCog, FaUserCircle, FaMoon, FaSun } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router';
import useAuth from '../Hooks/useAuth';
import { toast, ToastContainer } from 'react-toastify';
import useAxios from '../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';

const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [theme, setTheme] = useState('light');
    const { user, signOutUser} = useAuth()
    const axiosInstance= useAxios()
const {data: userProfile = []} = useQuery({
  queryKey: ['user', user?.email],
  queryFn: async()=>{
    const res = await axiosInstance.get(`/user?email=${user.email}`);
    return res.data;
  },
  enabled: !!user?.email
});

        const handleSignOut = () => {
            signOutUser()
                .then(() => {
                    toast("Logged out successfully!");
                })
                .catch(error => {
                    console.log(error);
                    toast.error("Logout failed. Please try again.");
                });
        };

    // Load theme from localStorage on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    // Toggle theme function
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const navClass = ({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
         ${isActive 
            ? "bg-primary text-white font-semibold shadow-lg" 
            : "text-base-content hover:bg-base-200"}`;

    return (
        <div className="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200">
            {/* Top Navigation Bar */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-base-100 border-b border-base-300 shadow-lg">
                <div className="flex items-center justify-between px-4 py-4">
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="btn btn-ghost btn-circle hover:bg-primary/10 transition-all duration-300"
                        >
                            {sidebarOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
                        </button>
                        <div className="flex items-center gap-3">
                            <Link to={'/'} className='flex gap-3 items-center'>
                                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
                                    <FaCar className="w-5 h-5 text-white" />
                                </div>
                                <h1 className="text-2xl font-bold text-primary hidden sm:block">TravelEase</h1>
                            </Link>
                        </div>
                    </div>

                    {/* Right Side - Theme Toggle, Notifications & Profile */}
                    <div className="flex items-center gap-3">
                        {/* Theme Toggle Button */}
                        <button 
                            onClick={toggleTheme}
                            className="btn btn-ghost btn-circle hover:bg-primary/10 transition-all duration-300"
                            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                        >
                            {theme === 'light' ? (
                                <FaMoon className="w-5 h-5" />
                            ) : (
                                <FaSun className="w-5 h-5" />
                            )}
                        </button>

                        
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full ring-2 ring-offset-2">
                                    <img src={userProfile[0]?.photo || user?.photoURL} alt="Profile" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-100 rounded-box w-52 border border-base-300">
                                <li className="menu-title">
                                    <span>{userProfile[0]?.name || user?.displayName}</span>
                                </li>
                                <li><Link to={'/dashboard/profile'}><FaUserCircle className="w-4 h-4" /> Profile</Link></li>


                                <li>
                                    <a onClick={toggleTheme}>
                                        {theme === 'light' ? <FaMoon className="w-4 h-4" /> : <FaSun className="w-4 h-4" />}
                                        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                                    </a>
                                </li>
                                <li><a onClick={handleSignOut} className="text-error"><FaSignOutAlt className="w-4 h-4" /> Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex pt-[73px]">
                {/* Sidebar */}
                <aside className={`fixed left-0 top-[73px] bottom-0 pt-3 bg-base-100 border-r border-base-300 shadow-xl transition-all duration-300 z-40 overflow-hidden ${sidebarOpen ? 'w-64' : 'w-0 -translate-x-full opacity-0'}`}>
                    <nav className="px-4 space-y-2 overflow-y-auto h-full">
                        <NavLink to="/dashboard" end className={navClass}>
                            <FaHome className="w-5 h-5" />
                            <span>Dashboard</span>
                        </NavLink>

                        <NavLink to="/dashboard/myVehicle" className={navClass}>
                            <FaCar className="w-5 h-5" />
                            <span>My Vehicles</span>
                        </NavLink>

                        <NavLink to="/dashboard/addVehicle" className={navClass}>
                            <FaPlusCircle className="w-5 h-5" />
                            <span>Add Vehicle</span>
                        </NavLink>

                        <NavLink to="/dashboard/myBookings" className={navClass}>
                            <FaTicketAlt className="w-5 h-5" />
                            <span>My Bookings</span>
                        </NavLink>

                        <div className="divider"></div>

                        <button onClick={handleSignOut} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-error/10 text-error transition-all duration-300 w-full">
                            <FaSignOutAlt className="w-5 h-5" />
                            <span>Logout</span>
                        </button>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className={`flex-1 p-6 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
                    <Outlet />

                    {/* Footer CTA */}
                    <div className="mt-8 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-3xl p-8 border border-primary/20 text-center">
                        <h3 className="text-2xl font-bold text-base-content mb-2">Need Help?</h3>
                        <p className="text-base-content/70 mb-6">Our support team is here to assist you with any questions.</p>
                        <button className="btn btn-primary gap-2 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                            Contact Support
                        </button>
                    </div>
                </main>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default DashboardLayout;