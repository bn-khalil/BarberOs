import { useState } from 'react';
import logo from '../assets/main-logo.png'
import { PATHS } from '../routes/paths'
import { LuLayoutDashboard } from "react-icons/lu";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { GoHomeFill } from "react-icons/go";
import { GoHome } from "react-icons/go";

import { FaCalendarAlt } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";

import { HiOutlineUsers } from "react-icons/hi2";
import { HiUsers } from "react-icons/hi2";

import { FaRegUser } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import { FaHandScissors } from "react-icons/fa6";
import { FaRegHandScissors } from "react-icons/fa6";

import { IoSettingsSharp } from "react-icons/io5";


function SideBar({setcurrectSession}: any) {
  const [isHover, setIsHover] = useState(0);
  return (
    <div className='col-span-2 h-full border-r border-r-gold flex flex-col justify-between'>
        <div className="">
            <img src={logo} className='w-35 my-2 mx-4' alt="" />
            <ul className='pt-5'>
                <li className='py-2 hover:pl-6 px-4 cursor-pointer text-sm hover:font-bold hover:border-l hover:border-l-gold hover:text-white hover:bg-gold/30 transition-all duration-100 opacity-50 hover:opacity-100 flex items-center' 
                onMouseEnter={()=> setIsHover(1)} 
                onMouseLeave={()=> setIsHover(0)}
                onClick={()=> setcurrectSession('dashboard')}>
                    {
                    isHover == 1 ? <TbLayoutDashboardFilled className='size-5' /> : <LuLayoutDashboard className='size-5' />
                    }
                    <span className='ml-2'>Dashboard</span>
                </li>
                <li className='py-2 hover:pl-6 px-4 cursor-pointer text-sm hover:font-bold hover:border-l hover:border-l-gold hover:text-white hover:bg-gold/30 transition-all duration-100 opacity-50 hover:opacity-100 flex items-center' 
                onMouseEnter={()=> setIsHover(2)} 
                onMouseLeave={()=> setIsHover(0)}
                onClick={()=> setcurrectSession('home')}>
                    {
                    isHover == 2 ? <GoHomeFill className='size-5' /> : <GoHome className='size-5' />
                    }
                    <span className='ml-2'>Home</span>
                </li>
                <li className='py-2 hover:pl-6 px-4 cursor-pointer text-sm hover:font-bold hover:border-l hover:border-l-gold hover:text-white hover:bg-gold/30 transition-all duration-100 opacity-50 hover:opacity-100 flex items-center' 
                onMouseEnter={()=> setIsHover(3)} 
                onMouseLeave={()=> setIsHover(0)} 
                onClick={()=> setcurrectSession('services')}>
                    {
                    isHover == 3 ? <FaHandScissors className='size-5' /> : <FaRegHandScissors className='size-5' />
                    }
                    <span className='ml-2'>Services</span>
                </li>

                <li className='py-2 hover:pl-6 px-4 cursor-pointer text-sm hover:font-bold hover:border-l hover:border-l-gold hover:text-white hover:bg-gold/30 transition-all duration-100 opacity-50 hover:opacity-100 flex items-center' 
                onMouseEnter={()=> setIsHover(4)} 
                onMouseLeave={()=> setIsHover(0)}
                onClick={()=> setcurrectSession('barbers')}>
                    {
                    isHover == 4 ? <HiUsers className='size-5' /> : <HiOutlineUsers className='size-5' />
                    }
                    <span className='ml-2'>Barbers</span>
                </li>

                <li className='py-2 hover:pl-6 px-4 cursor-pointer text-sm hover:font-bold hover:border-l hover:border-l-gold hover:text-white hover:bg-gold/30 transition-all duration-100 opacity-50 hover:opacity-100 flex items-center' 
                onMouseEnter={()=> setIsHover(5)} 
                onMouseLeave={()=> setIsHover(0)}
                onClick={()=> setcurrectSession('clients')}>
                    {
                    isHover == 5 ? <FaUser className='size-5' /> : <FaRegUser className='size-5' />
                    }
                    <span className='ml-2'>Clients</span>
                </li>

                <li className='py-2 hover:pl-6 px-4 cursor-pointer text-sm hover:font-bold hover:border-l/50 hover:border-l-gold hover:text-white hover:bg-gold/30 transition-all duration-100 opacity-50 hover:opacity-100 flex items-center' 
                onMouseEnter={()=> setIsHover(6)} 
                onMouseLeave={()=> setIsHover(0)}
                onClick={()=> setcurrectSession('appointments')}>
                    {
                    isHover == 6 ? <FaCalendar className='size-5' /> : <FaCalendarAlt className='size-5' />
                    }
                    <span className='ml-2'>Appointments</span>
                </li>
            </ul>
        </div>
        <div className="p-4 flex items-center opacity-50 border-t border-gold/30 cursor-pointer hover:opacity-100 transition-opacity"
        onClick={()=> setcurrectSession('settings')}>
            <IoSettingsSharp className='size-5' /> 
            <p className='text-txt-col px-2'>Settings</p>
        </div>
    </div>
  )
}

export default SideBar;