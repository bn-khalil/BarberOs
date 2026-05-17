import React, { useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { TbClockHour4 } from 'react-icons/tb'
import { Daypicker } from '../../components/DayPicker'
import type { Barber, ServiceData, Slots } from '../../services/types'
import { getAllBarbers } from '../../services/BarberService'
import { HttpStatusCode } from 'axios'
import { getAllSlots } from '../../services/AppointmentService'
import { format } from 'date-fns'

function AppointmentSection({services, loading, setIsBook}:{services:ServiceData[], loading: number, setIsBook: any}) {
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [selectedDay, setSelectedDay] = useState<Date>();
    const [barbers, setBarbers] = useState<Barber[]>([]);
    const [selectedBarberId, setSelectedBarberId] = useState<string | null>();
    const [slots, SetSlots] = useState<Slots[]>([]);

    const handleSlots = async (clickedId: string) => {
        if (!selectedDay) {
            console.error("Please pick a day on the calendar first!");
            return;
        }

        let nextBarberId: string | null = clickedId;
        if (selectedBarberId === clickedId) {
            nextBarberId = null;
        }

        setSelectedBarberId(nextBarberId);
        if (!nextBarberId) {
            SetSlots([]);
            return;
        }

        try {
            const formattedDay: string = format(selectedDay, "yyyy-MM-dd");
            
            console.log(nextBarberId);
            const response = await getAllSlots(nextBarberId, formattedDay);
            
            if (response && response.status === HttpStatusCode.Ok) {
                SetSlots(response.data);
                console.log(response.data);
            }
        } catch (error: any) {
            SetSlots([]);
        }
    };

    

    const selectService = (title: string) => {
        setSelectedServices((prev)=>
            prev.includes(title) ? prev.filter(s => s !== title) : [... prev, title]
        ) 
    }

    useEffect(()=>{
        const asyncHndler = async ()=>{
            try {
                const response = await getAllBarbers();
                if (response != null && response.status == HttpStatusCode.Ok) {
                    setBarbers(response.data);
                }
            } catch (error: any) {
            }
        }
        asyncHndler();
    },[])
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
                            services.map((service) =>{
                                const isSelected = selectedServices.includes(service.title)
                                return (
                                    <li className={`m-2 p-2 text-sm  rounded-lg cursor-pointer ${isSelected?"border border-gold":"border border-txt-col/13 hover:border-gold/40"}`} onClick={() => selectService(service.title)}>
                                        <div className="flex justify-between items-center mb-2">
                                            <p className="font-bold capitalize">{service.title}</p>
                                            <input type="checkbox" checked={isSelected} className=" appearance-none  w-4 h-4  border border-txt-col/30  rounded  bg-transparent  cursor-pointer  relative transition-all checked:bg-gold  checked:border-gold after:content-[''] after:absolute after:left-1.25 after:top-0.5 after:w-1 after:h-2 after:border-r-2 after:border-b-2  after:border-black after:rotate-45 after:opacity-0 checked:after:opacity-100"/>
                                        </div>
                                        <div className="flex text-xs justify-between items-center">
                                            <div className="flex items-center ">
                                                <TbClockHour4 className="text-gold" />
                                                <span className="font-bold ml-1">{service.duration}m</span>
                                            </div>
                                            <span className="text-gold">{service.price}DH</span>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="col-span-4 flex flex-col items-center my-4">
                    <Daypicker selectedDay={selectedDay} setSelectedDay={setSelectedDay}/>
                </div>
                <div className="col-span-3 text-sm">
                    <ul>
                        {
                            barbers.map((barber) =>(
                                <li className={`m-2 p-2 text-sm  rounded-lg cursor-pointer text-txt-col ${barber.id === selectedBarberId ?"border border-gold":"border border-txt-col/13 hover:border-gold/40"}`} onClick={()=> handleSlots(barber.id)}>
                                    <div className="flex justify-between items-center mb-2">
                                        <p className="font-bold text-sm capitalize">{barber.user.first_name + " " + barber.user.last_name} </p>
                                    </div>
                                    <div className="flex text-xs justify-between items-center">
                                        <span className={`font-bold uppercase text-[9px] text-txt-col/40 flex items-center`}><div className={`w-2.5 h-2.5 mr-2 rounded-full  ${barber.status === "unavailable"? "bg-red-400":"bg-green-400"}`}></div> {barber.status}</span>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <ul className="text-center p-2 grid grid-cols-8">
                <li className="text-txt-col p-2 m-2 border border-txt-col/13 rounded-lg cursor-pointer hover:border-gold/30 hover:text-gold">
                    <span>11:00 PM</span>
                </li>
                <li className="text-txt-col p-2 m-2 border border-txt-col/13 bg-main rounded-lg opacity-25 cursor-no-drop">
                    <span>12:00 PM</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default AppointmentSection