import React, { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { FaUser, FaCar, FaTimes, FaBars, FaMoon, FaSun, FaSignOutAlt, FaTachometerAlt } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';

const NavBar = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const { user, signOutUser } = use(AuthContext);
    const [isOpen, setIsOpen] = useState(false);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                toast.success("Logged out successfully!", {
                    position: "top-center",
                    autoClose: 2000,
                });
            })
            .catch(error => {
                console.log(error);
                toast.error("Logout failed. Please try again.");
            });
    };

    useEffect(() => {
        const html = document.querySelector("html");
        html.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleTheme = (checked) => {
        setTheme(checked ? "dark" : "light");
    };

    const navLinkClass = ({ isActive }) =>
        `relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
            isActive
                ? "text-primary font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
                : "text-white hover:text-primary hover:bg-white/10"
        }`;

    const links = (
        <>
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/allVehicles" className={navLinkClass}>All Vehicles</NavLink>
            <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
            <NavLink to="/contactUs" className={navLinkClass}>Contact Us</NavLink>
            {user && (
                <>
                    <NavLink to="/addVehicle" className={navLinkClass}>Add Vehicle</NavLink>
                    <NavLink to="/myVehiclePage" className={navLinkClass}>My Vehicles</NavLink>
                    <NavLink to="/myBookings" className={navLinkClass}>My Bookings</NavLink>
                </>
            )}
        </>
    );

    return (
        <div className="fixed bg-transparent p-3 md:p-5 w-full top-0 z-50">
            <nav className="max-w-[1440px] mx-auto bg-black/40 backdrop-blur-xl text-white rounded-2xl border border-white/20 shadow-2xl">
                <div className="flex justify-between items-center h-16 px-4 md:px-6">
                    {/* Left Side - Logo & Mobile Menu */}
                    <div className="flex items-center gap-4">
                        {/* Mobile Menu Toggle */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="btn btn-ghost btn-circle hover:bg-white/10 transition-all duration-300"
                            >
                                {isOpen ? (
                                    <FaTimes className="h-6 w-6" />
                                ) : (
                                    <FaBars className="h-6 w-6" />
                                )}
                            </button>
                        </div>

                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <FaCar className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-2xl font-bold hidden sm:block group-hover:text-primary transition-colors duration-300">
                                TravelEase
                            </span>
                        </Link>
                    </div>

                    {/* Center - Desktop Navigation Links */}
                    <div className="hidden lg:flex">
                        <ul className="flex items-center gap-2">{links}</ul>
                    </div>

                    {/* Right Side - Theme Toggle & User Menu */}
                    <div className="flex items-center gap-3">
                        {/* Theme Toggle */}
                        <label className="swap swap-rotate btn btn-ghost btn-circle hover:bg-white/10 transition-all duration-300">
                            <input
                                type="checkbox"
                                onChange={(e) => handleTheme(e.target.checked)}
                                checked={theme === "dark"}
                            />
                            <FaSun className="swap-off w-5 h-5" />
                            <FaMoon className="swap-on w-5 h-5" />
                        </label>

                        {/* User Menu */}
                        {user ? (
//                             <div className="dropdown dropdown-end">
//   <div
//     tabIndex={0}
//     role="button"
//     className="btn btn-ghost btn-circle avatar hover:ring-2 hover:ring-primary transition-all duration-300"
//   >
//     <div className="w-10 h-10 rounded-full ring-2 ring-white/20 ring-offset-2 ring-offset-base-100">
//       <img src={user.photoURL} alt={user.displayName} />
//     </div>
//   </div>

//   <ul
//     tabIndex={0}
//     className="dropdown-content z-[100] menu p-4 shadow-2xl bg-base-100 rounded-2xl w-64 mt-3 border border-base-300 space-y-2"
//   >
//     {/* User Info */}
//     <li className="pointer-events-none px-4 py-2 border-b border-base-300">
//       <div className="flex items-center gap-3">
//         <div className="avatar">
//           <div className="w-12 h-12 rounded-full ring-2 ring-primary">
//             <img src={user.photoURL} alt={user.displayName} />
//           </div>
//         </div>
//         <div>
//           <p className="font-bold text-base-content">{user.displayName}</p>
//           <p className="text-sm text-base-content/60 truncate">{user.email}</p>
//         </div>
//       </div>
//     </li>

//     {/* Dashboard Link */}
//     <li>
//       <Link
//         to="/dashboard"
//         className="flex items-center gap-3 px-3 py-2 hover:bg-primary/10 hover:text-primary transition-all duration-300 rounded-lg"
//       >
//         <FaTachometerAlt className="w-4 h-4" />
//         <span className="font-medium">Dashboard</span>
//       </Link>
//     </li>

//     <div className="divider my-1"></div>

//     {/* Logout Button */}
//     <li>
//       <button
//         onClick={handleSignOut}
//         className="flex items-center gap-3 px-3 py-2 text-error hover:bg-error/10 transition-all duration-300 rounded-lg font-semibold"
//       >
//         <FaSignOutAlt className="w-4 h-4" />
//         <span>Log Out</span>
//       </button>
//     </li>
//   </ul>
// </div>
              <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="m-1">
    <img
      src={user.photoURL}
      className="w-[45px] h-[45px] rounded-full cursor-pointer border"
      alt="user"
    />
  </div>

<ul
  tabIndex={0}
  className="dropdown-content z-[100] menu p-2 shadow mx- bg-base-100 rounded-box w-35 gap-2 text-base-content"
>
  <li className="pointer-events-none text-gray-400 hover:text-base-content font-semibold px-2">
    {user.displayName}
  </li>
  <li>
    <Link
      to="/dashboard/profile"
      className="flex items-center gap-2 px-3 py-2 hover:bg-primary/10 hover:text-primary transition-all duration-300 rounded-lg"
    >
      <span className="font-medium">Profile</span>
    </Link>
  </li>
  <li>
    <Link
      to="/dashboard"
      className="flex items-center gap-2 px-3 py-2 hover:bg-primary/10 hover:text-primary transition-all duration-300 rounded-lg"
    >
      <span className="font-medium">Dashboard</span>
    </Link>
  </li>
  <li>
    <button
      onClick={handleSignOut}
      className="text-red-600 font-bold"
    >
      Log Out
    </button>
  </li>
</ul>

</div>

                        ) : (
                            <Link
                                to="/login"
                                className="btn btn-primary gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hidden sm:flex"
                            >
                                <FaUser className="w-4 h-4" />
                                <span>Login</span>
                            </Link>
                        )}

                        {/* Mobile Login Icon */}
                        {!user && (
                            <Link
                                to="/login"
                                className="btn btn-ghost btn-circle hover:bg-white/10 transition-all duration-300 sm:hidden"
                            >
                                <FaUser className="w-5 h-5" />
                            </Link>
                        )}
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <div className="lg:hidden px-4 pb-4">
                        <ul className="menu bg-base-100/95 backdrop-blur-md rounded-2xl shadow-xl border border-base-300 p-3 space-y-1">
                            {user ? (
                                <>
                                    <li className="pointer-events-none px-4 py-2 border-b border-base-300 mb-2">
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="w-10 h-10 rounded-full ring-2 ring-primary">
                                                    <img src={user.photoURL} alt={user.displayName} />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="font-bold text-base-content text-sm">{user.displayName}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <NavLink to="/" className="text-base-content hover:bg-primary/10 hover:text-primary rounded-lg">
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/allVehicles" className="text-base-content hover:bg-primary/10 hover:text-primary rounded-lg">
                                            All Vehicles
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/addVehicle" className="text-base-content hover:bg-primary/10 hover:text-primary rounded-lg">
                                            Add Vehicle
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/myVehiclePage" className="text-base-content hover:bg-primary/10 hover:text-primary rounded-lg">
                                            My Vehicles
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/myBookings" className="text-base-content hover:bg-primary/10 hover:text-primary rounded-lg">
                                            My Bookings
                                        </NavLink>
                                    </li>
                                    <li>
                                        <Link to="/dashboard" className="text-base-content hover:bg-primary/10 hover:text-primary rounded-lg">
                                            <FaTachometerAlt className="w-4 h-4" />
                                            Dashboard
                                        </Link>
                                    </li>
                                    <div className="divider my-1"></div>
                                    <li>
                                        <button
                                            onClick={handleSignOut}
                                            className="text-error hover:bg-error/10 rounded-lg font-semibold"
                                        >
                                            <FaSignOutAlt className="w-4 h-4" />
                                            Log Out
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <NavLink to="/" className="text-base-content hover:bg-primary/10 hover:text-primary rounded-lg">
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/allVehicles" className="text-base-content hover:bg-primary/10 hover:text-primary rounded-lg">
                                            All Vehicles
                                        </NavLink>
                                    </li>
                                    <div className="divider my-1"></div>
                                    <li>
                                        <Link
                                            to="/login"
                                            className="btn btn-primary gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
                                        >
                                            <FaUser className="w-4 h-4" />
                                            Login
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                )}
            </nav>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme={theme}
            />
        </div>
    );
};

export default NavBar;