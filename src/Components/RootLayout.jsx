import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Footer'

function RootLayout() {
  return (
    <div>

        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    </div>
  )
}

export default RootLayout