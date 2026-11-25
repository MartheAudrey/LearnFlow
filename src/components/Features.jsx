import React from 'react'
import frame from '../assets/frame.svg'
import Feature from '../components/Feature'
import briefcase from '../assets/briefcase.svg'
import teacher from '../assets/teacher.svg'

function Features() {
  return (
    <div className='p-8 md:p-12 max-w-6xl mx-auto'>
        <h2 className='text-2xl font-bold text-center md:text-4xl'>Special features that make our online courses the best</h2>
        <div className='flex flex-col md:flex-row gap-4 mt-12'>
            <Feature title="Made by Experts" content="Our programming languages courses are meticulously crafted and taught by industry experts who bring  years of practical experience" icon={frame}/>
            <Feature title="Career Opportunities" content="Benefit from our job placement assistance services that connects qualified learners with relevant career path" icon={briefcase}/>
            <Feature title="Collaboration" content="Study at their own pace and on their own schedule, which is ideal for those who have work, family, or other commitments" icon={teacher}/>
        </div>
    </div>
  )
}

export default Features