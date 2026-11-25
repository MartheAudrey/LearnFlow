import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {Menu, X} from 'lucide-react'
import companyLogo from '../assets/images/book.png'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => {
    setIsMenuOpen(false);
  }
  return (
    <nav className="relative bg-eerie-black text-white flex justify-between items-center py-4 px-8 md:px-12 md:py-8">
        {/*Logo*/}
        <Link to="/" className="flex items-center gap-2">
          <img src={companyLogo} alt="An opened book"/>
          <p>LearnFlow</p>
        </Link>
        {/*Desktop menu */}
        <div className="">
          <ul className=" hidden md:flex gap-8">
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
          </ul>
        </div>
        <Link to="/signup" className="hidden md:block text-safron-yellow border border-safron-yellow py-2 px-3 rounded-3xl">
          Let's start your learning journey
        </Link>
        {/*Mobile menu button*/}
        <button type="button" className='md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Close mneu': 'Open menu'}aria-expanded={isMenuOpen}>
          {isMenuOpen ? <X size={28}/> : <Menu size={28}/>}
        </button>

        {/*Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-full z-50 left-0 right-0 bg-eerie-black h-screen">
            <ul className="flex flex-col gap-2 text-center">
              <li><a href="#about" onClick={closeMenu}>About</a></li>
              <li><a href="#features" onClick={closeMenu}>Features</a></li>
              <li><a href="#pricing" onClick={closeMenu}>Pricing</a></li>
            </ul>
            <Link to="/signup" className="md:hidden text-safron-yellow border border-safron-yellow py-2 px-3 rounded-3xl block mt-8 w-fit mx-auto">
              Let's start your learning journey
            </Link>
          </div>
        )}
    </nav>
  )
}

export default Navbar