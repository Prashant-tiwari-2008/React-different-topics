import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
const ProtectedRoutes = ({ user, children, redirectPath = "/landing" }) => {
    console.log("User", user)
    if (user === undefined) {
        return <Navigate to={redirectPath} replace />
    }
    return children ? children :<Outlet />;
}

export default ProtectedRoutes;