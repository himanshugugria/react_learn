import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const[lenght,setlenght]=useState(8)
  const[numallowed,setnumallowed]=useState(false)
  const[charallowed,setcharallowed]=useState(false)
  const[password,setPassword]=useState("")

  // useRef hook          // used for copying
  const passwordref=useRef(null);     // (default value)  yahan null daal di

  const copypasswordtoClipboard =useCallback(()=>{
    passwordref.current?.select()
    passwordref.current?.setSelectionRange(0,5)      // for selecting range of numbers(optional)
    // alert("copied to clipboard")
    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numallowed) str+="0123456789"
    if(charallowed) str+="!@#$%^&*()"

    for(let i=1;i<=lenght;i++){
      let char=Math.floor(Math.random() * str.length +1) 

      pass +=str.charAt(char)             // str me se ek random letter utha k pass me daal do
    }
    setPassword(pass)
  },[lenght,numallowed,charallowed,setPassword])       // dependencies (useCallback cache kar leta hai between re-renders)
                                   // yahan pe password isliye nhi call kiya kyuki fir vo har baar use call karta aur vo infinite loop me fas jata toh setpassword call kiya hai
  useEffect(()=>{
    passwordGenerator()
  },[lenght,numallowed,charallowed,passwordGenerator])

  return (
    <>
      <div className='bg-gray-600 max-w-md w-full my-8 py-3 px-4 rounded-lg mx-auto'>
        <div className='flex overflow-hidden rounded-lg'>
          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3 mx-3 rounded-lg'
          placeholder='password'
          readOnly
          ref={passwordref}     // copy karne k liye
           /> 
          <button 
          onClick={copypasswordtoClipboard}
          className='bg-blue-900 text-white rounded-lg px-2'>
            copy</button>
        </div>
        <div className='flex'>
          <div className='flex items-center my-3 mx-2'>
            <input
              type="range"
              min={8}
              max={100}
              value={lenght}
              className='cursor-pointer'
              onChange={(e)=>{setlenght(e.target.value)}}
            />
            <label className=' text-white mx-2'>lenght={lenght}</label>
            
            <input 
            type="checkbox"
            defaultChecked={numallowed}
            onChange={()=>{
              setnumallowed((prev) => !prev)      // click karne pe value reverse ho jaye
            }}
            />
            <label className='text-white mx-2'>Number</label
            >
            <input 
            type="checkbox"
            defaultChecked={numallowed}
            onChange={()=>{
              setcharallowed((prev) => !prev)      // click karne pe value reverse ho jaye
            }}
            />
            <label className='text-white mx-2'>character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
