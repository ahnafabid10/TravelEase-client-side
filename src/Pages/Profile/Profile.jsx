import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import useAxios from '../../Hooks/useAxios';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';


const Profile = () => {
    const {register, handleSubmit,} = useForm()
    const { user } = useAuth();
    const axiosInstance= useAxios()
const {data: userProfile = [], refetch} = useQuery({
  queryKey: ['user', user?.email],
  queryFn: async()=>{
    const res = await axiosInstance.get(`/user?email=${user.email}`);
    return res.data;
  },
  enabled: !!user?.email
});



const handleChangeName = async (data) => {
  try {
    let photoURL = userProfile[0]?.photo;

    // Upload new image if user selected one
    if (data.photo.length > 0) {
      const formData = new FormData();
      formData.append("image", data.photo[0]);

      const imgRes = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Image_hosting_key}`,
        formData
      );

      photoURL = imgRes.data.data.url;
    }

    // Update user in database
    await axiosInstance.patch(`/user?email=${user.email}`, {
      name: data.name,
      photo: photoURL,
    });

    refetch();
    toast("Profile updated successfully!");

  } catch (error) {
    console.error(error);
    toast("Update failed");
  }
};


    
    console.log(`userProfileData`, userProfile)

    return (
        <div>
           
  <div className="min-h-screen bg-base-200 pt-24 px-4">
    <div className="max-w-4xl mx-auto bg-base-100 shadow-xl rounded-xl p-8">

      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary">
          <img
            src={userProfile[0]?.photo || user.photoURL || "https://i.ibb.co/2kR5Q6m/user.png"}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-3xl font-bold text-primary flex items-center gap-2">
            <FaRegUserCircle />
            {userProfile[0]?.name || user.displayName || "No Name"}
          </h2>

          <p className="flex items-center gap-2 text-gray-500 mt-2">
            <MdEmail />
            {user?.email}
          </p>
        </div>
      </div>

      {/* Update Form */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4">Update Profile</h3>

        <form onSubmit={handleSubmit(handleChangeName)} className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <input
            type="text"
            defaultValue={userProfile[0]?.name}
            {...register("name")}
            className="input input-bordered w-full"
            placeholder="Your Name"
          />

          <input
            type="file"
            {...register("photo")}
            className="file-input file-input-bordered w-full"
          />

          <button className="btn btn-primary md:col-span-2">
            Save Changes
          </button>

        </form>
        <p className='italic font-bold pt-5'>Note: You can change the name and photo using the demo account.</p>
      </div>

    </div>
  </div>
<ToastContainer></ToastContainer>

        </div>
     
    );
};

export default Profile;