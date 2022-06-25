import React from 'react'
import { FaRegLightbulb } from 'react-icons/fa'

function Skills() {
  return (
    <div id='skills'>
      <div className='skillBrief'>
        <div className='card'>
          <div className='title'>
            <h1><FaRegLightbulb size={32} style={{paddingRight: 10}}/>Always Learning</h1>
          </div>
          <p className='quote'>“Live as if you were to die tomorrow. Learn as if you were to live forever.” <br/>– Mahatma Gandhi</p>
          <div className='content'>
            <p>Software development typifies a <b>rapidly evolving</b> industry such that constantly learning how others <b>efficiently</b> implement systems is paramount to producing <b>successful</b> solutions.</p>
          </div>
        </div>
      </div>
      <div className='skillSec'>
          <div className='skillGrid'>
            <div className="iconWrapper">
              <object className="icon" type="image/svg+xml" data='/skills/html5.svg'></object>
              <p>HTML5</p>
            </div>
            <div className="iconWrapper">
              <object className="icon" type="image/svg+xml" data='/skills/css3.svg'></object>
              <p>CSS3</p>
            </div>
            <div className="iconWrapper">
              <object className="icon" type="image/svg+xml" data='/skills/js.svg'></object>
              <p id='js'>Javascript</p>
            </div>
            <div className="iconWrapper">
              <object className="icon" type="image/svg+xml" data='/skills/react.svg'></object>
              <p>React</p>
            </div>
            <div className="iconWrapper">
              <object className="icon" type="image/svg+xml" data='/skills/unreal.svg'></object>
              <p>Unreal</p>
            </div>
            <div className="iconWrapper">
              <object className="icon" type="image/svg+xml" data='/skills/c++.svg'></object>
              <p>C++</p>
            </div>
            <div className="iconWrapper">
              <object className="icon" type="image/svg+xml" data='/skills/opengl.svg'></object>
              <p>OpenGL</p>
            </div>
            <div className="iconWrapper">
              <object className="icon" type="image/svg+xml" data='/skills/git.svg'></object>
              <p>Git</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Skills