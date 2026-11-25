import React from 'react'
import Testimony from '../components/Testimony';
import avatar1 from '../assets/images/avatar1.png'
import avatar2 from '../assets/images/avatar2.png'
import avatar3 from '../assets/images/avatar3.png'
import avatar4 from '../assets/images/avatar4.png'
import avatar5 from '../assets/images/avatar5.png'
import avatar6 from '../assets/images/avatar6.png'
import avatar7 from '../assets/images/avatar7.png'
import avatar8 from '../assets/images/avatar8.png'
import avatar9 from '../assets/images/avatar9.png'
import avatar10 from '../assets/images/avatar10.png'
import avatar11 from '../assets/images/avatar11.png'
import avatar12 from '../assets/images/avatar12.png'

function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            profession: "Java Developer",
            avatar:avatar1,
            message: "Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            id: 2,
            name: "John Doe",
            profession: "Java Developer",
            avatar:avatar2,
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: 3,
            name: "John Doe",
            profession: "Java Developer",
            avatar:avatar3,
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            id: 4,
            name: "John Doe",
            profession: "Java Developer",
            avatar:avatar4,
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: 5,
            name: "John Doe",
            profession: "Java Developer",
            avatar:avatar5,
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: 6,
            name: "John Doe",
            profession: "Java Developer",
            avatar:avatar6,
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: 7,
            name: "John Doe",
            profession: "Java Developer",
            avatar:avatar7,
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
        },
        {
            id: 8,
            name: "John Doe",
            profession: "Java Developer",
            avatar:avatar8,
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: 9,
            name: "John Doe",
            profession: "Java Developer",
            avatar:avatar9,
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
        },
        {
            id: 10,
            name: "John Doe",
            profession: "Java Developer",
            avatar:avatar10,
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: 11,
            name: "John Doe",
            profession: "Java Developer",
            avatar:avatar11,
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: 12,
            name: "John Doe",
            profession: "Java Developer",
            avatar:avatar12,
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
        
    ];
  return (
    <div className='bg-eerie-black text-center text-white p-8 md:p-24 grid gap-6 md:gap-12'>
        <h2 className='text-2xl md:text-4xl'>Learners like you achieve their goals through our courses</h2>
        <p className='text-dark-gray'>We believe everyone has something to give. Share your skills & experience with students around the world by teaching free or paid.</p>
        <div className='text-left columns-1 sm:columns-2 lg:columns-4 gap-6 max-w-6xl'>
            {
                testimonials.map((testimonial) => (
                    <Testimony key={testimonial.id} name={testimonial.name} profession={testimonial.profession} avatar={testimonial.avatar} message={testimonial.message}/>
                ))
            }
        </div>
    </div>
  )
}

export default Testimonials