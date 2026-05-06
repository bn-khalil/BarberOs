import React from 'react'
import { FaCirclePlus } from "react-icons/fa6";
import {services} from '../ServiceSection'
import { FaEdit } from "react-icons/fa";


function ServiceDashboard() {
  return (
    <div className=''>
        <div className="flex items-center justify-between">
            <h1 className='font-sans text-gold text-xl'>Services</h1>
            <div className="flex items-center font-bold bg-gold text-main-second p-2 cursor-pointer">
                <p>
                    Add
                </p>
                <div className="ml-2">
                    <FaCirclePlus/>
                </div>
            </div>
        </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 py-4">
                {services.map((service, index) => (
                    <div key={index} className="bg-main-second border border-white/5 rounded-sm overflow-hidden group hover:border-gold/50 transition-all duration-300 shadow-xl cursor-pointer">
                        <div className="relative w-full h-40 overflow-hidden">
                            <img 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                src={service.image} 
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
                ))}
            </div>
    </div>
  )
}

export default ServiceDashboard