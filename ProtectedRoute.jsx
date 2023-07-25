import React from 'react';
import { Navigate, Outlet} from 'react-router-dom';

const ProtectedRoute = (props) => {
  
  return (
      
    //     <Route
    //   {...rest}
    //   render={(props) => {
    //     if (auth) {
    //       return <Element {...props} />;
    //     }
    //     if (!auth) {
    //       return <Navigate to={{ pathname: '/', state: { from: props.location } }} />;
    //     }
    //   }}
    // />
    
    
     props.auth ? <Outlet/> : <Navigate to="/" />

    
  );
};

export default ProtectedRoute;
