import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useUserStore from '../zustand/useUserStore';

const PublicLayout = () => {
    const user = useUserStore(state => state.user);
    return !user ? <Outlet /> : <Navigate to={'/'} />
}

export default PublicLayout