import React from 'react'
//Because routes and components are folders are at the same directory level in src folder, write ../components... instead of ./components...
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Logoslide from '../components/Logoslide'
import Features from '../components/Features'
import Adverts from '../components/Adverts'
import Testimonials from '../components/Testimonials'
import Cta from '../components/Cta'

function Landing() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Logoslide/>
        <Features/>
        <Adverts/>
        <Testimonials/>
        <Cta/>
    </>
  )
}

export default Landing