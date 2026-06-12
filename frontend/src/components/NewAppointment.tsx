import bg from '../assets/val1.jpg'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '../routes/paths';
import { useAuth } from '../context/AuthContext';
import type { Appointment } from '../services/types';
import { useEffect, useState } from 'react';
import { getUserAppointment } from '../services/AppointmentService';
import { HttpStatusCode } from 'axios';
import { format, parseISO } from 'date-fns'; // Using date-fns for clean formatting

function NewAppointment({ setIsBook }: any) {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [appointment, setAppointment] = useState<Appointment | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const handle = async () => {
            if (user?.id) {
                try {
                    const response = await getUserAppointment(user.id);
                    if (response && response.status === HttpStatusCode.Ok) {
                        setAppointment(response.data);
                    }
                } catch (error) {
                    console.error("Error loading user appointment:", error);
                } finally {
                    setLoading(false);
                }
            } else if (user === null) {
                setLoading(false);
            }
        };
        
        handle();
    }, [user]);

    if (loading) {
        return <div className="w-full h-[22vh] bg-main-second/50 animate-pulse rounded-xl my-6"></div>;
    }
    const appointmentDate = appointment?.startedAt ? parseISO(appointment.startedAt as any) : null;

    return (
        <div>
            {appointment && appointmentDate ? (
                <div className="w-full min-h-[22vh] bg-main-second border border-txt-col/5 rounded-xl overflow-hidden relative my-6 flex items-center shadow-2xl">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gold z-10"></div>
                    
                    <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 items-center px-6 py-4 relative z-20">
                        

                        <div className="md:col-span-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                            
                            <div className="text-txt-col">
                                <span className="font-display text-xl md:text-2xl text-gold font-bold tracking-wide block mb-1">
                                    UPCOMING APPOINTMENT
                                </span>
                                
                                <div className="flex flex-col gap-0.5">
                                    <p className="text-xs uppercase tracking-wider text-txt-col/50 font-semibold">
                                        BARBER: <span className="text-white font-bold">BARBER</span>
                                    </p>
                                    <p className="text-xs uppercase tracking-wide text-txt-col/60 font-medium">
                                        DATE: <span className="text-txt-col/90">{format(appointmentDate, "EEEE, MMMM do")}</span>
                                    </p>
                                    <p className="text-xl md:text-2xl font-black text-gold mt-1 tracking-wide">
                                        {format(appointmentDate, "HH:mm")} <span className="text-sm font-bold">PM</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-4 flex flex-col gap-2 w-full max-w-[160px] ml-auto">
                            <button className="w-full py-2 text-xs font-bold uppercase tracking-wider border border-gold text-gold rounded hover:bg-gold/10 transition-all cursor-pointer">
                                Modify
                            </button>
                            <button className="w-full py-2 text-xs font-bold uppercase tracking-wider border border-txt-col/20 text-txt-col/40 rounded hover:border-red-500/40 hover:text-red-400 transition-all cursor-pointer">
                                Cancel
                            </button>
                        </div>

                    </div>
                </div>
            ) : (
                <div className='w-full h-[35vh] bg-main-second overflow-hidden relative my-6 rounded-xl border border-txt-col/5'>
                    <img className='w-full absolute top-0 left-0 h-full w-full object-cover opacity-40' src={bg} alt="" />
                    <div className="top-0 left-0 absolute w-1 h-full bg-gold z-10"></div>
                    <div className="relative w-full h-full bg-linear-to-r from-main-second from-25% to-main-second/50 px-6 py-3 flex flex-col justify-center">
                        <span className="text-white uppercase text-md mb-4 opacity-90 font-light">
                            Create New Appointment
                        </span>
                        <h1 className="font-display text-2xl md:text-4xl text-gold font-bold leading-tight mb-4">
                            READY TO LOOK <br /> YOUR BEST?
                        </h1>
                        <p className="text-txt-col text-sm md:text-md max-w-md mb-10 leading-relaxed">
                            You don't have any upcoming appointments. Schedule your next service with your favorite barber in minutes.
                        </p>
                        <div>
                            <Button type="button" label="Book Now" className="" onClick={() => setIsBook(true)} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NewAppointment;