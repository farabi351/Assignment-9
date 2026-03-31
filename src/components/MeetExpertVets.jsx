import React from 'react';
import doctor from '../assets/doctor.jpg'
import { NavLink } from 'react-router';
const MeetExpertVets = () => {
    return (
        <div className="card bg-base-100 shadow-sm">
  <figure>
    <img
      src={doctor}
      alt="Movie" />
  </figure>
  <div className="card-body">
    {/* <h2 className="card-title justify-center">Meet Our Expert Vets</h2> */}
    {/* <p>Click the button to watch on Jetflix app.</p> */}
    <div className="card-actions justify-center">
      <NavLink to="/expertVets" className="btn btn-primary">Meet Our Expert Vets</NavLink>
    </div>
  </div>
</div>
    );
};

export default MeetExpertVets;