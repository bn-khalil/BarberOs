import { useAuth } from '../context/AuthContext'
import SideBar from '../components/SideBar';
import { useState } from 'react';
import ServiceDashboard from '../sections/admin/ServiceDashboard';
import ServiceCreate from '../sections/admin/ServiceCreate';
import BarberDashboard from '../sections/admin/BarberDashboard';
import BarberCreate from '../sections/admin/BarberCreate';
import BarberForm from '../sections/admin/BarberForm';

function AdminDashboard() {
    const {user} = useAuth();
    const [currectSession, setCurrentSession] = useState('dashboard')
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
        <div className="h-[90vh] text-txt-col w-[90%] text-ma bg-main-second grid grid-cols-12 rounded-2xl overflow-hidden">
          <SideBar setcurrectSession={setCurrentSession}/>
          <div className="col-span-10 h-full">
            <div className="w-full flex items-center justify-between border-b border-gold p-4">
              <h1 className='font-bold text-2xl font-sans'>Dashboard</h1>
                <div className="text-txt-col  rounded-full border border-gold cursor-pointer">
                  <div className="bg-gold/50 m-0.5 w-8 h-8 rounded-full flex items-center justify-center">
                      {user?.username.toUpperCase().charAt(0)}
                  </div>
                </div>
            </div>

            <div className="p-4 bg-main/50 w-full h-full">
              {/* <h1 className='font-display text-2xl'>
                  Marhaba, <span className='text-gold'>{user?.username}!</span>
              </h1>
              <p className='text-sm text-txt-col font-sans'>
                Super Admin.
              </p> */}

              {currectSession == 'services' && <ServiceDashboard setCurrentSession={setCurrentSession}/>}
              {currectSession == 'create service' && <ServiceCreate setCurrentSession={setCurrentSession}/>}

              {currectSession == 'barbers' && <BarberDashboard setCurrentSession={setCurrentSession}/>}
              {currectSession == 'create barber' && <BarberCreate setCurrentSession={setCurrentSession}/>}              
            </div>
          </div>
        </div>
    </div>
  )
}

export default AdminDashboard