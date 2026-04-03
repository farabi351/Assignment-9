//import React, { useContext } from 'react';
import Navbar from './Navbar';
import { use} from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router';
import { verifyBeforeUpdateEmail } from 'firebase/auth';

const MyProfile = () => {
   const {user,updateUser,emailVerify,updateMyEmail}=use(AuthContext);
   const navigate=useNavigate();

   const handleUpdateProfile=(e)=>{
    e.preventDefault();
    console.log(updateUser);
    const name=e.target.name.value;
    const url=e.target.url.value;
    //const email=e.target.email.value;
    //console.log(name,url,email);
    console.log(user.email);
    updateUser(

        {
         displayName: name,
         photoURL: url, 
       })

      //  .then(() => updateMyEmail(email))
      //  .then(() => verifyEmail())

      // updateMyEmail({email})

      // updateEmail(auth.currentUser,updateMyEmail)

      // emailVerify(email.target.email.value)

      // .then(() => updateMyEmail(email))     

      //updateMyEmail(email)

      // .then(() => updateMyEmail(email))

       //.then(() => updateMyEmail(email)) 


      
      
              

    .then((result) => {
      console.log(result);
      navigate(`${location.state?location.state:"/"}`);
    })
    .catch((error) => {
      console.error(error);
    });


   

    
   };
    return (
        
         <div className="flex justify-center items-center min-h-screen">
  <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
    <div className="card-body">
      {/* {user.displayName} */}
      <h1 className='text-center font-bold text-xl'>My Profile </h1>
      <p className='text-center font-semibold text-md text-blue-800'>{user?.displayName}</p>
      <form onSubmit={handleUpdateProfile}>
             <fieldset className="fieldset">

       <div className="flex items-center justify-center my-5">
  <img src={user ? user.photoURL : ""} alt="" />
</div>

         <label className="label">Name</label>
         <input name='name' type="name" className="input" placeholder="Name" />

         {/* <label className="label">Email</label>
         <input name='email' type="email" className="input" placeholder="Email" /> */}

         <label className="label">Photo URL</label>
         <input name='url' type="url" className="input" placeholder="photo url" />


        
        
        

        <button type='submit' className="btn btn-primary mt-4">Update Profile</button>
      </fieldset>
      </form>
    </div>
  </div>
</div>
    );
};

export default MyProfile;