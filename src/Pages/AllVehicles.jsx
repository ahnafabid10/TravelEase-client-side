import React, { useEffect, useState } from 'react';
import useAxios from '../Hooks/useAxios';
import { Link } from 'react-router';

const AllVehicles = () => {
    const axiosInstance = useAxios();
    const [allVehicles, setAllVehicles] = useState([]);
    // const [filter, setFilter] = useState([]);
    // const [location, setLocation] = useState('')
    // const [sort, setSort] = useState('')
    // const [category, setCategory] = useState('')

    useEffect(() => {
        axiosInstance.get(`/allVehicles`)
            .then(res => {
                console.log(res.data);
                setAllVehicles(res.data);
            })
    }, []);


    return (
        <div>
            <div className=" bg-gray-50 pt-40 p-6">
            <div className='max-w-[1440px] mx-auto'>
        <div className="max-w-screen-xl mx-auto">
                <h2 className="text-6xl text-center font-bold mb-6 p-5 text-gray-900">All Vehicles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allVehicles.map(Vehicles => (
                        <div
                        key={Vehicles._id} className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-200">
                    <div className="w-full h-56 bg-gray-100">
                    <img src={Vehicles.coverImage} alt="" className="w-full h-full object-cover"/>
                </div>
                       <div className="p-4">
                        <div className='flex text-green-700  justify-between items-center py-3'>
                            <h2 className="text-md font-medium text-gray-900 mb-2 leading-tight">{Vehicles.vehicleName}</h2>
                            <div className="badge badge-success">
  <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></circle><polyline points="7 13 10 16 17 8" fill="none" stroke="currentColor" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></polyline></g></svg>
{Vehicles.availability}
</div>
                        </div>
                     
                     <p className='text-gray-700'>{Vehicles.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-700 mb-4">
                         <span className="font-bold text-2xl text-black">${Vehicles.pricePerDay}</span>
                        <span className="text-gray-500">{Vehicles.location}</span>
                        </div>
                        <Link to={`/vehicleDetails/${Vehicles._id}`}>
                        <button  className="btn-donate w-full rounded-md">View Details</button>
                        </Link>
                        
                        
                
                            </div>
                        </div>
                    ))}         
                </div>
                
            </div>
            {/* <div className='justify-center my-10 text-center'>
                    <Link to="/allVehicles" className='btn-donate '>See More</Link>
                </div> */}
            </div>
            
        </div>
        </div>
    );
};

export default AllVehicles;