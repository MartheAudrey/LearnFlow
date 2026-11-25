import React from 'react'

function Feature({title, content, icon}) {
  return (
    <div className='grid gap-3 bg-light-gray p-5 rounded-xl'>
        <h3 className='text-xl font-bold md:text-2xl'>{title}</h3>
        <p className='text-sm'>
            {content}
        </p>
        <img src={icon} alt="" aria-hidden="true" className='justify-self-end h-8 md:h-12'/>
    </div>
  )
}

export default Feature