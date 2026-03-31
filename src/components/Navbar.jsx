import React, { use } from 'react';
import logo from "../assets/logo.png";
import { NavLink } from 'react-router';
import Link from 'daisyui/components/link';
import { AuthContext } from '../provider/AuthProvider';
import { FaUserGraduate } from "react-icons/fa";

const Navbar = () => {
  const {user,logOut,updateUser}=use(AuthContext);

  const handleLogout=()=>{
    console.log("me from handle logout");
    logOut();
  }
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         <NavLink to="/">Home</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/myProfile">Profile</NavLink>
      </ul>
    </div>
    {/* <a className="btn btn-ghost text-xl">LOGO</a> */}
    <NavLink to="/">
          <img onClick="" src={logo} className='hidden md:block md:h-[60px] w-auto btn btn-ghost'   alt="" />
    </NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-4">
      {/* <div>{user && user.email}</div> */}
      {/* <li><a>Home</a></li> */}
      {/* <li><a>Services</a></li>
      <li><a>Profile</a></li> */}

      <NavLink to="/">Home</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/myProfile">Profile</NavLink>
    </ul>
  </div>
  <div className="navbar-end">
    {/* <a className="btn">Login/Register</a> */}

    {/* <FaUserGraduate /> */}

    <img className='h-[35px] rounded-full' src={`${user? user.photoURL: <FaUserGraduate />}`} alt="" />

    <div className=''>
         {
          user? <button onClick={handleLogout} className='text-sm md:text-md ml-3 hover:bg-orange-100 btn btn-soft btn-accent'><span>{user && user.email}</span>  <span className='text-red-900'>Logout</span></button>:  <NavLink className="btn" to="/auth/login">Login/Register</NavLink>
         }
    </div>


    

    

    

    
  </div>
</div>
    );
};

export default Navbar;