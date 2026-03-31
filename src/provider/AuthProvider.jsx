import React, {createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut ,signInWithEmailAndPassword, updateProfile,signInWithPopup} from 'firebase/auth';
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

// const updateUser=()=>{
//     return updateProfile(auth.currentUser, {
//   displayName: "", name: ""
// })
// }

// updateProfile(auth.currentUser, {
//   displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
// }).then(() => {
//   // Profile updated!
//   // ...
// }).catch((error) => {
//   // An error occurred
//   // ...
// });

//console.log(updateUser);





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

    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;