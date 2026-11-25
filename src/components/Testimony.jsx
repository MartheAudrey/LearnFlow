import React from 'react'

function Testimony({name, profession, avatar, message}) {
  return (
    /*break-inside-avoid prevents a card from breaking between columns*/
    <div className='border border-dark-gray rounded-lg p-4 mb-5 break-inside-avoid'>
        <div className='flex gap-2 mb-4'>
            <img src={avatar} className='w-10 h-10 rounded-full object-cover'/>
            <div>
                <h3 className='text-white font-bold'>{name}</h3>
                <p className='text-sm text-dark-gray font-semi-bold'>{profession}</p>
            </div>
        </div>
        <p className='text-dark-gray'>{message}</p>
    </div>
  )
}

export default Testimony