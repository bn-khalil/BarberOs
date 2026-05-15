import React, { useEffect, useState } from 'react'
import type { User } from '../../services/types';
import { getAllClients, getAllUsers } from '../../services/UserService';
import { HttpStatusCode } from 'axios';

function ClientDashboard({setcurrectSession}:any) {
    const [loading, setLoading]=useState(false);
    const [user, setuser]=useState<User[]>([]);

    useEffect(()=>{
        setLoading(true);
        const asyncHndler = async ()=>{
            try {
                const response = await getAllUsers();
                console.log(user);
                if (response != null && response.status == HttpStatusCode.Ok) {
                    setLoading(false);
                    setuser(response.data);
                }
            } catch (error: any) {}
        }
        asyncHndler();
    },[])
    return (
    <div className="h-[78vh] w-full">
        <div className="w-full h-[80%] overflow-hidden rounded-2xl bg-main-second p-2 py-4 ">
            <ul className='w-full h-full overflow-y-auto no-scrollbar'>
                {
                    user?.map((user, index)=>(
                        <li className={`flex justify-between items-center bg-main text-txt-col/80 p-3  px-4 m-2 rounded-xl ${index % 2 == 1?"bg-main": "bg-main/20"}`}>
                            {/* <img src="" alt="" /> */}
                            <h1 className='w-1/4 font-bold text-sm font-display '>{user.first_name + " " + user.last_name}</h1>
                            <span className='w-1/4 text-xs font-bold  text-green-400/50'>{user.role}</span>
                            <span className='w-1/4 font-mono text-xs'>{user.phone_number}</span>
                            <span className='w-1/4 text-end text-xs'>{user.createdAt.toString()}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default ClientDashboard



