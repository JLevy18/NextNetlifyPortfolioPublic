import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { FaGraduationCap } from 'react-icons/fa'

function About() {
  return (
    <div id='about'>
      <div className='card'>
        <div className='title'>
          <h1><CgProfile size={48} style={{paddingRight: 5}}/> Profile</h1>
        </div>
        <div className='content'>
          <p>My name is Justin, also known as LevTheDev. I’m a 22-year-old software developer, gamer, and content creator. I put together YouTube videos documenting the development of my projects as well as delivering tips and tricks I’ve learned throughout my career.</p>
        </div>
      </div>
      <div className='card'>
        <div className='title'>
          <h1><FaGraduationCap size={48} style={{paddingRight: 5}}/> Qualification</h1>
        </div>
        <div className='content'>
        <p>In April of 2022, I completed my bachelor's degree in computer science. This solidified my understanding of computational systems and theories. In addition to my formal education, I sharpen my skills by developing a variety of games, apps, and other programs that interest me.</p>
        </div>
      </div>
    </div>
  )
}

export default About