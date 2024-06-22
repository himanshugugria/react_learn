import React from 'react'
import {useSelector} from 'react-redux'
import CardsinCart from '../CardsinCart'


const Cartpage=()=>{
    const cartItems=useSelector((state)=>state.cart.cartItems)    // cart is the reducer name and cartItems is the array
    // console.log('Cart Items:', cartItems);
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    return(
        <>
        <h1 className='my-5 font-semibold text-2xl'>this is the cart page</h1>
        <div className='my-5 font-semibold text-orange-500'>
            Total Price: {totalPrice}
        </div>
        <div className="flex flex-wrap gap-10">
        {cartItems.map((food)=>(    // yahan pe () aayega na ki {} bcoz Without the parentheses, JavaScript would interpret {} as the start of a block body, not an object literal.
            <CardsinCart
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            image={food.image}
            />
        ))}
        </div>
        </>
    )
}

export default Cartpage