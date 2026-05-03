import React from 'react'

import {services} from './ServiceSection'
import Button from '../components/Button'

function Services() {
  return (
    <section>
        <h1 className='text-white uppercase text-2xl my-10 opacity-90 font-bold '>SERVICES HUB</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-4">
            {services.map((service, index) => (
                <div key={index} className="bg-main-second border border-white/5 rounded-sm overflow-hidden group hover:border-gold/50 transition-all duration-300 shadow-xl">
                    <div className="relative w-full h-48 overflow-hidden">
                        <img 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                            src={service.image} 
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
            ))}
        </div>
    </section>
  )
}

export default Services