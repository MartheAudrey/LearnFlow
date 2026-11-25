import React from 'react'
import {Link} from 'react-router-dom'
import Dev1 from '../assets/images/developper 1.png'
import ATO from '../assets/images/ato.jpg'
import Me from '../assets/images/Marthe Audrey.png'
import Dashboard from '../assets/images/dashboard.png'

function Hero() {
  return (
    <div className=" relative bg-eerie-black pt-12 px-6 text-center grid gap-4 md:gap-6">
        <h1 className="text-white font-bold text-3xl md:text-6xl max-w-3xl md:mx-auto">The free, fun, and effective way to learn a language</h1>
        <p className="text-dark-gray">Learn at your own pace with lifetime access on mobile and desktop.</p>
        <Link to="/signup" className="bg-safron-yellow w-fit mx-auto py-2 px-4 rounded-xl font-bold">
            Start a new course!
        </Link>
        <div className="flex items-center -space-x-2 justify-center">
            <img src={Dev1} className="h-10 w-10 border border-white border-2 rounded-full object-cover grayscale" alt="A young lady"/>
            <img src={ATO} className="h-10 w-10 border border-white border-2 rounded-full object-cover" alt="Anthony Bradley"/>
            <img src={Me} className="h-10 w-10 border border-white border-2 rounded-full object-cover" alt="Marthe Audrey"/>
        </div>
        <p className="text-dark-gray">Join thousands of students to start coding now!</p>
        <div className="rounded-t-lg overflow-hidden h-50 max-w-5xl md:mx-auto md:h-160">
            <img src={Dashboard} alt="The student's dashboard" className="block w-full"/>
        </div>
    </div>
  )
}

export default Hero