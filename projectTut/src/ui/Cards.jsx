import React from 'react'
import { useDispatch } from 'react-redux'
import { addItems } from '../app/slices/kartSlice'

function Cards({id,name,price,image}) {
    const Dispatch=useDispatch();

    const addtoCart=()=>{
        const product={id,name,price,image}
        Dispatch(addItems(product))
    }

  return (
    <>
    <div>
  <div class="rounded-md border grid w-72">
    <img
      src={image}
      alt=""
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
        Price: {price}
      </div>
      <button
      onClick={addtoCart}
        type="button"
        class="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Add to Cart
      </button>
    </div>
  </div>
  
</div>

    </>
  )
}

export default Cards