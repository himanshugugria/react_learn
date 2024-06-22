import { useState } from 'react'
import './App.css'
import Buttoncolor from './components/Buttoncolor'

function App() {
  const[color,setColor]=useState("olive")

  return (
    <>
    <div className='w-screen h-screen' 
      style={{backgroundColor : color}}
    >
      <Buttoncolor btnColor="black" onClick={()=>setColor("black")}/>
      <Buttoncolor btnColor="red" onClick={()=>setColor("red")}/>
      <Buttoncolor btnColor="blue" onClick={()=>setColor("blue")}/>
      <Buttoncolor btnColor="green" onClick={()=>setColor("green")}/>
      </div>
    </>
  )
}

export default App
