import React, { useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { TbClockHour4 } from 'react-icons/tb'
import { Daypicker } from '../../components/DayPicker'
import type { Barber, ServiceData, Slots } from '../../services/types'
import { getAllBarbers } from '../../services/BarberService'
import { HttpStatusCode } from 'axios'
import { createAppointment, getAllSlots } from '../../services/AppointmentService'
import { format } from 'date-fns'
import { useAuth } from '../../context/AuthContext'
import { Navigate, useNavigate } from 'react-router-dom'
import { PATHS } from '../../routes/paths'

const times: string[] =[
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:30',
    '17:30',
    '18:30',
    '18:30',
    '19:30',
    '19:30',
    '20:30',
    '20:30',
]

function AppointmentSection({services, loading, setIsBook}:{services:ServiceData[], loading: number, setIsBook: any}) {
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    // const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [selectedDay, setSelectedDay] = useState<Date>();
    const [barbers, setBarbers] = useState<Barber[]>([]);
    const [selectedBarberId, setSelectedBarberId] = useState<string | null>();
    const [slots, SetSlots] = useState<Slots[]>([]);
    const [message, setMessage] = useState<string>("");
    const {user} = useAuth();
    const navigate = useNavigate();

    const IsAvailable = (time: string) => {
        if (slots.find((ele)=> time >= ele.slotStart && time < ele.slotEnds)) {
            return true;
        }
        return false;
    }

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
            console.log(formattedDay)
            const response = await getAllSlots(nextBarberId, formattedDay);

            if (response && response.status === HttpStatusCode.Ok) {
                SetSlots(response.data);
                console.log(response.data)
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

    const handleAppointments = async (e: React.FormEvent) =>{
        e.preventDefault();

        if (!user || !user.id) {
            <Navigate to={PATHS.LOGIN} state={{ from: location }} replace/>
            return;
        }
        if (!selectedBarberId){
            setMessage("plese select a barber");
            return;
        }
        if (!selectedDay){
            setMessage("plese select a date");
            return;
        }
        if (!selectedServices || selectedServices.length == 0 ){
            setMessage("plese select at least one service");
            return;
        }
        if (!selectedServices || selectedServices.length == 0 ){
            setMessage("plese select at least one service");
            return;
        }
        if (!selectedTime) {
            setMessage("Please select an available time slot");
            return;
        }

        const [hours, minutes] = selectedTime.split(':').map(Number);
        const finalStartAt = new Date(selectedDay);
        finalStartAt.setHours(hours, minutes, 0, 0);

        const appointmentData = {
            costmerId: user.id,
            barberId: selectedBarberId,
            status:"PENDING",
            serviceIds: selectedServices,
            startedAt: finalStartAt
        }

        try {
            const response = await createAppointment(appointmentData);
            if (response && response.status == HttpStatusCode.Created) {
                setIsBook(false);
            }
        } catch (error: any) {
            if (Array.isArray(error)) {
                setMessage(error[0]);
            } else {
                setMessage(error);
            }
        }
    }
  return (
    <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center overflow-hidden bg-black/40 backdrop-blur-sm border-white/10 shadow-2xl z-50 " onClick={()=>setIsBook(false)}>
        <div className="w-[92%] h-[88%] bg-main-second rounded-xl" onClick={(e) => e.stopPropagation()}>
            <p className='absolute left-1/3 text-red-400 p-2'>{message}</p>
            <div className="w-full text-txt-col flex items-center justify-between p-3 ">
                <h1 className="text-xl font-display">Create Appointment</h1>
                <IoClose className="text-gold font-bold" size={30} onClick={()=>setIsBook(false)} />
            </div>
            <div className="grid grid-cols-10 gap-2 border-[0.5px] border-gold/30 rounded-lg mx-4 mt-4">
                <div className="col-span-3 text-txt-col bg-main/30 rounded-l-lg">
                    <ul className="">
                        {
                            services.map((service) =>{
                                const isSelected = selectedServices.includes(service.id)
                                return (
                                    <li className={`m-2 p-2 text-sm  rounded-lg cursor-pointer ${isSelected?"border border-gold":"border border-txt-col/13 hover:border-gold/40"}`} onClick={() => selectService(service.id)}>
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
               {
                    times.map((time, index) => {
                        const isReserved = IsAvailable(time); 
                        const isCurrentSelection = selectedTime === time;

                        if (isReserved) {
                            return (
                                <li 
                                    key={`booked-${time}-${index}`} 
                                    className="text-txt-col p-2 m-2 border text-xs border-txt-col/13 bg-main rounded-lg opacity-25 cursor-no-drop"
                                >
                                    <span>{time}</span>
                                </li>
                            );
                        } else {
                            return (
                                <li 
                                    key={`free-${time}-${index}`}
                                    onClick={() => setSelectedTime(time)}
                                    className={`p-2 m-2 border text-xs rounded-lg cursor-pointer transition-all ${
                                        isCurrentSelection 
                                            ? "border-gold text-gold bg-gold/10 font-bold shadow-md shadow-gold/5" 
                                            : "border-txt-col/13 text-txt-col hover:border-gold/30 hover:text-gold"
                                    }`}
                                >
                                    <span>{time}</span>
                                </li>
                            );
                        }
                    })
                }
            </ul>
            <div className="w-full flex items-center justify-end">
                <form onSubmit={handleAppointments}>
                    <button type='submit' className='mr-5 p-2 text-xs font-bold uppercase transition-all duration-300 cursor-pointer bg-gold'>create an appointment</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AppointmentSection