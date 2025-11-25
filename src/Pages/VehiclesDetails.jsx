import React from 'react';
import { Link, useLoaderData } from 'react-router';

const VehiclesDetails = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className="bg-base-200 py-40 px-4">
  <div className="max-w-6xl mx-auto hero-content flex flex-col lg:flex-row gap-10">

    <div className="w-full lg:w-1/2 flex justify-center">
      <img
        src={data.coverImage}
        className="w-full max-w-sm rounded-xl shadow-xl border object-cover"
        alt="Vehicle"
      />
    </div>

    <div className="w-full lg:w-1/2 space-y-5">

      <h1 className="text-3xl md:text-4xl font-bold text-primary">
        {data.vehicleName}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        <p className="text-gray-700">
          <span className="font-semibold">Category:</span> {data.category}
        </p>

        <p className="text-gray-700">
          <span className="font-semibold">Price Per Day:</span> {data.pricePerDay}
        </p>

        <p className="text-gray-700">
          <span className="font-semibold">Location:</span> {data.location}
        </p>

        <p className="text-gray-700">
          <span className="font-semibold">Availability:</span> {data.
availability}
        </p>

      </div>

      <p className="text-gray-600">
        <span className="font-semibold">Description:</span> {data.description}
      </p>

      <div className="p-4 bg-white shadow rounded-xl border">
        <p className="font-semibold text-gray-800">Owner Information</p>
        <p className="text-gray-700">
          <span className="font-semibold">Name:</span> {data.owner}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Email:</span>{data.userEmail}
        </p>
      </div>

      <div className="p-4 bg-white shadow rounded-xl border">
        <p className="font-semibold text-gray-800">Added By</p>
        <p className="text-gray-700">
          <span className="font-semibold">Name:</span> {
data.currentUserName
}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Email:</span> {data.
currentUserEmail}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Created At:</span> {data.createdAt}
        </p>
      </div>
            <div className='flex flex-col-2 md:flex-col-3 gap-5'>
            <button className="btn-donate w-full sm:w-auto">Book Now</button>
            <Link to={`/UpdataVehicle/${data._id}`}>
            <button className="btn-donate w-full sm:w-auto">Update</button>
            </Link>
      
      <button className="btn-donate w-full sm:w-auto">Delete</button>
            </div>
      
    </div>
  </div>
</div>

    );
};

export default VehiclesDetails;