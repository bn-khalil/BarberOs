import React, { use, useEffect, useState } from 'react'
import { FaCirclePlus } from 'react-icons/fa6'
import { MdDeleteForever } from "react-icons/md";
import { HttpStatusCode } from 'axios';
import type { Barber } from '../../services/types';
import { getAllBarbers } from '../../services/BarberService';

function BarberDashboard({setCurrentSession}:any) {
    const [loading, setLoading]=useState(false);
    const [barbers, setBarbers]=useState<Barber[]>([]);

    useEffect(()=>{
        setLoading(true);
        const asyncHndler = async ()=>{
            try {
                const response = await getAllBarbers();
                if (response != null && response.status == HttpStatusCode.Ok) {
                    setLoading(false);
                    setBarbers(response.data);
                }
            } catch (error: any) {
                
            }
        }
        asyncHndler();
    },[])
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
                {
                    barbers?.map((user, index)=>(
                        <li className={`flex justify-between items-center ${index % 2 == 1?"bg-main": "bg-main/20"} p-3  px-4 m-2 rounded-xl`}>
                            {/* <img src="" alt="" /> */}
                            <h1>{user.user.first_name + " " + user.user.last_name}</h1>
                            <span>{user.user.role}</span>
                            <span>{user.user.phone_number}</span>
                            <span>{user.user.createdAt.toString()}</span>
                            <div className="text-red-400 cursor-pointer">
                                <MdDeleteForever size={22} />
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
        <div className=""></div>
    </div>
  )
}

export default BarberDashboard