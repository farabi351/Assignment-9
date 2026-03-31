import React from 'react';
import Navbar from './Navbar';
import Login from './Login';
import { Outlet } from 'react-router';
import Footer from './Footer';

const AuthLayout = () => {
    return (
       <div>
            <header>
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
            {/* <Login></Login> */}
            <Footer></Footer>
       </div>
    );
};

export default AuthLayout;