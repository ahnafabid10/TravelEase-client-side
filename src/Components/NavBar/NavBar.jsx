import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthContext';
import { toast } from 'react-toastify';

const NavBar = () => {

  const {user, signOutUser} = use(AuthContext)

  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut =() =>{
    signOutUser()
    .then(
      toast("Sign Out Successfully")
    )
    .catch(error =>{
      console.log(error)
    })
  }

  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/allVehicles" >All Vehicles</NavLink>
      {
        user && <>
        <NavLink to="/addVehicle" >Add Vehicles</NavLink>
        <NavLink to="/myVehicles" >My Vehicles</NavLink>
        <NavLink to="/myBookings" >My Bookings</NavLink>
        </>
      }
    </>
  );

  return (
    <div className="fixed bg-transparent p-5 top-0 w-full z-50">
      <nav className="max-w-[1440px] mx-auto bg-black/30 backdrop-blur-md text-white rounded-2xl p-1 md:p-2 border shadow-lg">
        <div className="flex justify-between items-center h-16 px-4">
          <div className="flex items-center space-x-2">
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="btn btn-ghost hover:bg-gray-800 p-2 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isOpen
                        ? 'M6 18L18 6M6 6l12 12'
                        : 'M4 6h16M4 12h16M4 18h16'
                    }
                  />
                </svg>
              </button>
            </div>
            <Link to="/" className="flex items-center text-2xl font-bold ml-2 hover:text-gray-300 transition-colors">TravelEase</Link>
          </div>
          <div className="lg:hidden flex items-center">
            <Link to="/login" className="text-white text-xl p-2 hover:text-gray-300"><FaUser /></Link>
          </div>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-lg space-x-6">{links}</ul>
          </div>
          <div className="hidden lg:flex items-center">
            {
              user ? 
              <button onClick={handleSignOut} className="btn-donate flex items-center space-x-2 text-center transition-colors"><span>Sign Out</span></button> 
              :
              <Link to='/login' className="btn-donate flex items-center space-x-2 text-center transition-colors"><FaUser /> <span>Login</span></Link>
            }
            
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden mt-2">
            <ul className="menu menu-sm p-2 shadow-lg bg-black/30 backdrop-blur-md text-white rounded-lg space-y-2">
              {links}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
