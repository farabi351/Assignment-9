import React from 'react';
import { useLoaderData } from 'react-router';
import { NavLink } from 'react-router';

const CatTips = () => {

    const serviceData=useLoaderData();

    console.log(serviceData);
    return (
         <div className='text-center mt-5 mx-5 md:mx-15'>

            <h1 className='mb-15 text-4xl'>Expert Tips For Your Kitten</h1>
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
    <h2 className="card-title btn btn-accent">{c.remember}</h2>
    <p className="font-bold">{c.title}</p>
    <p className='font-semibold'>{c.description}</p>
   <div className=''>
         <div className="card-actions">
             <NavLink to="/bookNow" className="btn btn-primary">Talk With Our Experts</NavLink>
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

export default CatTips;