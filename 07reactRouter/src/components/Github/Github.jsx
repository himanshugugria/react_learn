import React,{useEffect,useState} from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data=useLoaderData()
    // const [data,setData]=useState({});
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((res)=> res.json())
    //     .then((data)=> setData(data));
    // })
  return (
    <div className='text-white bg-red-700 text-center p-4'>Github followers : {data.followers}</div>
  )
}

export default Github


export const GithubInfoloader=async()=>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}