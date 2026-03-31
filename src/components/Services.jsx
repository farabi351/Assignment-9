import React from 'react';
import { NavLink } from 'react-router';

import { useLoaderData } from 'react-router';

const Services = () => {

    const serviceData=useLoaderData();

    // console.log(serviceData.map(c=>console.log(c)));

    // const myServiceData=serviceData.map(c=>c.serviceName)
    // console.log(myServiceData);

    // const servicePromise=fetch("winterService.json").then(res=>res.json())
    // console.log(use(servicePromise)); 
    return (
        

          <div className='text-center mt-5 mx-5'>

            <h1 className='mb-15 text-4xl'>Popular winter care services</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center'>

            {
              serviceData.map(c=>(
                <div className="card bg-base-100 w-full shadow-lg border-2 border-gray-400 gap-5 bg-emerald-50 rounded-3xl">
              
  <figure className="px-10 pt-10">

    
    <img
      src={c.image}
      alt="Shoes"
      className="rounded-xl w-fit h-60 object-contain" />
  </figure>
  <div className="card-body items-start px-10 text-amber-600 font-semibold">
    <h2 className="card-title btn btn-outline btn-success rounded-4xl text-sm font-semibold">{c.serviceName}</h2>
    <p>Rating:{c.rating}</p>
    <p>Price:{c.price}</p>
   <div className='flex justify-center'>
         <div className="card-actions">
             <NavLink to="/bookNow" className="btn btn-primary h-[25px]">View Details</NavLink>
         </div>
   </div>
  </div>
</div>
              ))
            }
                 
                  
           </div>

           <NavLink className="btn btn-primary mt-10" to="/">Go back to the home page</NavLink>
          </div>
            
        
    );
};

export default Services;