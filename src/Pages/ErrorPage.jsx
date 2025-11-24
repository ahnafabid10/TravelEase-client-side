import React from 'react';
import errorPage from '../assets/App-Error.png'

const ErrorPage = () => {
    return (
        <div className='pt-16'>
            <img className='max-w-[800px] mx-auto p-50' src={errorPage} alt="404 Not Found" />
        </div>
    );
};

export default ErrorPage;