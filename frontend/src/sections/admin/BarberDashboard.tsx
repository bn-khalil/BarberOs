import React, { use, useEffect, useState } from 'react'
import { FaCirclePlus } from 'react-icons/fa6'
import { MdDeleteForever } from "react-icons/md";
import { HttpStatusCode } from 'axios';
import type { Barber } from '../../services/types';
import { deleteBarber, getAllBarbers } from '../../services/BarberService';

function BarberDashboard({setCurrentSession}:any) {
    const [loading, setLoading]=useState(false);
    const [message, setMessage]=useState("");
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

    const handleDelete = async(userId: string) => {
        try {
            const response = await deleteBarber(userId);
            console.log(response)
            if (response && response.status == HttpStatusCode.Ok) {
                setBarbers((prevBarbers) => prevBarbers.filter(user => user.id !== userId));
                return ;
            }
            setMessage("Something wrong deleting barber failed!");
        } catch (error: any) {
        }
    }
  return (
    <div className='w-full h-[80vh] relative'>
        <p className={` absolute bottom-10 right-1 text-main/50 rounded-2xl bg-red-500 ${message ? "px-4 py-1":""}`}>{message}</p>
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
                    barbers?.map((barber, index)=>(
                        <li className={`flex justify-between items-center ${index % 2 == 1?"bg-main": "bg-main/20"} p-3  px-4 m-2 rounded-xl`}>
                            {/* <img src="" alt="" /> */}
                            <h1>{barber.user.first_name + " " + barber.user.last_name}</h1>
                            <span>{barber.user.role}</span>
                            <span>{barber.user.phone_number}</span>
                            <span>{barber.user.createdAt.toString()}</span>
                            <div className="text-red-400 cursor-pointer" onClick={()=>handleDelete(barber.id)}>
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