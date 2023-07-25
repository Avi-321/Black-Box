import React from 'react';
import { Navigate, Outlet} from 'react-router-dom';

const ProtectedRouted = (props) => {
  
  return (
      
    
    
     (props.auth && props.admin)  ? <Outlet/> : <Navigate to="/" />

    
  );
};

export default ProtectedRouted;