import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export function Daypicker({selectedDay, setSelectedDay}:{selectedDay:Date | undefined, setSelectedDay:any}) {
    return (
        <DayPicker
            animate
            navLayout="around"
            mode="single"
            className='text-txt-col/50 rounded-lg shadow-sm w-fit p-5 bg-main/30 font-bold h-100'
            classNames={{
                    today: `text-gold`,
                    selected: `bg-gold/30 outline-2 oultine-gold text-gold font-bold rounded-full`,
                }}
            styles={{
                chevron: { fill: '#C5A367' }
            }}
            selected={selectedDay}
            onSelect={setSelectedDay}
        />
    );
}