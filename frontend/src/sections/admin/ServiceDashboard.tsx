import { useEffect, useState } from 'react'
import { FaCirclePlus } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { getAllServices } from '../../services/ServiceService';
import { BASE_URL } from '../../services/Api';

export interface ServiceData{
    title: string,
    description: string,
    price: number,
    duration: number,
    base_url: string
}

const renderLoadingItems = (number: number) => {
    return Array.from({ length: number }).map((_, index) => (
        <div key={index} className="bg-main-second border border-white/5 overflow-hidden shadow-xl">
            <div className="relative w-full h-40 bg-white/5 animate-pulse">
                <div className="w-full h-full bg-linear-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
            </div>

            <div className="p-2 flex gap-4 items-center justify-between">
                <div className="h-4 w-24 bg-white/10 rounded animate-pulse"></div>
                <div className="h-4 w-4 bg-gold/20 rounded-sm animate-pulse"></div>
            </div>
        </div>
    ));
};

function ServiceDashboard({setCurrentSession}:any) {

    const [services, setServices] = useState<ServiceData[]>([]);
    const [loading, setLoading] = useState(18);

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
    <div className=' overflow-hidden'>
        <div className="flex items-center justify-between">
            <h1 className='font-sans text-gold text-xl'>All Services</h1>
            <div className="flex items-center font-bold bg-gold text-main-second p-2 px-4 cursor-pointer" onClick={()=>setCurrentSession('create service')}>
                <p>
                    Add
                </p>
                <div className="ml-2">
                    <FaCirclePlus/>
                </div>
            </div>
        </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 py-4 overflow-y-auto custom-scrollbar no-scrollbar">
                {
                    !loading ? (
                        services?.map((service, index) => (
                            <div key={index} className="bg-main-second border border-white/5 rounded-sm overflow-hidden group hover:border-gold/50 transition-all duration-300 shadow-xl cursor-pointer">
                                <div className="relative w-full h-40 overflow-hidden">
                                    <img 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                        src={BASE_URL+ '/uploads/' +service.base_url} 
                                        alt={service.title} 
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                </div>
    
                                <div className="p-2 flex gap-4 items-center justify-between">
                                    <h3 className="text-txt-col/70 font-sans text-xs tracking-wide uppercase">
                                        {service.title}
                                    </h3>
                                    <FaEdit className='text-gold'/>
                                </div>
                            </div>
                        ))
                    ):
                    renderLoadingItems(loading)
                }
            </div>
    </div>
  )
}

export default ServiceDashboard