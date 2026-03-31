import React from 'react';
import { NavLink } from 'react-router';
import { useLoaderData } from 'react-router';





const Tips = () => {

    const serviceData=useLoaderData();
    return (

        <div className='text-center mt-5 mx-5'>

  <h1 className='mb-12 text-4xl'>Popular Winter Care Tips</h1>

  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>

    {
      serviceData.map(c => (
        <div 
          key={c.tipId}
          className="card bg-base-100 w-full shadow-lg border border-gray-300 bg-blue-50 rounded-3xl"
        >

          <figure className="px-10 pt-10">
            <img
              src={c.image}
              alt={c.title}
              className="rounded-xl w-[250px] h-[250px] object-cover"
            />
          </figure>

          <div className="card-body items-start px-10">
            <p className="font-semibold btn btn-accent h-[29px]">{c.category}</p>
            <h2 className="card-title mt-3">{c.title}</h2>
            
            <p className='text-amber-600'>{c.description}</p>
          </div>

        </div>
      ))
    }

  </div>

  <NavLink className="btn btn-primary mt-10" to="/">
    Go back to the home page
  </NavLink>

</div>
         
    );
};

export default Tips;




/* <div className='text-center mt-5'>
         
                     <h1 className='mb-15 text-4xl'>Popular Winter Care Tips</h1>
                         <div className='grid grid-cols-3'>
         
                     {
                       serviceData.map(c=>(
                         <div className="card bg-base-100 w-76 shadow-sm border-3 border-white-400 gap-5">
                       
           <figure className="px-10 pt-10">
         
             
             <img
               src={c.image}
               alt="Shoes"
               className="rounded-xl w-[250px] h-[250px] object-cover" />
           </figure>
           <div className="card-body items-start px-10">
             <h2 className="card-title">{c.title}</h2>
             <p>{c.category}</p>
             <p>{c.description}</p>
            {/* <div className='mx-15 my-10'>
                  <div className="card-actions">
                      <NavLink to="/bookNow" className="btn btn-primary">View Details</NavLink>
                  </div>
            </div> */
        //    </div>
        //  </div>
        //                ))
        //              }
                          
                           
        //             </div>

        //             <NavLink className="btn btn-primary mt-10" to="/">Go back to the home page</NavLink>
        //            </div> */}