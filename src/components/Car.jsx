import React from 'react'
import image1 from "../assets/img/image1.avif"
import { LuLeafyGreen } from "react-icons/lu";


function Car() {
  return (
    <div>
        <div className='w-'>
            <img src={image1} alt='' />
        </div>
        <div>
            Pancakes
        </div>
        <div>
            <div>
            200.000đ
            </div>
            <div><LuLeafyGreen /><span>Veg</span></div>
        </div>
        
    </div>
  )
}

export default Car