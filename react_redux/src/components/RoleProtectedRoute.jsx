import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const RoleProtectedRoute = ({ allowedRoles = [], children }) => {
  const auth = useSelector((s) => s.auth)
  const location = useLocation()

  if (!auth.isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  const role = auth.user?.role
  if (!allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />
  }

  return children
}

export default RoleProtectedRoute
