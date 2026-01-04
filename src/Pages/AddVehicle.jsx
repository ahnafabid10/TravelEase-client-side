import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { FaCar, FaUser, FaTag, FaDollarSign, FaMapMarkerAlt, FaCalendarCheck, FaImage, FaEnvelope, FaAlignLeft } from 'react-icons/fa';
import useAuth from '../Hooks/useAuth';
import useAxios from '../Hooks/useAxios';

const AddVehicle = () => {
    const { user, loading } = useAuth();
    const axiosInstance = useAxios();
    

    const handleAddVehicle = (e) => {
        e.preventDefault();
        const vehicleName = e.target.vehicleName.value;
        const ownerName = e.target.owner.value;
        const category = e.target.category.value;
        const pricePerDay = e.target.pricePerDay.value;
        const location = e.target.location.value;
        const availability = e.target.availability.value;
        const description = e.target.description.value;
        const coverImage = e.target.coverImage.value;
        const userEmail = e.target.userEmail.value;
        
        const newProduct = {
            vehicleName, 
            ownerName, 
            category, 
            pricePerDay, 
            location, 
            availability, 
            description, 
            coverImage, 
            userEmail,
            currentUserEmail: user.email,
            currentUserName: user.displayName,
            createdAt: new Date().toISOString()
        };

        axiosInstance.post('/allVehicles', newProduct)
            .then(data => {
                console.log(data);
                if(data.data) {
                    toast.success('Vehicle added successfully!', {
                        position: "top-center",
                        autoClose: 3000,
                    });
                }
            })
        e.target.reset();
    };

    if(loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-200 via-base-100 to-base-200">
                <div className="text-center">
                    <span className="loading loading-bars loading-lg text-primary w-20"></span>
                    <p className="mt-4 text-base-content/70 font-medium">Loading...</p>
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
        Add Your Vehicle
      </h1>

      <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
        List your vehicle for rental and start earning today
      </p>

      <div className="mt-8 flex justify-center gap-4 flex-wrap">
        <div className="stats shadow-lg bg-base-100 border border-base-300/50">
          <div className="stat">
            <div className="stat-title text-base-content/70">Easy Setup</div>
            <div className="stat-value text-primary">5 min</div>
          </div>
        </div>

        <div className="stats shadow-lg bg-base-100 border border-base-300/50">
          <div className="stat">
            <div className="stat-title text-base-content/70">Earning Potential</div>
            <div className="stat-value text-success">High</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

            <div className="pt-24 pb-16 px-4">
                <div className="max-w-4xl mx-auto">

                    {/* Form */}
                    <form onSubmit={handleAddVehicle} className="bg-base-100 rounded-3xl shadow-2xl overflow-hidden border border-base-300/50 transform hover:shadow-3xl transition-all duration-500">
                        {/* Form Header */}
                        <div className="bg-gradient-to-r from-primary to-primary/80 p-8">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                <FaCar className="w-6 h-6" />
                                Vehicle Information
                            </h2>
                            <p className="text-white/90 mt-2">Provide accurate details to attract more renters</p>
                        </div>
                        
                        <fieldset>
                            <div className="p-8 space-y-6">
                                {/* Row 1 */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold flex items-center gap-2">
                                                <FaCar className="text-primary" />
                                                Vehicle Name
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            name="vehicleName"
                                            placeholder="e.g., Toyota Corolla 2023"
                                            className="input input-bordered w-full focus:input-primary hover:border-primary/50 transition-all"
                                            required
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold flex items-center gap-2">
                                                <FaUser className="text-primary" />
                                                Owner Name
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            name="owner"
                                            placeholder="e.g., John Doe"
                                            className="input input-bordered w-full focus:input-primary hover:border-primary/50 transition-all"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Row 2 */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold flex items-center gap-2">
                                                <FaTag className="text-primary" />
                                                Category
                                            </span>
                                        </label>
                                        <select
                                            name="category"
                                            className="select select-bordered w-full focus:select-primary hover:border-primary/50 transition-all"
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

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold flex items-center gap-2">
                                                <FaDollarSign className="text-primary" />
                                                Price Per Day ($)
                                            </span>
                                        </label>
                                        <input
                                            type="number"
                                            name="pricePerDay"
                                            placeholder="e.g., 70"
                                            min="1"
                                            className="input input-bordered w-full focus:input-primary hover:border-primary/50 transition-all"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Row 3 */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold flex items-center gap-2">
                                                <FaMapMarkerAlt className="text-primary" />
                                                Location
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            name="location"
                                            placeholder="e.g., Dhaka, Bangladesh"
                                            className="input input-bordered w-full focus:input-primary hover:border-primary/50 transition-all"
                                            required
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold flex items-center gap-2">
                                                <FaCalendarCheck className="text-primary" />
                                                Availability Status
                                            </span>
                                        </label>
                                        <select
                                            name="availability"
                                            className="select select-bordered w-full focus:select-primary hover:border-primary/50 transition-all"
                                        >
                                            <option>Available</option>
                                            <option>Booked</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold flex items-center gap-2">
                                            <FaAlignLeft className="text-primary" />
                                            Description
                                        </span>
                                    </label>
                                    <textarea
                                        name="description"
                                        rows="4"
                                        placeholder="Describe your vehicle features, condition, and any special amenities..."
                                        className="textarea textarea-bordered w-full focus:textarea-primary hover:border-primary/50 transition-all resize-none"
                                    />
                                </div>

                                {/* Cover Image */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold flex items-center gap-2">
                                            <FaImage className="text-primary" />
                                            Cover Image URL
                                        </span>
                                    </label>
                                    <input
                                        type="url"
                                        name="coverImage"
                                        placeholder="https://i.ibb.co/..."
                                        className="input input-bordered w-full focus:input-primary hover:border-primary/50 transition-all"
                                    />
                                    <label className="label">
                                        <span className="label-text-alt text-base-content/60">
                                            Upload to imgbb or any image hosting service
                                        </span>
                                    </label>
                                </div>

                                {/* Owner Email */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold flex items-center gap-2">
                                            <FaEnvelope className="text-primary" />
                                            Owner Email
                                        </span>
                                    </label>
                                    <input
                                        type="email"
                                        name="userEmail"
                                        placeholder="john@example.com"
                                        className="input input-bordered w-full focus:input-primary hover:border-primary/50 transition-all"
                                        required
                                    />
                                </div>

                                <div className="divider"></div>

                                {/* CTA Button */}
                                <div className="form-control">
                                    <button
                                        type="submit"
                                        className="relative btn text-lg h-14 py-4 px-6 rounded-xl font-semibold text-white bg-[#B11F24] hover:bg-[#8F1820] transition-all duration-300 overflow-hidden group/btn flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105"
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            <FaCar className="text-xl group-hover/btn:rotate-12 transition-transform duration-300" />
                                            Add Vehicle to Listing
                                        </span>

                                        {/* Shine animation */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                                    </button>
                                </div>
                            </div>
                        </fieldset>
                    </form>

                    {/* Footer Help Text */}
                    <div className="mt-8 text-center">
                        <p className="text-base-content/60">
                            Need help? Contact our support team for assistance with your listing.
                        </p>
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

export default AddVehicle;