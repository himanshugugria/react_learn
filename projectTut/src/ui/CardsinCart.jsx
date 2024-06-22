import React from 'react'
import { removeItems } from '../app/slices/kartSlice'
import { useDispatch } from 'react-redux'

function CardsinCart({id,name,image,price}) {
    const dispatch=useDispatch()
  return (
    <>
      <div class="rounded-md border w-72">
    <img
      src={image}
      alt={name}
      class="w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
    />
    <div class="p-4">
      <h1 class="inline-flex items-center text-lg font-semibold">
        {name}
      </h1>
      <p class="mt-3 text-sm text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        debitis?
      </p>
      <div>
        Price:{price}
      </div>
      <button
      onClick={()=> dispatch(removeItems({id}))}
      type='button'
      className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Remove from cart
      </button>
    </div>
  </div>
    </>
  )
}

export default CardsinCart