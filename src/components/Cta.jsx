import React from 'react'
import { Link } from 'react-router-dom'
import dashboard from '../assets/images/dashboard.png'

function Cta() {
  return (
    <div className='p-8 md:p-24'>
        <div className='relative bg-safron-yellow p-8 md:pd-12 rounded-xl overflow-hidden md:min-h-[232px]'>
            <div className='relative z-10 grid gap-3 max-w-md md:gap-5 md:w-[48%]'>
                <h2 className='text-2xl md:text-4xl font-bold'>Expand your skills & knowledge at any level.</h2>
                <p>
                    Learn at your own pace with lifetime access on mobile and desktop.
                </p>
                <Link to="/signup" className="font-bold text-sm bg-eerie-black py-2 px-4 w-fit rounded-xl md:text-base text-white transition-all duration-200 ease-in-out hover:text-eerie-black hover:bg-transparent hover:border hover:border-2 hover:border-eerie-black">
                    Get started
                </Link>
            </div>
            <div className='rounded-t-lg overflow-hidden mt-8 md:mt-0 md:absolute md:top-0 md:right-0 md:w-[46%] translate-x-6 translate-y-8 -rotate-[10deg] h-50 md:h-70'>
                <img src={dashboard} alt="LearnFlow dashboard" className='block w-full h-auto'/>
            </div>
        </div>
    </div>
  )
}

export default Cta