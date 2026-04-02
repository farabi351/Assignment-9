import React, {createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut ,signInWithEmailAndPassword, updateProfile,signInWithPopup,updateEmail} from 'firebase/auth';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext=createContext();


const auth=getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

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

};

const updateMyEmail=(userInfo)=>{

    //updateEmail(auth.currentUser, userInfo);
    //return updateMyEmail(auth.currentUser,userInfo);
    

};


//     }).catch((error) => {

//     });



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

    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;