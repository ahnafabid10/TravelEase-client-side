import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import useAuth from '../Hooks/useAuth';
import useAxios from '../Hooks/useAxios';

const AddVehicle = () => {

    const { user } = useAuth();
    const axiosInstance = useAxios()

    const handleAddVehicle =(e)=>{
        e.preventDefault()
        const vehicleName = e.target.vehicleName.value
        const ownerName = e.target.owner.value
        const category = e.target.category.value
        const pricePerDay = e.target.pricePerDay.value
        const location = e.target.location.value
        const availability = e.target.availability.value
        const description = e.target.description.value
        const coverImage = e.target.coverImage.value
        const userEmail = e.target.userEmail.value
        
        const newProduct = {vehicleName, ownerName, category, pricePerDay, location, availability, description, coverImage, userEmail ,
            currentUserEmail: user.email,
            currentUserName : user.displayName,
            createdAt: new Date().toISOString()
        }

        axiosInstance.post('/allVehicles', newProduct)
        .then(data=>{
            console.log(data)
            if(data.data){
                 toast('Vehicle added successfully')
            }
        })

    }
    
    return (
        <div className=''>
            <div className=" bg-base-200 pt-40 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-6xl font-bold text-center mb-8">Add Vehicle</h1>

        <form onSubmit={handleAddVehicle} className="space-y-6 bg-base-100 p-8 rounded-xl shadow-lg">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Vehicle Name</span>
            </label>
            <input
              type="text"
              name="vehicleName"
              placeholder="Toyota Corolla"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Owner Name</span>
            </label>
            <input
              type="text"
              name="owner"
              placeholder="John Doe"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Category</span>
            </label>
            <select
              name="category"
              className="select select-bordered w-full"
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
              <span className="label-text font-semibold">Price Per Day ($)</span>
            </label>
            <input
              type="number"
              name="pricePerDay"
              placeholder="70"
              min="1"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Location</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="Dhaka, Bangladesh"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Availability</span>
            </label>
            <select
              name="availability"
              className="select select-bordered w-full"
            >
              <option>Available</option>
              <option>Booked</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Description</span>
            </label>
            <textarea
              name="description"
              rows="4"
              placeholder="Comfortable 5-seater with A/C and GPS."
              className="textarea textarea-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Cover Image URL (imgbb or any)</span>
            </label>
            <input
              type="url"
              name="coverImage"
              placeholder="https://i.ibb.co/..."
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Owner Email</span>
            </label>
            <input
              type="email"
              name="userEmail"
              placeholder="john@example.com"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control mt-8">
            <button  type="submit" className="btn-donate w-full">Add A Vehicle</button>
          </div>
        </form>
      </div>
    </div>
    <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddVehicle;