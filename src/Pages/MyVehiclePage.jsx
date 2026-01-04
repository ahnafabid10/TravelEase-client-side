import React, { useEffect, useState } from 'react';
import useAxios from '../Hooks/useAxios';
import useAuth from '../Hooks/useAuth';
import { Link} from 'react-router';
import { FaCar, FaMapMarkerAlt, FaDollarSign, FaCheckCircle, FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyVehiclePage = () => {
    const { user } = useAuth();
    const [vehicle, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);
    const axiosInstance = useAxios();
    // const data = useLoaderData()

    useEffect(() => {
        axiosInstance.get(`/myVehiclePage?email=${user.email}`)
            .then(res => {
                console.log(res.data);
                setVehicles(res.data);
                setLoading(false);
            });
    }, []);

    const handleDelete = (id) => {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#B11F24",
                cancelButtonColor: "#6B7280",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "Cancel"
            }).then((result) => {
                if (result.isConfirmed) {
                    axiosInstance.delete(`/allVehicles/${id}`)
                        .then(res => {
                            console.log(res.data);
                            if (res.data.deletedCount > 0) {
                        
                        const remaining = vehicle.filter(v => v._id !== id);
                        setVehicles(remaining);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your vehicle has been deleted.",
                                icon: "success",
                                confirmButtonColor: "#B11F24"
                            });
                }})
                    
                }
            });
        };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-200 via-base-100 to-base-200">
                <div className="text-center">
                    <span className="loading loading-bars loading-xl text-primary"></span>
                    <p className="mt-4 text-base-content/70 font-medium">Loading your vehicles...</p>
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
                            My Vehicles
                        </h1>
                        <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                            Manage and track all your listed vehicles in one place
                        </p>
                        <div className="mt-8 flex justify-center gap-4 flex-wrap">
                            <div className="stats shadow-lg bg-base-100 border border-base-300/50">
                                <div className="stat">
                                    <div className="stat-title text-base-content/70">Total Vehicles</div>
                                    <div className="stat-value text-primary">{vehicle.length}</div>
                                </div>
                            </div>
                            <div className="stats shadow-lg bg-base-100 border border-base-300/50">
                                <div className="stat">
                                    <div className="stat-title text-base-content/70">Available</div>
                                    <div className="stat-value text-success">{vehicle.filter(v => v.availability === 'Available').length}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Vehicles Grid */}
            <div className="max-w-7xl mx-auto px-4 py-16 -mt-8">
                {vehicle.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-base-300/50 rounded-full mb-6">
                            <FaCar className="w-12 h-12 text-base-content/40" />
                        </div>
                        <h3 className="text-2xl font-bold text-base-content mb-4">No Vehicles Yet</h3>
                        <p className="text-base-content/70 mb-8">Start listing your vehicles to begin earning</p>
                        <Link to="/add-vehicle">
                            <button className="btn btn-primary btn-lg gap-2 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                                <FaCar className="w-5 h-5" />
                                Add Your First Vehicle
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

                                        {/* Action Buttons */}
                                        <div className="flex items-center gap-3 pt-4">
  
  {/* View */}
  <Link to={`/vehicleDetails/${Vehicles._id}`} className="flex">
    <button className="btn btn-primary w-full gap-2 shadow-md hover:shadow-lg transition-all duration-300">
      <FaEye className="w-4 h-4" />
      View
    </button>
  </Link>

  {/* Update */}
  <Link to={`/UpdataVehicle/${Vehicles._id}`} className="flex-1">
    <button className="btn btn-outline btn-primary w-full gap-2 shadow-md hover:shadow-lg transition-all duration-300">
      <FaEdit className="w-4 h-4" />
      Update
    </button>
  </Link>

  {/* Delete */}
  <button
    onClick={() => handleDelete(Vehicles._id)}
    className="btn btn-outline btn-error btn-square shadow-md hover:shadow-lg transition-all duration-300"
  >
    <FaTrash className="w-4 h-4" />
  </button>

</div>

                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Add New Vehicle CTA */}
                        <div className="mt-16 text-center">
                            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-3xl p-12 border border-primary/20">
                                <FaCar className="w-16 h-16 text-primary mx-auto mb-4" />
                                <h3 className="text-3xl font-bold text-base-content mb-4">
                                    Want to list more vehicles?
                                </h3>
                                <p className="text-base-content/70 mb-8 max-w-2xl mx-auto">
                                    Expand your rental business by adding more vehicles to your fleet
                                </p>
                                <Link to="/addVehicle">
                                    <button className="btn btn-primary btn-lg gap-2 px-8 shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 group">
                                        <FaCar className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                                        Add New Vehicle
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

export default MyVehiclePage;