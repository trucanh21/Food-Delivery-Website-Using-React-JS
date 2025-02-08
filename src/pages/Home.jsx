import React from 'react'
import Nav from '../components/Nav'
import Categories from '../Category'
import Car from '../components/Car'

function Home() {
  return (
    <div className='bg-slate-200 w-full min-h-screen'>
        <Nav/>
        <div className='flex flex-wrap justify-center items-center gap-5 w-[100%]'>
          {Categories.map((item)=>{
            return <div className='bg-white w-[140px] h-[150px] flex flex-col items-start gap-5 rounded-lg shadow-xl p-5 justify-start text-[20px] font-semibold text-gray-600 hover:bg-green-300 cursor-pointer transition-all duration-200'>
              {item.icon}
              {item.name}
            </div>
            })}
        </div>
        <Car/>
    </div>
  )
}

export default Home