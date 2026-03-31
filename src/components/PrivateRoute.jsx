import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    //if user thake then return children

    const {user}= use(AuthContext);

    const location=useLocation();
    //console.log(location);

    if(user && user?.email){

        return children;

    }

    return <Navigate state={location.pathname} to="/auth/login"></Navigate>

    //console.log(user);

    
};

export default PrivateRoute;