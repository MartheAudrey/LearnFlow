import React from 'react'
import { Link } from 'react-router-dom'
import dashboard from '../assets/images/dashboard.png'

function Cta() {
  return (
    <div className='p-8 md:p-24'>
        <div className='bg-safron-yellow p-8 md:pd-12 rounded-xl grid gap-3 md:gap-5 overflow-hidden'>
            <h2 className='text-2xl md:text-4xl font-bold'>Expand your skills & knowledge at any level.</h2>
            <p>
                Learn at your own pace with lifetime access on mobile and desktop.
            </p>
            <Link to="/signup" className="font-bold text-sm bg-eerie-black py-2 px-4 w-fit rounded-xl md:text-base text-white">
                Get started
            </Link>
            <div className='rounded-t-lg overflow-hidden bg-red-100 -rotate-10 h-50 translate-8'>
                <img src={dashboard} alt="LearnFlow dashboard"/>
            </div>
        </div>
    </div>
  )
}

export default Cta