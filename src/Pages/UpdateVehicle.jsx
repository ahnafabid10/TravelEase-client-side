import React from 'react';
import useAuth from '../Hooks/useAuth';
import useAxios from '../Hooks/useAxios';
import { toast, ToastContainer } from 'react-toastify';
import { useLoaderData } from 'react-router';
import { FaCar, FaUser, FaDollarSign, FaMapMarkerAlt, FaCalendarAlt, FaFileAlt, FaImage, FaEnvelope, FaCheckCircle, FaEdit } from 'react-icons/fa';

const UpdateVehicle = () => {
    const data = useLoaderData();
    const { user } = useAuth();
    const axiosInstance = useAxios();

    const handleAddVehicle = (e) => {
        e.preventDefault();
        const vehicleName = e.target.vehicleName.value;
        const owner = e.target.owner.value;
        const category = e.target.category.value;
        const pricePerDay = e.target.pricePerDay.value;
        const location = e.target.location.value;
        const availability = e.target.availability.value;
        const description = e.target.description.value;
        const coverImage = e.target.coverImage.value;
        const userEmail = e.target.userEmail.value;
        
        const newProduct = {
            vehicleName, owner, category, pricePerDay, location, 
            availability, description, coverImage, userEmail,
            currentUserEmail: user.email,
            currentUserName: user.displayName,
            createdAt: new Date().toISOString()
        };

        axiosInstance.put(`/allVehicles/${data._id}`, newProduct)
            .then(res => {
                console.log(res);
                if (res.data) {
                    toast.success('Vehicle updated successfully!', {
                        position: "top-center",
                        autoClose: 3000,
                    });
                }
            })
  
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200">
            {/* Animated Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-b border-primary/20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(177,31,36,0.1),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(177,31,36,0.05),transparent_50%)]"></div>
                
                <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-28 pt-40">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary to-primary/80 rounded-3xl mb-6 shadow-2xl transform hover:scale-110 hover:rotate-6 transition-all duration-500">
                            <FaEdit className="w-12 h-12 text-white" />
                        </div>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-base-content mb-4 tracking-tight bg-gradient-to-r from-base-content to-base-content/70 bg-clip-text">
                            Update Vehicle
                        </h1>
                        <p className="text-lg sm:text-xl text-base-content/70 max-w-2xl mx-auto leading-relaxed">
                            Modify your vehicle information and keep your listing up to date
                        </p>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="max-w-5xl mx-auto px-4 py-16 -mt-8">
                <form onSubmit={handleAddVehicle} className="space-y-8">
                    {/* Vehicle Information Card */}
                    <div className="bg-base-100 rounded-3xl shadow-2xl border border-base-300/50 overflow-hidden transform hover:shadow-3xl transition-all duration-500">
                        <div className="bg-gradient-to-r from-primary/15 via-primary/10 to-transparent px-8 py-6 border-b border-base-300/50">
                            <h2 className="text-2xl font-bold text-base-content flex items-center gap-3">
                                <div className="p-2 bg-primary/20 rounded-lg">
                                    <FaCar className="w-5 h-5 text-primary" />
                                </div>
                                Vehicle Information
                            </h2>
                        </div>
                        
                        <div className="p-8 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Vehicle Name */}
                                <div className="relative">
                                    <label className="label">
                                        <span className="label-text font-semibold text-base flex items-center gap-2">
                                            <FaCar className="w-4 h-4 text-primary" />
                                            Vehicle Name
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="vehicleName"
                                        defaultValue={data.vehicleName}
                                        placeholder="e.g., Toyota Corolla 2024"
                                        className="input input-bordered w-full focus:input-primary transition-all duration-300 hover:border-primary/50"
                                        required
                                    />
                                </div>

                                {/* Category */}
                                <div className="relative">
                                    <label className="label">
                                        <span className="label-text font-semibold text-base flex items-center gap-2">
                                            <FaCalendarAlt className="w-4 h-4 text-primary" />
                                            Category
                                        </span>
                                    </label>
                                    <select
                                        name="category"
                                        defaultValue={data.category}
                                        className="select select-bordered w-full focus:select-primary transition-all duration-300 hover:border-primary/50"
                                        required
                                    >
                                        <option value="">Choose category</option>
                                        <option>Sedan</option>
                                        <option>SUV</option>
                                        <option>Electric</option>
                                        <option>Van</option>
                                        <option>Luxury</option>
                                        <option>Compact</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Price */}
                                <div className="relative">
                                    <label className="label">
                                        <span className="label-text font-semibold text-base flex items-center gap-2">
                                            <FaDollarSign className="w-4 h-4 text-primary" />
                                            Price Per Day ($)
                                        </span>
                                    </label>
                                    <input
                                        type="number"
                                        name="pricePerDay"
                                        defaultValue={data.pricePerDay}
                                        placeholder="70"
                                        min="1"
                                        className="input input-bordered w-full focus:input-primary transition-all duration-300 hover:border-primary/50"
                                        required
                                    />
                                </div>

                                {/* Location */}
                                <div className="relative">
                                    <label className="label">
                                        <span className="label-text font-semibold text-base flex items-center gap-2">
                                            <FaMapMarkerAlt className="w-4 h-4 text-primary" />
                                            Location
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="location"
                                        defaultValue={data.location}
                                        placeholder="Dhaka, Bangladesh"
                                        className="input input-bordered w-full focus:input-primary transition-all duration-300 hover:border-primary/50"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Availability */}
                            <div className="relative">
                                <label className="label">
                                    <span className="label-text font-semibold text-base flex items-center gap-2">
                                        <FaCheckCircle className="w-4 h-4 text-primary" />
                                        Availability Status
                                    </span>
                                </label>
                                <select
                                    name="availability"
                                    defaultValue={data.availability}
                                    className="select select-bordered w-full focus:select-primary transition-all duration-300 hover:border-primary/50"
                                >
                                    <option>Available</option>
                                    <option>Booked</option>
                                </select>
                            </div>

                            {/* Description */}
                            <div className="relative">
                                <label className="label">
                                    <span className="label-text font-semibold text-base flex items-center gap-2">
                                        <FaFileAlt className="w-4 h-4 text-primary" />
                                        Description
                                    </span>
                                </label>
                                <textarea
                                    name="description"
                                    rows="4"
                                    defaultValue={data.description}
                                    placeholder="Describe your vehicle's features, condition, and any special amenities..."
                                    className="textarea textarea-bordered w-full resize-none focus:textarea-primary transition-all duration-300 hover:border-primary/50"
                                />
                            </div>

                            {/* Cover Image */}
                            <div className="relative">
                                <label className="label">
                                    <span className="label-text font-semibold text-base flex items-center gap-2">
                                        <FaImage className="w-4 h-4 text-primary" />
                                        Cover Image URL
                                    </span>
                                </label>
                                <input
                                    type="url"
                                    name="coverImage"
                                    defaultValue={data.coverImage}
                                    placeholder="https://i.ibb.co/your-image-url"
                                    className="input input-bordered w-full focus:input-primary transition-all duration-300 hover:border-primary/50"
                                />
                                <label className="label">
                                    <span className="label-text-alt text-base-content/60">Upload to imgbb.com or use any image hosting service</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Owner Information Card */}
                    <div className="bg-base-100 rounded-3xl shadow-2xl border border-base-300/50 overflow-hidden transform hover:shadow-3xl transition-all duration-500">
                        <div className="bg-gradient-to-r from-primary/15 via-primary/10 to-transparent px-8 py-6 border-b border-base-300/50">
                            <h2 className="text-2xl font-bold text-base-content flex items-center gap-3">
                                <div className="p-2 bg-primary/20 rounded-lg">
                                    <FaUser className="w-5 h-5 text-primary" />
                                </div>
                                Owner Information
                            </h2>
                        </div>
                        
                        <div className="p-8 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Owner Name */}
                                <div className="relative">
                                    <label className="label">
                                        <span className="label-text font-semibold text-base flex items-center gap-2">
                                            <FaUser className="w-4 h-4 text-primary" />
                                            Owner Name
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="owner"
                                        defaultValue={data.owner}
                                        placeholder="John Doe"
                                        className="input input-bordered w-full focus:input-primary transition-all duration-300 hover:border-primary/50"
                                        required
                                    />
                                </div>

                                {/* Owner Email */}
                                <div className="relative">
                                    <label className="label">
                                        <span className="label-text font-semibold text-base flex items-center gap-2">
                                            <FaEnvelope className="w-4 h-4 text-primary" />
                                            Owner Email
                                        </span>
                                    </label>
                                    <input
                                        type="email"
                                        name="userEmail"
                                        defaultValue={data.userEmail}
                                        placeholder="john@example.com"
                                        className="input input-bordered w-full focus:input-primary transition-all duration-300 hover:border-primary/50"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Submit Button */}
                    <div className="flex justify-center pt-8">
  <button
    type="submit"
    className="relative btn text-lg h-14 py-4 px-10 rounded-xl font-semibold text-white bg-[#B11F24] hover:bg-[#8F1820] transition-all duration-300 overflow-hidden group/btn flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105"
  >
    <span className="relative z-10 flex items-center justify-center gap-2">
      <FaEdit className="text-xl group-hover/btn:rotate-12 transition-transform duration-300" />
      Update Vehicle
    </span>

    {/* Shine animation */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
  </button>
</div>

                </form>
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

export default UpdateVehicle;