import React from 'react'

function Buttoncolor({btnColor,onClick}) {
  return (
    <button 
  class="rounded-full  px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black m-1"
  style={{backgroundColor:btnColor}}
  onClick={onClick}
>{btnColor}
</button>
  )
}

export default Buttoncolor