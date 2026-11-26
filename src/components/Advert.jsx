import React from 'react'
import { Link } from 'react-router-dom'

function Advert({title_ad, content_ad, image_ad, className=''}) {
  return (
    <div className={`flex gap-6 flex-col max-w-6xl md:flex-row md:items-center md:gap-0 md:gap-14 md:justify-between ${className}`}>
        <div className='bg-cornflower-blue rounded-lg  md:w-1/2'>
            <img src={image_ad}/>
        </div>
        <div className='grid gap-3 md:gap-5 w-full md:w-1/2'>
            <h2 className='font-bold text-2xl md:text-4xl max-w-md'> {title_ad}</h2>
            <p className='text-dark-gray text-sm max-w-sm'>{content_ad}</p>
            <Link to="/signup" className="font-bold text-sm bg-safron-yellow py-2 px-4 w-fit rounded-xl md:text-base transition-all duration-200 ease-in-out hover:bg-cornflower-blue hover:text-white">
                Get started
            </Link>
        </div>
    </div>
  )
}

export default Advert