import React, { use, useRef, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../provider/AuthProvider';
import toast from 'daisyui/components/toast';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
//import { GoogleAuthProvider } from "firebase/auth";
//import { auth } from '../firebase/firebase.config';
//import { signInWithPopup } from 'firebase/auth';
//import { signInWithPopup } from 'firebase/auth';
const Login = () => {

  const [error,setError]=useState();
  const {signIn,signInWithGoogle}=use(AuthContext)
  const emailRef=useRef();
  const location=useLocation();
  const navigate=useNavigate();

  //const provider = new GoogleAuthProvider();

  const auth=getAuth();




  const handleGoogleSignIn=()=>{
    signInWithGoogle()
    .then(result=>{
      //console.log(result);
      // toast("hay")
      navigate(`${location.state?location.state:"/"}`);
    })
    .catch(error=>{
      console.log(error)
    })
   
  }
   
   
   
   
   
    const handleLogin=(e)=>{
    // console.log("i am handleLogin");
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value;
    //console.log(email,password);
    signIn(email,password)
    .then((result) => {
      alert("login Success")
    // Signed in 
    const user = result.user;
    console.log(user);
    navigate(`${location.state?location.state:"/"}`);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode,errorMessage)
    setError(errorCode);
  });
   }


   const handleForgetPassword=()=>{
    
    console.log("forget password",emailRef.current.value);
    const email= emailRef.current.value;

    sendPasswordResetEmail(auth, email)
  .then(() => {
    alert("Password reset email sent!");
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode,errorMessage);
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
        <h1 className="text-xl font-bold text-center">Login now!</h1>
          <form onSubmit={handleLogin}>
                <fieldset className="fieldset">

          {/* email         */}
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" ref={emailRef} />
          
          {/* password */}
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          
          {/* forget password */}
          <div onClick={handleForgetPassword}><a className="link link-hover">Forgot password?</a></div>

          {
            error && <p className='text-red-600'>{error}</p>
          }
          
          {/* login */}
          <button type='submit' className="btn btn-neutral mt-4">Login</button>

          <NavLink to="/auth/registration">I don`t have an account, <span className='text-red-300 font-bold'>Registration me</span></NavLink>
          {/* onClick={handleGoogleSignIn} */}
          <button onClick={handleGoogleSignIn}  className='btn mt-5'><FcGoogle /><span>Login with Google</span></button>
        </fieldset>
          </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;