import React from 'react';
import cat from "../assets/cat.jpg";
import { NavLink } from 'react-router';
const ExtraSection = () => {
    return (
        <div className="card bg-base-100 shadow-sm">
  <figure>
    <img
      src={cat}
      alt="Movie" />
  </figure>
  <div className="card-body">
    {/* <h2 className="card-title justify-center">Meet Our Expert Vets</h2> */}
    {/* <p>Click the button to watch on Jetflix app.</p> */}
    <div className="card-actions justify-center">
      <NavLink to="/catTips" className="btn btn-primary">Your Cat May Love this Tips</NavLink>
    </div>
  </div>
</div>
    );
};

export default ExtraSection;