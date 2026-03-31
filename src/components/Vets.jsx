import React from 'react';
import { useLoaderData } from 'react-router';
import { NavLink } from 'react-router';


//  "vetId": 1,
//     "name": "Dr. Emily Carter",
//     "specialization": "Small Animal Care",
//     "experience": 8,
//     "rating": 4.9,
//     "email": "emily.carter@petcare.com",
//     "phone": "+1-201-555-1011",
//     "clinic": "Happy Paws Veterinary Clinic",
//     "availability": "Mon-Fri, 9 AM - 5 PM",


const Vets = () => {
    const serviceData=useLoaderData();
    return (
         <div className='text-center mt-5 mx-5 md:mx-15'>

            <h1 className='mb-15 text-4xl'>Expert Vets For Your Pets</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center'>

            {
              serviceData.map(c=>(
                <div className="card bg-base-100 w-full h-[600px] border-gray-300 border-2 gap-5 bg-green-50 shadow-lg rounded-3xl">
              
  <figure className="px-10 pt-10">

    
    <img
      src={c.image}
      alt="Shoes"
      className="rounded-xl h-[150px] w-full md:h-auto" />
  </figure>
  <div className="card-body items-start px-10 text-black">
    <h2 className="card-title">{c.name}</h2>
    <p className='btn btn-outline btn-secondary md:h-[25px]'>{c.specialization}</p>
    <p className='font-bold text-blue-950 btn btn-outline btn-info'>{c.experience}</p>
    <p className='font-bold text-blue-950 btn btn-outline btn-info'>{c.rating}</p>
    <p className='font-bold text-blue-950 btn btn-outline btn-info'>{c.email}</p>
    <p className='font-bold text-blue-950 btn btn-outline btn-info'>{c.phone}</p>
    <p className='font-bold text-blue-950 btn btn-outline btn-info'>{c.availability}</p>
   {/* <div className='mx-15 my-10'>
         <div className="card-actions">
             <NavLink to="/bookNow" className="btn btn-primary">View Details</NavLink>
         </div>
   </div> */}
  </div>
</div>
              ))
            }
                 
                  
           </div>

           <NavLink className="btn btn-primary mt-10" to="/">Go back to the home page</NavLink>
          </div>
    );
};

export default Vets;