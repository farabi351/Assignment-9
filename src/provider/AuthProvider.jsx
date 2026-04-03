import React, {createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut ,signInWithEmailAndPassword, updateProfile,signInWithPopup,sendEmailVerification,updateEmail,verifyBeforeUpdateEmail} from 'firebase/auth';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import { a } from '@react-spring/web';
import { useNavigate } from 'react-router';

export const AuthContext=createContext();


const auth=getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    //

    const [user,setUser]=useState(null);

     //console.log(user);

    const createUser=(email,password)=>{

        return createUserWithEmailAndPassword(auth,email,password);

    }


const signIn=(email,password)=>{

    return signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

};

const signInWithGoogle=()=>{
    return signInWithPopup(auth, googleProvider);
}

const updateUser=async(userInfo)=>{

    await updateProfile(auth.currentUser, userInfo);

    //return updateProfile(auth.currentUser,userInfo);
    setUser({ ...auth.currentUser });
   // nav("/");

};

const emailVerify=()=>{

    return sendEmailVerification(auth.currentUser);     
}


const updateMyEmail = (email) => {
  return verifyBeforeUpdateEmail(auth.currentUser, email)
    // .then(() => updateMyEmail(email)) 
}

// const updateMyEmail=async(myEmail)=>{
//     await updateEmail(auth.currentUser,myEmail);
//     setUser({ ...auth.currentUser });
// }


// const updateMyEmail=async (email)=>{

//     updateEmail(auth.currentUser,email);

// }

// const verifyEmail=()=>{

//     return sendEmailVerification(auth.currentUser);     
// }
// const updateMyEmail=async (userInfo)=>{

//     await updateEmail(...auth.currentUser,userInfo);

//    // console.log(userInfo.email);
//    setUser({ ...auth.currentUser });

    

// }









const logOut=()=>{

        signOut(auth)
          .then(() => {
          // Sign-out successful.
          alert("You Have been Logged Out");
        })
        
        .catch((error) => {
        // An error happened.
        alert(error);
        });


    }

// const forgetPassword=()=>{


// }




    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        })
        return ()=>{

            unsubscribe();

        }
    },[])

    const authData={
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        updateUser,
        signInWithGoogle,
        updateMyEmail,
        emailVerify,
        

    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;