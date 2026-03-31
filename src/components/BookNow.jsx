import React from 'react';
import { useNavigate } from 'react-router';



const BookNow = () => {

     const navigate=useNavigate();

    const handleBookNow=()=>{
        alert("success");
         navigate("/");
        //navigate(user ? "/" : "/auth/login");
    }
    return (

        <div className='flex justify-center items-center min-h-screen'>
                  <form onSubmit={handleBookNow}>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 justify-center items-center text-center">
  {/* <legend className="fieldset-legend">Login</legend> */}

  <h1 className='text-xl font-semibold'>Book Service</h1>

  <label className="label">Name</label>
  <input type="name" className="input" placeholder="Name" required/>

  <label className="label">Email</label>
  <input type="email" className="input" placeholder="Email" required/>

 
  <button className="btn btn-neutral mt-4">Book Now</button>
</fieldset>
                  </form>
        </div>

    );
};

export default BookNow;