import React, { useEffect, useState } from 'react'

import { BASE_URL } from '../services/Api'
import { getAllServices } from '../services/ServiceService';
import type { ServiceData } from './admin/ServiceDashboard';

function Services() {
    const [services, setServices] = useState<ServiceData[]>([]);
    const [loading, setLoading] = useState(4);

    useEffect(()=>{
        const fetchData = async()=>{
            const response = await getAllServices();
            if (response) {
                setLoading(0);
                console.log(response.data)
                setServices(response.data);
            }
        }
        fetchData();
    },[])
  return (
    <section>
        <h1 className='text-white uppercase text-2xl my-10 opacity-90 font-bold '>SERVICES HUB</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-4">
            {
                !loading? (
                    services.map((service, index) => (
                    <div key={index} className="bg-main-second border border-white/5 rounded-sm overflow-hidden group hover:border-gold/50 transition-all duration-300 shadow-xl cursor-pointer">
                        <div className="relative w-full h-48 overflow-hidden">
                            <img 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                src={BASE_URL+ '/uploads/' +service.base_url} 
                                alt={service.title} 
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        </div>

                        <div className="p-4 flex flex-col gap-4">
                            <h3 className="text-white font-sans text-lg tracking-wide uppercase">
                                {service.title}
                            </h3>
                            
                            <div className="flex justify-between items-center border-t border-white/10 pt-4">
                                <button 
                                    type="button" 
                                    className="bg-gold text-main text-[10px] font-bold uppercase px-4 py-2 hover:bg-white transition-colors duration-300"
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))):(
                    Array.from({ length: 4 }).map(() => (
                        <div className="bg-main-second border border-white/5 rounded-sm overflow-hidden shadow-xl animate-pulse">
                            <div className="relative w-full h-48 bg-white/5 overflow-hidden">
                                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]"></div>
                            </div>
                            <div className="p-4 flex flex-col gap-4">
                                <div className="h-5 bg-white/10 rounded-full w-2/3"></div>
                                <div className="flex justify-between items-center border-t border-white/10 pt-4">
                                    <div className="bg-gold/20 h-8 w-24 rounded-sm"></div>
                                </div>
                            </div>
                        </div>
                    ))
                )
            }
        </div>
    </section>
  )
}

export default Services