import React from 'react'
import { useAuth } from '../context/AuthContext'
import SideBar from '../components/SideBar';

function AdminDashboard() {
    const {user} = useAuth();
  return (
    <div className=' h-screen max-w-4xl mx-auto text-white bg-main-second'>
        <SideBar/>
    </div>
  )
}

export default AdminDashboard