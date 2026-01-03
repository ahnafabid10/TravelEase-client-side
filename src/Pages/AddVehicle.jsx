import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { FaCar, FaUser, FaTag, FaDollarSign, FaMapMarkerAlt, FaCalendarCheck, FaImage, FaEnvelope, FaAlignLeft } from 'react-icons/fa';
import useAuth from '../Hooks/useAuth';
import useAxios from '../Hooks/useAxios';
// import { useQuery } from '@tanstack/react-query';

const AddVehicle = () => {
    const {user, loading} = useAuth()
    const axiosInstance = useAxios()
    // const {} = useQuery({
    //   queryKey: ['addVehicles', user?.email],
    //   queryFn: async()=>{
    //     const res = axiosInstance.get(`/`)
    //   }
    // })

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
                    toast.success('Vehicle added successfully');
                }
            });
    };

    if(loading){
      return <div className="min-h-screen flex items-center justify-center bg-base-200">
  <span className="loading loading-bars loading-xl text-primary"></span>
</div>

    }
    
    return (
        <div className="min-h-screen bg-base-200">
            <div className="pt-24 pb-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center my-12">
                      <div className="mb-12">
  <div className="bg-base-100 border border-base-300 rounded-2xl shadow-md p-8 text-center">
    <h1 className="text-4xl sm:text-5xl font-bold text-base-content mb-4">
      Add Your Vehicle
    </h1>
    <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
      List your vehicle for rental and start earning today. Fill in the details below to get started.
    </p>
  </div>
</div>

                        
                    </div>

                    <form onSubmit={handleAddVehicle} className="bg-base-100 rounded-2xl shadow-2xl overflow-hidden">
                      <div className="bg-gradient-to-r from-primary to-primary/80 p-8">
                            <h2 className="text-2xl font-bold text-white">Vehicle Information</h2>
                            <p className="text-white/90 mt-2">Provide accurate details to attract more renters</p>
                        </div>
                      <fieldset>
                        
                        <div className="p-8 space-y-6">
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
                                        className="input input-bordered w-full focus:input-primary transition-all"
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
                                        className="input input-bordered w-full focus:input-primary transition-all"
                                        required
                                    />
                                </div>
                            </div>

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
                                        className="select select-bordered w-full focus:select-primary transition-all"
                                        required
                                    >
                                        <option value="">Choose category</option>
                                        <option>Sedan</option>
                                        <option>SUV</option>
                                        <option>Electric</option>
                                        <option>Van</option>
                                    </select>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold flex items-center gap-2">
                                            <FaDollarSign className="text-primary" />
                                            Price Per Day
                                        </span>
                                    </label>
                                    <input
                                        type="number"
                                        name="pricePerDay"
                                        placeholder="e.g., 70"
                                        min="1"
                                        className="input input-bordered w-full focus:input-primary transition-all"
                                        required
                                    />
                                </div>
                            </div>

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
                                        className="input input-bordered w-full focus:input-primary transition-all"
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
                                        className="select select-bordered w-full focus:select-primary transition-all"
                                    >
                                        <option>Available</option>
                                        <option>Booked</option>
                                    </select>
                                </div>
                            </div>

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
                                    className="textarea textarea-bordered w-full focus:textarea-primary transition-all resize-none"
                                />
                            </div>

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
                                    className="input input-bordered w-full focus:input-primary transition-all"
                                />
                                <label className="label">
                                    <span className="label-text-alt text-base-content/60">
                                        Upload to imgbb or any image hosting service
                                    </span>
                                </label>
                            </div>

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
                                    className="input input-bordered w-full focus:input-primary transition-all"
                                    required
                                />
                            </div>

                            <div className="divider"></div>

                            <div className="form-control">
  <button
    type="submit"
    className="relative btn text-lg h-14 py-4 px-6 rounded-xl font-semibold text-white bg-[#B11F24] hover:bg-[#8F1820] transition-all duration-300 overflow-hidden group/btn flex items-center justify-center gap-3"
  >
    <span className="relative z-10 flex items-center justify-center gap-2">
      <FaCar className="text-xl" />
      Add Vehicle to Listing
    </span>

    {/* Shine animation */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
  </button>
</div>

                        </div>
                      </fieldset>
                      

                        
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-base-content/60">
                            Need help? Contact our support team for assistance with your listing.
                        </p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddVehicle;