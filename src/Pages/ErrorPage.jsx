import React from 'react';
import { Link } from 'react-router';
// import errorPage from '../assets/App-Error.png'

const ErrorPage = () => {
    return (
        <div className=''>
            {/* <img className='max-w-[800px] mx-auto p-50' src={errorPage} alt="404 Not Found" /> */}
            <div className="min-h-screen bg-base-200 flex items-center justify-center p-6">
<div className="text-center max-w-lg">
<h1 className="text-8xl font-bold .btn-donate drop-shadow-lg">404</h1>
<h2 className="mt-4 text-3xl font-bold text-base-content">Page Not Found</h2>
<p className="mt-3 text-base-content/70">The page you are looking for doesn't exist or has been moved.</p>
</div>
</div>
</div>
    );
};

export default ErrorPage;