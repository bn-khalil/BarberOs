import React from 'react'
import { useAuth } from '../context/AuthContext'

function WellcomeUser() {
    const {user} = useAuth();
  return (
    <div className='text-white font-display text-6xl py-4'>
        <h1>
            Marhaba, <span className='text-gold'>{user?.username}!</span>
        </h1>
        <p className='text-sm text-txt-col font-sans'>
            Your next look is just a few clicks away. Keep it sharp.
        </p>
    </div>
  )
}

export default WellcomeUser