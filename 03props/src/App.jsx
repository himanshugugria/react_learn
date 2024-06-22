import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {

  return (
    <>
     <Card usename="itis" btnText="click me"/>
     <Card usename="itiswht"/>
    </>
  )
}

export default App
