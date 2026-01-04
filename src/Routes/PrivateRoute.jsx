import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContext)

    const location = useLocation()

    if(loading){
        return <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-200 via-base-100 to-base-200">
                <div className="text-center">
                    <span className="loading loading-bars loading-xl text-primary"></span>
                    <p className="mt-4 text-base-content/70 font-medium">Loading your vehicles...</p>
                </div>
            </div>
    }
    else if(user){
        return children
    }

    return <Navigate state={location?.pathname} to='/login'></Navigate>
};

export default PrivateRoute;