import React from 'react'
import { FaCirclePlus } from 'react-icons/fa6'

function BarberDashboard({setCurrentSession}:any) {
  return (
    <div className='w-full h-full overflow-hidden'>
        <div className="flex items-center justify-between py-4">
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
        <div className="w-full h-[80%] rounded-2xl bg-main-second  overflow-y-auto px-4 custom-scrollbar no-scrollbar ">
            <ul>
                <li>
                    {/* <img src="" alt="" /> */}
                    <h1>KHALIL BEN TOUDA</h1>
                    
                </li>
            </ul>
        </div>
        <div className=""></div>
    </div>
  )
}

export default BarberDashboard