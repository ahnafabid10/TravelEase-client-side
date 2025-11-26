import { Link } from 'react-router';


const TopCategories = () => {

    const latestVehicles =[
{
  "_id": "67b10a1fcf901a1bb1000029",
  "vehicleName": "Toyota Noah",
  "owner": "Wahidul Haque",
  "category": "Van",
  "pricePerDay": 115,
  "location": "Dhaka, Bangladesh",
  "availability": "Available",
  "description": "Comfortable 7-seater van for family trips.",
  "coverImage": "https://i.ibb.co.com/wrjQ7wtg/Gemini-Generated-Image-y9z0gxy9z0gxy9z0.…",
  "userEmail": "wahid@example.com",
  "createdAt": "2025-09-20T09:20:00+00:00",
  "categories": "Van"
},
{
  "_id": "67b10a1fcf901a1bb1000021",
  "vehicleName": "Mercedes GLC",
  "owner": "Tanvir Ahmed",
  "category": "SUV",
  "pricePerDay": 200,
  "location": "Dhaka, Bangladesh",
  "availability": "Available",
  "description": "Luxury SUV with leather interior and premium features.",
  "coverImage": "https://i.ibb.co.com/j9mKR3Wh/897.png",
  "userEmail": "tanvir@example.com",
  "createdAt": "2025-10-01T12:22:00+00:00",
  "categories": "SUV"
},
{
  "_id": "67b10a1fcf901a1bb1000019",
  "vehicleName": "Suzuki Swift",
  "owner": "Farhan Chowdhury",
  "category": "Sedan",
  "pricePerDay": 55,
  "location": "Dhaka, Bangladesh",
  "availability": "Available",
  "description": "Compact and affordable daily rental car.",
  "coverImage": "https://i.ibb.co.com/cKygR77d/Gemini-Generated-Image-a4timua4timua4ti.…",
  "userEmail": "farhan@example.com",
  "createdAt": "2025-10-12T10:00:00+00:00",
  "categories": "Sedan"
},
{
  "_id": "67b10a1fcf901a1bb1000020",
  "vehicleName": "BMW i3",
  "owner": "Mehedi Hasan",
  "category": "Electric",
  "pricePerDay": 140,
  "location": "Dhaka, Bangladesh",
  "availability": "Booked",
  "description": "Premium electric hatchback with modern features.",
  "coverImage": "https://i.ibb.co.com/wh6N6yBx/151.png",
  "userEmail": "mehedi@example.com",
  "createdAt": "2025-07-22T15:30:00+00:00",
  "categories": "Electric"
}
        
    ]

    return (
        <div className=" bg-gray-50 border-b-1 border-gray-400 dark:bg-gray-900  border-dashed p-6">
            <div className='max-w-[1440px] mx-auto'>
        <div className="max-w-screen-xl mx-auto">
                <h2 className="text-6xl text-center font-bold mb-6 p-5 dark:text-white text-gray-900">Top Categories</h2>
                <h2 className="text-xl text-center font-medium mb-6 dark:text-gray-300 text-gray-500">Find The Perfect Vehicle For Your Journey</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">{latestVehicles.map(recent => (
                        <div
                        key={recent._id} className="bg-white border border-gray-200 dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-200">
                    <div className="w-full h-56 bg-gray-100">
                    <img src={recent.coverImage} alt="" className="w-full h-full object-cover"/>
                </div>
                       
                            <h2 className="text-center text-xl  dark:text-white font-bold p-3 text-gray-900 mb-2 leading-tight">{recent.categories}</h2>
                     
                        {/* <Link >
                        <button to={`/latest-vehicles/${recent._id}`} className="btn-donate w-full rounded-md">View Details</button>
                        </Link> */}
                        </div>
                    ))}         
                </div>
                
            </div>
            <div className='justify-center my-10 text-center'>
                    <Link to="/allVehicles" className='btn-donate'>See More</Link>
                </div>
            </div>
            
        </div>
    );
};

export default TopCategories;
