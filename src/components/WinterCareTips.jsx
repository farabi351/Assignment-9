import React from 'react';
import mini from "../assets/mini.jpg"
import { NavLink } from 'react-router';
import "animate.css";

const WinterCareTips = () => {
    return (
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      `url(${mini})`,
  }}
>
  <div className=""></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-2xl font-bold text-blue-50 animate__animated animate__bounceInDown">Winter Care Tips for pets</h1>
      {/* <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p> */}
      <NavLink to="/tips" className="badge badge-outline badge-primary hover:bg-pink-200">Get Started</NavLink>
    </div>
  </div>
</div>
    );
};

export default WinterCareTips;