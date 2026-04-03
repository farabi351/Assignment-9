import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router';




const BookNow = () => {

     const navigate=useNavigate();

    const handleBookNow=(e)=>{
        e.preventDefault();
        toast.success("Service booked successfully!");
        //   navigate("/");
        //navigate(user ? "/" : "/auth/login");

         // Navigate after a short delay so user can see the toast
    setTimeout(() => {
      navigate("/");
    }, 1000); // 1 second delay
    }
    return (

        <div className='flex justify-center items-center min-h-screen'>
            <ToastContainer></ToastContainer>
                  <form onSubmit={handleBookNow}>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 justify-center items-center text-center">
  {/* <legend className="fieldset-legend">Login</legend> */}

  <h1 className='text-xl font-semibold'>Book Service</h1>

  <label className="label">Name</label>
  <input type="name" className="input" placeholder="Name" required/>

  <label className="label">Email</label>
  <input type="email" className="input" placeholder="Email" required/>
{/* //onClick={handleBookNow} */}
 
  <button type='submit'  className="btn btn-neutral mt-4">Book Now</button>
</fieldset>
                  </form>
                  {/* <Toaster position="top-right" reverseOrder={false} /> */}
        </div>

    );
};

export default BookNow;