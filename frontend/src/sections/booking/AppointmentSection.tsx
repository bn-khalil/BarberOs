import React from 'react'
import { IoClose } from 'react-icons/io5'
import type { ServiceData } from '../admin/ServiceDashboard'
import { TbClockHour4 } from 'react-icons/tb'
import { Daypicker } from '../../components/DayPicker'

function AppointmentSection({services, loading, setIsBook}:{services:ServiceData[], loading: number, setIsBook: any}) {
  return (
    <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center overflow-hidden bg-black/40 backdrop-blur-sm border-white/10 shadow-2xl z-50 " onClick={()=>setIsBook(false)}>
        <div className="w-[92%] h-[85%] bg-main-second rounded-xl" onClick={(e) => e.stopPropagation()}>
            <div className="w-full text-txt-col flex items-center justify-between p-3 ">
                <h1 className="text-xl font-display">Create Appointment</h1>
                <IoClose className="text-gold font-bold" size={30} />
            </div>
            <div className="grid grid-cols-10 gap-2 border-[0.5px] border-gold/30 rounded-lg mx-4 mt-4">
                <div className="col-span-3 text-txt-col bg-main/30 rounded-l-lg">
                    <ul className="">
                        {
                            services.map(service=>(
                                <li className="m-2 p-2 text-sm border border-txt-col/13 rounded-lg hover:border-gold/40 cursor-pointer">
                                    <div className="flex justify-between items-center mb-2">
                                        <p className="font-bold">{service.title}</p>
                                        <input type="checkbox"/>
                                    </div>
                                    <div className="flex text-xs justify-between items-center">
                                        <div className="flex items-center ">
                                            <TbClockHour4 className="text-gold" />
                                            <span className="font-bold ml-1">{service.duration}m</span>
                                        </div>
                                        <span className="text-gold">{service.price}DH</span>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-span-4 flex flex-col items-center my-4">
                    <Daypicker/>
                </div>
                <div className="col-span-3 text-sm">
                    <ul className="text-center p-2">
                        <li className="text-txt-col p-2 m-2 border border-txt-col/13 rounded-lg cursor-pointer hover:border-gold/30 hover:text-gold">
                            <span>11:00 PM</span>
                        </li>
                        <li className="text-txt-col p-2 m-2 border border-txt-col/13 bg-main rounded-lg opacity-25 cursor-no-drop">
                            <span>12:00 PM</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppointmentSection