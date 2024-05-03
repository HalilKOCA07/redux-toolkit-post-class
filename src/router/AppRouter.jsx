import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AppNavbar from '../components/AppNavbar'
import Login from '../pages/Login'
import PrivateRouter from './PrivaterRouter'
import News from '../pages/News'

const AppRouter = () => {
  return (
    <Router>
         <AppNavbar />
        <Routes>
           <Route path="/login" element={<Login />}/>
           <Route path="/news" element={<PrivateRouter />}>
              <Route path="" element={<News />} />
           </Route>
        </Routes>
    </Router>
  )
}

export default AppRouter
