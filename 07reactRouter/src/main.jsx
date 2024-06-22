import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact_us/Contact.jsx' 
import User from './components/User/User.jsx'
import Github,{GithubInfoloader} from './components/Github/Github.jsx'

// const route = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children:[
//       {path: "",
//       element: <Home/>,},
//       {path: "About",
//       element: <About/>},
//       {
//         path: "Contact",
//         element: <Contact/>
//       }
//   ]
//   }
// ])

const route=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route 
      loader={GithubInfoloader}  // In React Router, loaders are used to fetch data before rendering a route. This helps in ensuring that the data required by a component is available when it is rendered. 
      path='Github'
      element={<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
