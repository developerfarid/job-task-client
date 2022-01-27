import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Route, Redirect, useLocation, Navigate } from 'react-router-dom';
import UseAuth from '../../Hooks/useAuth';



const PrivateRoute = ({ children, ...rest }) => {
    const { user, loding } = UseAuth();
  let location=  useLocation()

    if (loding) { return (<Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>)}
  if (user?.email) {
    return children;
}
return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;