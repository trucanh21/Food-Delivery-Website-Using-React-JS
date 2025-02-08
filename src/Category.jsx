import { TiThSmall } from "react-icons/ti";
import { MdFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { CiBowlNoodles } from "react-icons/ci";
import { FaPizzaSlice } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineFoodBank } from "react-icons/md";



export const Categories = [
  {
    id:"1",
    name:"All",
    icon:<TiThSmall className="w-[60px] h-[60px] text-green-600"/>
  },
  {
    id:"2",
    name:"Breakfast",
    icon:<MdFreeBreakfast className="w-[60px] h-[60px] text-green-600" />
  },
  {
    id:"3",
    name:"soups",
    icon:<LuSoup className="w-[60px] h-[60px] text-green-600"/>
  },
  {
    id:"4",
    name:"pasta",
    icon:<CiBowlNoodles className="w-[60px] h-[60px] text-green-600" />
  },
  {
    id:"5",
    name:"main-course",
    icon:<MdOutlineFoodBank className="w-[60px] h-[60px] text-green-600"/>
  },
  {
    id:"6",
    name:"pizza",
    icon:<FaPizzaSlice className="w-[60px] h-[60px] text-green-600" />
  },
  {
    id:"7",
    name:"burger",
    icon:<FaHamburger className="w-[60px] h-[60px] text-green-600"/>
  },
]

export default Categories