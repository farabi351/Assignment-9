import React, { use, useState } from 'react';
import { NavLink } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../provider/AuthProvider';
import { useLocation,useNavigate } from 'react-router';

const Registration = () => {

  const {createUser,setUser,updateUser,signInWithGoogle}=use(AuthContext);
  const [nameError,setNameError]=useState("");
  const [error,setError]=useState("");

  

  const location=useLocation();
  const navigate=useNavigate();


  const handleGoogleSignInInsideReg=()=>{
    signInWithGoogle()
    .then(result=>{
      console.log(result);
      // toast("hay")
      navigate(`${location.state?location.state:"/"}`);
    })
    .catch(error=>{
      console.log(error)
    })
   
  }
     


  const handleRegistration=(e)=>{

  

   

    e.preventDefault();
    // console.log(e.target);
    const name=e.target.name.value;
    if(name.length<5){
      setNameError("name should be at least 5 character");
      return;
    }
    else{
      setNameError("");
    }


    const email=e.target.email.value;
    const url=e.target.url.value;
    const password=e.target.password.value;
   // console.log(name,email,url,password);


    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if(!passwordPattern.test(password)){
        console.log('password did not match')
        setError("Password must be, An upperCase,A lowerCase and at least 6 character length in size");
        return;
    }
  


   

    

    createUser(email,password)
    .then(result=>{
      const user=result.user;
      updateUser({displayName:name,photoURL:url})
         .then(()=>{

                 setUser({...user,displayName:name,photoURL:url});

        })
        .catch((error)=>{

          console.log(error);
          setUser(user);

        })
      
      // navigate(`${location.state?location.state:"/"}`);
      alert("Sign Up Success!");
      navigate(user ? "/" : "/auth/login");
    })

    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    setNameError(nameError);
    // ..
  });
   

  }

   

    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-xl font-bold text-center">SignUp now!</h1>

      <form onSubmit={handleRegistration}>
           <fieldset className="fieldset">
          
          {/* name */}
          <label className="label">Name</label>
          <input name='name' type="name" className="input" placeholder="Name" required/>
          
          {
            nameError&& <p className='text-red-600'>{nameError}</p>
          }
          {/* email */}
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" required/>

          {/* photo url */}
          <label className="label">Photo URL</label>
          <input name='url' type="url" className="input" placeholder="photoURL" required/>
          
          {/* password */}
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" required/>

          {
            error&& <p className='text-red-600'>{error}</p>
          }
          
          <div><a className="link link-hover">Forgot password?</a></div>
          
          <button type='submit' className="btn btn-neutral mt-4">Register</button>

          <NavLink to="/auth/login">I Have an account already go to <span className='text-red-600 font-bold'>Login</span></NavLink>

          <button onClick={handleGoogleSignInInsideReg} className='btn mt-5'><FcGoogle /><span>Login with Google</span></button>
        </fieldset>
      </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Registration;