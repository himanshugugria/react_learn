import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  // let counter=0


  const addvalue=function(){
    if(counter+1>5){
      alert("value cannot be exeeded!")
    }
    else{
    setCounter(counter+1)}
  }
  const subtractvalue=function(){
    setCounter(counter-1)
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h3>counter value {counter}</h3>

      <button onClick={addvalue}>
        increase value</button>
      <button onClick={subtractvalue}>
        decrease value</button>
    </>
  )
}

export default App
