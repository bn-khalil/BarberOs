import React from 'react'
import { FaCirclePlus } from 'react-icons/fa6'
import { MdDeleteForever } from "react-icons/md";


function BarberDashboard({setCurrentSession}:any) {
  return (
    <div className='w-full h-[80vh]'>
        <div className="flex items-center justify-between mb-4">
            <h1 className='font-sans text-gold text-xl'>All Barbers</h1>
            <div className="flex items-center font-bold bg-gold text-main-second p-2 px-4 cursor-pointer" onClick={()=>setCurrentSession('create barber')}>
                <p>
                    Add
                </p>
                <div className="ml-2">
                    <FaCirclePlus/>
                </div>
            </div>
        </div>
        <div className="w-full h-[80%] overflow-hidden rounded-2xl bg-main-second p-2 py-4 ">
            <ul className='w-full h-full overflow-y-auto no-scrollbar'>
                <li className='flex justify-between bg-main p-3  px-4 m-2 rounded-xl'>
                    {/* <img src="" alt="" /> */}
                    <h1>KHALIL BEN TOUDA</h1>
                    <span>BARBER</span>
                    <span>06666666</span>
                    <span>Wed 13 May 10:58</span>
                    <div className="text-red-400 cursor-pointer">
                        <MdDeleteForever size={22} />
                    </div>
                </li>
                <li className='flex justify-between bg-main/20 p-3 px-4 m-2 rounded-xl'>
                    {/* <img src="" alt="" /> */}
                    <h1>KHALIL BEN TOUDA</h1>
                    <span>BARBER</span>
                    <span>06666666</span>
                    <span>Wed 13 May 10:58</span>
                    <div className="text-red-400 cursor-pointer">
                        <MdDeleteForever size={22} />
                    </div>
                </li>

                <li className='flex justify-between bg-main p-3 px-4 m-2 rounded-xl'>
                    {/* <img src="" alt="" /> */}
                    <h1>KHALIL BEN TOUDA</h1>
                    <span>BARBER</span>
                    <span>06666666</span>
                    <span>Wed 13 May 10:58</span>
                    <div className="text-red-400 cursor-pointer">
                        <MdDeleteForever size={22} />
                    </div>
                </li>
                <li className='flex justify-between bg-main/20 p-3 px-4 m-2 rounded-xl'>
                    {/* <img src="" alt="" /> */}
                    <h1>KHALIL BEN TOUDA</h1>
                    <span>BARBER</span>
                    <span>06666666</span>
                    <span>Wed 13 May 10:58</span>
                    <div className="text-red-400 cursor-pointer">
                        <MdDeleteForever size={22} />
                    </div>
                </li>

                <li className='flex justify-between bg-main p-3 px-4 m-2 rounded-xl'>
                    {/* <img src="" alt="" /> */}
                    <h1>KHALIL BEN TOUDA</h1>
                    <span>BARBER</span>
                    <span>06666666</span>
                    <span>Wed 13 May 10:58</span>
                    <div className="text-red-400 cursor-pointer">
                        <MdDeleteForever size={22} />
                    </div>
                </li>
                <li className='flex justify-between bg-main/20 p-3 px-4 m-2 rounded-xl'>
                    {/* <img src="" alt="" /> */}
                    <h1>KHALIL BEN TOUDA</h1>
                    <span>BARBER</span>
                    <span>06666666</span>
                    <span>Wed 13 May 10:58</span>
                    <div className="text-red-400 cursor-pointer">
                        <MdDeleteForever size={22} />
                    </div>
                </li>

                <li className='flex justify-between bg-main p-3 px-4 m-2 rounded-xl'>
                    {/* <img src="" alt="" /> */}
                    <h1>KHALIL BEN TOUDA</h1>
                    <span>BARBER</span>
                    <span>06666666</span>
                    <span>Wed 13 May 10:58</span>
                    <div className="text-red-400 cursor-pointer">
                        <MdDeleteForever size={22} />
                    </div>
                </li>
                <li className='flex justify-between bg-main/20 p-3 px-4 m-2 rounded-xl'>
                    {/* <img src="" alt="" /> */}
                    <h1>KHALIL BEN TOUDA</h1>
                    <span>BARBER</span>
                    <span>06666666</span>
                    <span>Wed 13 May 10:58</span>
                    <div className="text-red-400 cursor-pointer">
                        <MdDeleteForever size={22} />
                    </div>
                </li>

                <li className='flex justify-between bg-main p-3 px-4 m-2 rounded-xl'>
                    {/* <img src="" alt="" /> */}
                    <h1>KHALIL BEN TOUDA</h1>
                    <span>BARBER</span>
                    <span>06666666</span>
                    <span>Wed 13 May 10:58</span>
                    <div className="text-red-400 cursor-pointer">
                        <MdDeleteForever size={22} />
                    </div>
                </li>

                <li className='flex justify-between bg-main/20 p-3 px-4 m-2 rounded-xl'>
                    {/* <img src="" alt="" /> */}
                    <h1>KHALIL BEN TOUDA</h1>
                    <span>BARBER</span>
                    <span>06666666</span>
                    <span>Wed 13 May 10:58</span>
                    <div className="text-red-400 cursor-pointer">
                        <MdDeleteForever size={22} />
                    </div>
                </li>

                <li className='flex justify-between bg-main p-3 px-4 m-2 rounded-xl'>
                    {/* <img src="" alt="" /> */}
                    <h1>KHALIL BEN TOUDA</h1>
                    <span>BARBER</span>
                    <span>06666666</span>
                    <span>Wed 13 May 10:58</span>
                    <div className="text-red-400 cursor-pointer">
                        <MdDeleteForever size={22} />
                    </div>
                </li>
            </ul>
        </div>
        <div className=""></div>
    </div>
  )
}

export default BarberDashboard