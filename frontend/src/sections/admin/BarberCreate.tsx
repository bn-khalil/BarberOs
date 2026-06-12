import React, { useEffect, useState } from 'react'
import { PiUserSwitchDuotone } from "react-icons/pi";
import BarberForm from './BarberForm';
import { HttpStatusCode } from 'axios';
import type { User } from '../../services/types';
import { getAllClients } from '../../services/UserService';

function BarberCreate({setCurrentSession}:any) {
    const [isForm, setIsFrom] = useState(false);
    const [userId, setUserId] = useState("");
    const [loading, setLoading]=useState(false);
    const [clients, setClients]=useState<User[]>([]);

    useEffect(()=>{
        setLoading(true);
        const asyncHndler = async ()=>{
            try {
                const response = await getAllClients();
                if (response != null && response.status == HttpStatusCode.Ok) {
                    setLoading(false);
                    setClients(response.data);
                }
            } catch (error: any) {}
        }
        asyncHndler();
    },[])
    return (
        <div className="h-[78vh] w-full">
            <div className="w-full h-[80%] overflow-hidden rounded-2xl bg-main-second p-2 py-4 ">
                    {
                        isForm ? (
                            <div className="w-1/3 mx-auto h-full">
                                <BarberForm userId={userId} setCurrentSession={setCurrentSession}/>
                            </div>
                        ):(
                            
                            <ul className='w-full h-full overflow-y-auto no-scrollbar'>
                                {
                                    clients?.map((user, index)=>(
                                        <li className={`flex justify-between items-center bg-main p-3 text-txt-col/80 px-4 m-2 rounded-xl ${index % 2 == 1?"bg-main": "bg-main/20"}`}>
                                            {/* <img src="" alt="" /> */}
                                            <h1 className='w-1/5 font-bold text-sm font-display '>{user.first_name + " " + user.last_name}</h1>
                                            <span className='w-1/5 text-xs font-bold  text-green-400/50'>{user.role}</span>
                                            <span className='w-1/5 font-mono text-xs'>{user.phone_number}</span>
                                            <span className='w-1/5 text-end text-xs'>{user.createdAt.toString()}</span>
                                            <div className="w-1/5 text-green-400 flex items-center justify-end">
                                                <div className="px-2 cursor-pointer" onClick={()=>{setIsFrom(true); setUserId(user.id)}}>switch</div>
                                                <PiUserSwitchDuotone className='cursor-pointer' size={22} onClick={()=>{setIsFrom(true); setUserId(user.id)}} />
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>

                        )
                    }
            </div>



        </div>
  )
}

export default BarberCreate