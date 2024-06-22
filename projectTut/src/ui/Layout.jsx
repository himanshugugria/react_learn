import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from './pages/Footer'
import Header from './pages/Header'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout