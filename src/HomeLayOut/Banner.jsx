import React from 'react';
import carImg from '../assets/blake-meyer-CRNbHjNaljo-unsplash.jpg'
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div>
            <div className="relative w-full h-screen">
                        <img
                            src={carImg}
                            alt="Car Image"
                            className="w-full h-full object-cover"
                        />
                        
                        <div className="absolute inset-0 bg-opacity-40"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                Connecting You to Every Destination.
                            </h1>
<Link to="/allVehicles" class="btn-donate">Book now</Link>

                        </div>
                    </div>
        </div>
    );
};

export default Banner;