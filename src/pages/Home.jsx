import React, { useState } from 'react'
import Nav from '../components/Nav'
import Categories from '../Category'
import Car from '../components/Car'
import {food_items} from '../food'

function Home() {
  let [cate,setCate] = useState(food_items)
  function filter (category){
    if(category==="All"){
      setCate(food_items)
    }else{
      let newList=food_items.filter((item)=>(item.food_category===category))
      setCate(newList)
    }
  }
  return (
    <div className='bg-slate-200 w-full min-h-screen'>
        <Nav/>
        <div className='flex flex-wrap justify-center items-center gap-5 w-[100%]'>
          {Categories.map((item)=>{
            return <div className='bg-white w-[140px] h-[150px] flex flex-col items-start gap-5 rounded-lg 
            shadow-xl p-5 justify-start text-[20px] font-semibold text-gray-600 hover:bg-green-300 
            cursor-pointer transition-all duration-200' onClick={()=>filter(item.name)} >
              {item.icon}
              {item.name}
            </div>
            })}
        </div>
        <div className="w-[100%] flex flex-wrap gap-5 px-5 justify-center items-center py-8">
          {cate.map((item)=>(
            <Car name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type}/>
          ))}
        </div>
    </div>
  )
}

export default Home