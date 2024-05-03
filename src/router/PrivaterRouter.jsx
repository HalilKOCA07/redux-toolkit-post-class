import React from 'react'
import { useSelector } from 'react-redux'
import LoginSlice from '../features/LoginSlice'
import { Outlet, Navigate } from 'react-router-dom'
import Login from '../pages/Login'

const PrivateRouter = () => {

    const {user} = useSelector((state) => state.login)

  return user?.email && user?.password ? <Outlet /> : <Navigate to="/login" />
  
}

export default PrivateRouter
