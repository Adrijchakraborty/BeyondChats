import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateLayout = () => {
    const validUser = false;
    return validUser ? <Outlet /> : <Navigate to={'/login'} />
}

export default PrivateLayout