import React from 'react'
import image1 from "../assets/img/image1.avif"
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice';



function Car({name, image, id, price,type}) {
  let dispatch = useDispatch()
  return (
    <div  className='w-[300px] h-[400px] bg-white p-4 rounded-lg gap-3 shadow-lg flex flex-col hover:border-2 border-green-400'>
        <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
            <img src={image} alt='' />
        </div>
        <div className='text-2xl font-bold'>
            {name}
        </div>
        <div className='text-green-600 font-bold flex justify-between'>
            <div>{price}</div>
            <div className='flex items-center font-semibold gap-2'>
              {type==="veg"?<LuLeafyGreen />:<GiChickenOven />}
              <span >{type}</span>
            </div>
        </div>
        <button className='bg-green-200 font-bold py-3 w-[100%] rounded-md hover:bg-green-500' onClick={() => dispatch(AddItem({id:id, name:name,price:price, image:image, qty:1}))}>Add to dish</button>
    </div>
  )
}

export default Car