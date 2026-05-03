import React from 'react'
import bg from '../assets/val1.jpg'
import Button from './Button'

function NewAppointment() {
  return (
    <div className='w-full h-[35vh] bg-main-second overflow-hidden relative my-6'>
        <img className='w-full absolute' src={bg} alt="" />
        <div className="top-0 left-0 absolute w-1 h-full bg-gold z-10"></div>
        <div className=" relative w-full h-full bg-linear-to-r from-main-second from-25% to-main-second/50 px-6 py-3 ">
            <span className="text-white uppercase text-md mb-4 opacity-90 font-light ">
                Create New Appointment
            </span>
            <h1 className="font-display text-2xl md:text-4xl text-gold font-bold leading-tight mb-4">
                READY TO LOOK <br /> YOUR BEST?
            </h1>
            <p className="text-txt-col text-sm md:text-md max-w-md mb-10 leading-relaxed">
                You don't have any upcoming appointments. Schedule your next service with your favorite barber in minutes.
            </p>
            <Button type="button" label="Book Now" className=""/>
        </div>
    </div>
  )
}

export default NewAppointment