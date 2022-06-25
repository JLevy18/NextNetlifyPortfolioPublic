import React from 'react'
import { FaGithub, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-scroll'

function Socials() {
  return (
    <div className='socials'>
        
        <ul className='iconStack'>
            <button className='icon' onClick={() => window.open('https://github.com/JLevy18', '_blank')}>
                <FaGithub size={48} style={{color: 'inherit'}}/>
            </button>
            <div className='connector'/>
            <button className='icon' onClick={() => window.open('https://www.youtube.com/channel/UCm3dXeDpEoPABhIPs9EkBrg', '_blank')}>
                <FaYoutube size={48} style={{color: 'inherit'}}/>
            </button>
            <div className='connector'/>
            <button className='icon' onClick={() => window.open('https://www.linkedin.com/in/jlevy18/', '_blank')}>
                <FaLinkedin size={48} style={{color: 'inherit'}}/>
            </button>
            <div className='connector'/>
            <button className='icon' onClick={() => window.open('https://twitter.com/LevTheDev', '_blank')}>
                <FaTwitter size={48} style={{color: 'inherit'}}/>
            </button>
        </ul>

    </div>
  )
}

export default Socials