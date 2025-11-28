import React from 'react';
import carImg from '../assets/blake-meyer-CRNbHjNaljo-unsplash.jpg'
import { Link } from 'react-router';
import { motion } from "motion/react"


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
                            <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
        >
            Connecting You to Every Destination.
        </motion.h1>
<Link to="/allVehicles" class="btn-donate">Book now</Link>

                        </div>
                    </div>
        </div>
    );
};

export default Banner;