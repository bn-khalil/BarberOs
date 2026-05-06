import React from 'react'
import { useAuth } from '../context/AuthContext'
import SideBar from '../components/SideBar';
import WellcomeUser from '../components/WellcomeUser';

function AdminDashboard() {
    const {user} = useAuth();
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center overflow-hidden'>
        <div className="h-[90%] text-txt-col w-[90%] text-ma bg-main-second grid grid-cols-12 rounded-2xl">
          <SideBar/>
          <div className="col-span-10">
            <div className="w-full flex items-center justify-between border-b border-gold p-4">
              <h1 className='font-bold text-xl'>Dashboard</h1>
                <div className="text-txt-col  rounded-full border border-gold cursor-pointer">
                  <div className="bg-gold/50 m-[2px] w-8 h-8 rounded-full flex items-center justify-center">
                      {user?.username.toUpperCase().charAt(0)}
                  </div>
                </div>
            </div>

            <div className="p-4">
              <h1 className='font-display text-2xl'>
                  Marhaba, <span className='text-gold'>{user?.username}!</span>
              </h1>
              <p className='text-sm text-txt-col font-sans'>
                Super Admin.
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AdminDashboard