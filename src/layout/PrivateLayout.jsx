import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useUserStore from '../zustand/useUserStore';

const PrivateLayout = () => {
    const user = useUserStore(state => state.user);
    const setUp = useUserStore(state => state.setUp);
    const location = useLocation();

    // Allow access to /setup-org even if setUp is false
    if (!user) return <Navigate to="/login" state={{ from: location }} replace />;
    if (!setUp && location.pathname !== "/setup-org") return <Navigate to="/setup-org" replace />;

    return <Outlet />;
};

export default PrivateLayout;
