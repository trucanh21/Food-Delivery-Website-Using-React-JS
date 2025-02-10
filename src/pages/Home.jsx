import React, { useState } from 'react'
import Nav from '../components/Nav'
import Categories from '../Category'
import Car from '../components/Car'
import { food_items } from '../food'
import { RxCrossCircled } from "react-icons/rx";
import Car2 from '../components/Car2';
import { useSelector } from 'react-redux'

function Home() {
  let [cate, setCate] = useState(food_items);
  let [searchTerm, setSearchTerm] = useState("");
  let [isCartOpen, setIsCartOpen] = useState(false); // State quản lý giỏ hàng
  

  function filter(category) {
    if (category === "All") {
      setCate(food_items);
    } else {
      let newList = food_items.filter((item) => item.food_category === category);
      setCate(newList);
    }
  }

  function handleSearch(event) {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    if (term === "") {
      setCate(food_items);
    } else {
      let filteredItems = food_items.filter((item) => item.food_name.toLowerCase().includes(term));
      setCate(filteredItems);
    }
  }
  let items = useSelector(state=>state.cart)
  console.log(items);
  let subtotal = items.reduce((total,item)=>total+item.price,0)
  console.log(subtotal);
  let deliveryfee = 20;
  let taxes=subtotal*0.5/100;
  let total= Math.floor(subtotal+deliveryfee+taxes)

  return (
    <div className='bg-slate-200 w-full min-h-screen'>
        <Nav searchTerm={searchTerm} handleSearch={handleSearch} openCart={() => setIsCartOpen(true)} />
        
        <div className='flex flex-wrap justify-center items-center gap-5 w-[100%]'>
          {Categories.map((item, index) => (
            <div key={index} className='bg-white w-[140px] h-[150px] flex flex-col items-start gap-5 rounded-lg 
            shadow-xl p-5 justify-start text-[20px] font-semibold text-gray-600 hover:bg-green-300 
            cursor-pointer transition-all duration-200' onClick={() => filter(item.name)}>
              {item.icon}
              {item.name}
            </div>
          ))}
        </div>

        <div className="w-[100%] flex flex-wrap gap-5 px-5 justify-center items-center py-8">
          {cate.map((item) => (
            <Car key={item.id} name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type} />
          ))}
        </div>
        <div className={`w-full md:w-[40vw] h-[100%] overflow-auto flex flex-col items-center fixed top-0 right-0 bg-white shadow-xl duration-500 p-6 transform transition-transform ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}>
          <header className='w-[100%] flex justify-between items-center'>
            <span className='text-green-400 text-[18px] font-semibold'>Order Item</span>
            <RxCrossCircled 
              className='w-[20px] h-[20px] text-green-400 text-[18px] font-semibold cursor-pointer hover:text-gray-600' 
              onClick={() => setIsCartOpen(false)}
            />
          </header>
          {items.length>0 ?(
          <>
          <div className='w-full mt-9 flex flex-col gap-8'>
            {items.map((item)=>(
              <Car2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />
            ))}
          </div>
          <div className='w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-4 p-8'>
            <div className='font-semibold flex justify-between text-lg'>
              <span className='text-gray-600'>Subtotal</span>
              <span className='text-green-400'>{subtotal}</span>
            </div>
            <div className='font-semibold flex justify-between text-lg'>
              <span className='text-gray-600'>Delivery Free</span>
              <span className='text-green-400'>{deliveryfee}</span>
            </div>
            <div className='font-semibold flex justify-between text-lg'>
              <span className='text-gray-600'>Taxes</span>
              <span className='text-green-400'>{taxes}</span>
            </div>
          </div>
          <div className='font-semibold flex justify-between items-center w-full text-2xl p-7'>
            <span className='text-gray-600'>Total</span>
            <span className='text-green-400'>{total}</span>
          </div>
          <button className='w-[80%] p-3 rounded-lg bg-green-500 text-white hover:bg-green-400 transition-all justify-center flex ite'>Place order</button>
          </>):(<div  className='text-green-500 text-lg font-semibold'>Empty cart</div>)}
        </div>
    </div>
  )
}

export default Home
