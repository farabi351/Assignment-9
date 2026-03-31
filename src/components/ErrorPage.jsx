import React from 'react';
import errorpage from '../assets/errorPage.png'
import { NavLink } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center'>

            <img className='h-[550px] w-fit' src={errorpage} alt="" />

            {/* <button className='flex btn btn-primary '>Go Back</button> */}

            <NavLink className='flex btn btn-primary '  to="/">Go Back</NavLink>
            
        </div>
    );
};

export default ErrorPage;