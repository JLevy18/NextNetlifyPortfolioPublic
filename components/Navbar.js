import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'
import Image from 'next/image'
import logo from '../public/LogoCircle.png'

function Navbar() {

  const [click, setClick] = useState(false)
  const [navback, setNavback] = useState(false)
  const [navwrap, setNavwrap] = useState(false)


  const handleClick = () => setClick(!click)
  const closeMenu = () => setClick(false)

  const changeNavbackground = () => {
    if(window.scrollY >= 700){
      setNavback(true)
      setNavwrap(true)
    }else{
      setNavback(false)
      setNavwrap(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavbackground)
  }, []);

  return (
    <div className={navwrap ? 'navWrap active' : 'navWrap'}>
      <nav className={navback ? 'navbar active' : 'navbar'}>
          <Link to='landing' className='navLogo' spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>
            <Image src={logo} alt='icon'/>
          </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'>
                <Link to='about' spy={true} smooth={true} offset={-48} duration={500} onClick={closeMenu}>ABOUT</Link>
            </li>
            <li className='nav-item'>
              <Link to='skills' spy={true} smooth={true} offset={-48} duration={500} onClick={closeMenu}>SKILLS</Link>
            </li>
            <li className='nav-item'>
              <Link to='projects' spy={true} smooth={true} offset={-48} duration={500} onClick={closeMenu}>PROJECTS</Link>
            </li>
            <li className='nav-item'>
              <Link to='contact' spy={true} smooth={true} offset={-48} duration={500} onClick={closeMenu}>CONTACT</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
          {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
              : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
        </div>
      </nav>
    </div>
  )
}

export default Navbar