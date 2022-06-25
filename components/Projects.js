import React from 'react'
import Image from 'next/image'
import { FaCode, FaGlobe } from 'react-icons/fa'
import { Link } from 'react-scroll'

function Projects() {
  return (
    <div id='projects'>
      <div className='pGrid'>


        {/* 4. Portfolio */}

        <div className='gridCard'>
          <div className='thumbnail'>
            <h1>Portfolio</h1>
            <Image src='/portfolioThumb.png' layout='fill' />
          </div>
          <div className='desc'>
            <h1>Brief</h1>
            <p>A website to display my skills and projects to potential clients, recruiters, and the general public.</p>
          </div>
          <div className='tools'>
            <h1>Stack</h1>
            <div className='items'>
              <p>NextJS</p> <p>TailwindCSS</p> <p>Netlify</p> <p>Git</p>
            </div>
          </div>
          <div className='links'>
            <Link to='landing' className='site' spy={true} smooth={true} offset={0} duration={500}>
              <FaGlobe size={24}/>
            </Link>
            <button onClick={() => window.open('https://github.com/JLevy18/NextNetlifyPortfolioPublic', '_blank')}>
              <FaCode size={24}/>
            </button>
          </div>
        </div>

        {/* 6. RLGL */}

        <div className='gridCard' id='rlgl'>
          <div className='thumbnail'>
            <h1>Red Light Green Light</h1>
            <Image src='/RLGLThumb.png' layout='fill' />
          </div>
          <div className='desc'>
            <h1>Brief</h1>
            <p>Video game created to aid in the study of a psychological behavior known temporal discounting. In use at Ohio University to perform the case study.</p>
          </div>
          <div className='tools'>
            <h1>Stack</h1>
            <div className='items'>
              <p>Unreal</p><p>Git</p><p>Agile/Scrum</p>
            </div>
          </div>
          <div className='links'>
            <button onClick={() => window.open('', '_blank')}>
              <FaGlobe size={24}/>
            </button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Projects