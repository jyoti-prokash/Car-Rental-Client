import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivetRoute = ({children}) => {
     const { user, loading } = useContext(AuthContext);
     const location = useLocation();
     if (loading) {
       return (
         <div className="text-center">
           <span className="loading loading-bars loading-lg"></span>
         </div>
       );
     }

     if (user && user?.email) {
       return children;
     }
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivetRoute;