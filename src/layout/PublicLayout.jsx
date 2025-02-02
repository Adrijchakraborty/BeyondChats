import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PublicLayout = () => {
   const validUser = false;
  return !validUser ? <Outlet /> : <Navigate to={'/'} />
}

export default PublicLayout