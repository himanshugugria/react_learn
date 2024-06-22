import { useState } from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserContextProvider>
        <h1>react with chai aur code</h1>
      </UserContextProvider>
    </>
  )
}

export default App
