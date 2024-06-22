import React from 'react'
import Cards from '../Cards'
import FoodData from '../../data/FoodData.js'

function Homepage() {
  return (
    <div className='flex flex-wrap gap-10'>
    {FoodData.map((food)=>{
        return <Cards key={food.id}
            id={food.id}
            name={food.name}
            image={food.img}
            price={food.price}
        />
    })}
    </div>
  )
}

export default Homepage