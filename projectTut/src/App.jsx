import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './ui/Layout'
import Homepage from './ui/pages/Homepage'
import Cartpage from './ui/pages/Cartpage'

function App() {

  const route=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Homepage/>}/>
        <Route path='cart' element={<Cartpage/>}/>
      </Route>
    )
  )


  return (
    <>
    <RouterProvider router={route}/>
    </>
  )
}

export default App
