import React from 'react'
import duolingo from '../assets/images/duolingo.png'
import codecov from '../assets/images/Codecov.png'
import usertesting from '../assets/images/UserTesting.png'
import magicleap from '../assets/images/Magic Leap.png'

function Logoslide() {
  return (
    <div className="bg-light-gray p-4 flex gap-4">
        <img className="h-4 md:h-8" src={duolingo} alt="Duolingo logo"/>
        <img className="h-4 md:h-8" src={codecov} alt="Codecov logo"/>
        <img className="h-4 md:h-8" src={usertesting} alt="UserTesting logo"/>
        <img className="h-4 md:h-8" src={magicleap} alt="Magic Leap logo"/>
        <img className="h-4 md:h-8" src={codecov} alt="Codecov logo"/>
    </div>
  )
}

export default Logoslide