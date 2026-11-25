import React from 'react'
import Advert from '../components/Advert'
import woman1 from '../assets/images/woman 1.png'
import woman2 from '../assets/images/woman 2.png'

function Adverts() {
  return (
    <div className='p-8 md:p-24 flex flex-col gap-12 md:gap-14'>
        <Advert title_ad="Collaboration & learn with our platform" content_ad="We offer a wide range of language courses taught by experienced and qualified instructors, who are passionate about teaching and dedicated to helping you achieve your lnaguage goals." image_ad={woman1}/>
        <Advert title_ad="Propel your career & expand your knowledge at any level" content_ad="Learnflow is an online course class that provides various of programming courses." image_ad={woman2} className="md:flex-row-reverse"/>
    </div>
  )
}

export default Adverts