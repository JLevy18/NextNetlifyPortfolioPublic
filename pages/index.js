import React, { useState, useEffect } from 'react'
import Navbar from '@components/Navbar';
import About from '@components/About';
import Head from 'next/head';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Skills from '@components/Skills';
import Projects from '@components/Projects';
import Contact from '@components/Contact';
import TypewriterComponent from 'typewriter-effect';
import { Footer } from '@components/Footer';
import Socials from '@components/Socials';

export default function Home() {

  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const particleOptions = require('particlesDefault.json');


  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    window.addEventListener('load', setLoaded(true))
  }, []);


  return (
    <>
      <Head>
        <title>LevTheDev</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main>

        <Navbar/>
        <Socials/>

        <div className='landing'>
          <div className='typer'>
            <TypewriterComponent
              options={{
                autoStart: true,
                loop: false,
                cursor: "_",
                delay: 100,
              }}
              onInit={(typewriter) => {
                typewriter.callFunction(() => {
                    if(window.matchMedia("only screen and (max-width: 550px)").matches){
                      document.getElementsByClassName("Typewriter")[0].style.maxWidth = "320px"
                      document.getElementsByClassName("Typewriter")[0].style.overflow = "hidden"
                    }
                })
                typewriter.typeString("Loading...")
                typewriter.pauseFor(550)
                typewriter.deleteAll(50)
                typewriter.pauseFor(300)
                typewriter.changeDelay(75)
                typewriter.typeString("Hi, I'm Justin")
                typewriter.pauseFor(1800)
                typewriter.callFunction(() => {
                  //Remove cursor on smaller devices rather than hiding it
                  if(window.matchMedia("only screen and (max-width: 550px)").matches){
                    document.getElementsByClassName("Typewriter__cursor")[0].style.display = "none"
                  }else{
                    document.getElementsByClassName("Typewriter__cursor")[0].style.visibility = "hidden"
                  }
                })
                typewriter.start()
              }}
            />
          </div>
          <div className='motd'><p className={loaded ? 'toplineL' : 'topline'}><b>Software Developer</b> providing clients with</p><p className={loaded ? 'bottomlineL' : 'bottomline'}><b>Industry Standard</b> software solutions</p></div>
          <object className="logo" type="image/svg+xml" data="/AnimatedLogo.svg">LevTheDev</object>
          <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={particleOptions} />
        </div>


        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>

      <Footer/>
    </>
  )
}
