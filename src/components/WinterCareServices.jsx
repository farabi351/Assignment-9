import React from 'react';
import popular from "../assets/Popular.jpg";
import mini from "../assets/mini.jpg"
import { NavLink } from 'react-router';
import "animate.css";


const WinterCareServices = () => {
    return (
        <div className="card bg-base-100 w-screen shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={popular}
    //   height={50} width={300}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title animate__animated animate__bounce">Popular Winter Care Services</h2>
    {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p> */}
    <div className="card-actions">
      {/* <button className="btn btn-primary"></button> */}
      <NavLink to="/services" className="btn btn-primary">Lets See</NavLink>
    </div>
  </div>
</div>
    );
};

export default WinterCareServices;