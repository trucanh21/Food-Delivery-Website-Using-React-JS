import React from 'react'
import img1 from '../assets/img/image1.avif'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { RemoveItem, IcreanebtQty, DecrementQty } from '../redux/cartSlice';

function Car2({name, id, price, image, qty}) {
  let dispatch = useDispatch()
    return ( 
    <div className='w-full h-[120px] rounded-md p-2 shadow-lg flex justify-between'>
        <div className='w-[60%] h-full flex gap-5'>
            <div className='w-[60%] h-full overflow-hidden rounded-lg'>
                <img src={image} alt='' className='object-cover'></img>
            </div>
            <div className='w-[40%] h-full flex flex-col gap-5'>
                <div className='text-lg text-gray-600 font-semibold'>{name}</div>
                <div className='w-[110px] h-[50px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-green-400 text-xl'>
                    <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-200' onClick={()=>dispatch(DecrementQtyA(id))}>-</button>
                    <span className='w-[40%] h-full bg-slate-300 flex justify-center items-center text-green-400'>{qty}</span>
                    <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-200' onClick={()=>dispatch(IcreanebtQty(id))}>+</button>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-start items-end gap-6'>
            <span className='text-xl text-green-400 font-semibold'>{price}</span>
            <RiDeleteBin6Line className='w-[30px] h-[30px] text-red-400' onClick={()=>{dispatch(RemoveItem(id))}} />
        </div>
    </div>
  )
}

export default Car2