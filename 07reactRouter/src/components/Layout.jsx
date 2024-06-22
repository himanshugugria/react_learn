// this file is because if we want to have that our header and footer remain at the same position in every tab so it is not a optimized way to re-render them on every page so we create this file so they can be rendered once and the inner content change

import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'
// yahan pe outlet wala kaam/function/page rerender hoga and baaki same rahega

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