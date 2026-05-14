import React, { useState } from 'react'
import Button from '../../components/Button'
import { upgreateToBarber } from '../../services/BarberService';
import { HttpStatusCode } from 'axios';

export interface BarberData{
    experience_years: number,
    working_hours: number
}

function BarberForm({userId, setCurrentSession}:{userId:string, setCurrentSession:any}) {
    const [loading, setLoading]=useState(false);
    const [experienceYears, setExperienceYears]=useState(0);
    const [workingHours, setWorkingHours]=useState(0);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            let barberData = {
                experience_years: experienceYears,
                working_hours: workingHours
            }
            const response = await upgreateToBarber(userId, barberData);
            if (response.status == HttpStatusCode.Created) {
                setLoading(false);
                setCurrentSession("barbers");
            }
        } catch (error) {}
    }

    return (
        <form className="h-full text-left space-y-6 text-txt-col/60 overflow-auto no-scrollbar flex flex-col justify-center" onSubmit={handleSubmit}>
            <h1 className='text-white/80 text-2xl text-center'>Complete barber informations for <span className='text-gold'>khalil</span></h1>
            <div>
                <label className="block mb-2 text-md font-medium">Experience Years</label>
                <input
                type="number"
                value={experienceYears}
                onChange={(e) => setExperienceYears(e.target.valueAsNumber)}
                placeholder="Enter service price..."
                className="w-full p-3 border border-gold/50 focus:ring-1 focus:ring-gold focus:border-gold outline-none transition-all"
                required
                />
            </div>
            <div>
                <label className="block mb-2 text-md font-medium">Working Hours</label>
                <input
                type="number"
                value={workingHours}
                onChange={(e) => setWorkingHours(e.target.valueAsNumber)}
                placeholder="Enter service price..."
                className="w-full p-3 border border-gold/50 focus:ring-1 focus:ring-gold focus:border-gold outline-none transition-all"
                required
                />
            </div>
            <Button type="submit" label={!loading?"Switch": "Waiting..."} className="w-fit"/>
        </form>
  )
}

export default BarberForm