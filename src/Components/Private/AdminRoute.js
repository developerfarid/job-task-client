import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();
    console.log(admin?.role);
    const location = useLocation();
    if (isLoading) { return(<Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>)}
    if (user?.email && admin?.role) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;

};

export default AdminRoute;