import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../context/authContext';

const PrivateRoute = () => {
  const { isAuthenticated, loading } = useContext(AuthContext);
  console.log(isAuthenticated);
  if (loading) return <div>Loading...</div>;

  return isAuthenticated ? <Outlet /> : <Navigate to="/admin/login" replace={true}/>;
};

export default PrivateRoute;
