import Image from 'next/image'
import { Element, Link } from 'react-scroll'
import { useState, useEffect } from 'react'

import TypeWriter from 'react-typewriter'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'

function HomeScreen() {
  const [typing, setTyping] = useState(1)
  const [typeWord, setTypeWord] = useState(0)

  const revertTyping = () => {
    setTimeout(() => {
      if (typing == 1) setTyping(-1)
      else setTyping(1)
      if (typing == -1) {
        setTypeWord(typeWord + 1)
        if (typeWord == passionates.length) setTypeWord(0)
      }
    }, 1000)
  }

  const parallaxScroll = (e) => {
    const parallax = window.scrollY / 5
    document.querySelector('#home-bg').style.top = `-${parallax}px`
  }

  useEffect(() => {
    window.addEventListener('scroll', parallaxScroll)
    return () => window.removeEventListener('scroll', parallaxScroll)
  })

  const passionates = [
    'Welcome to my personal Website!',
    'I am a freelance web designer and full-stack developer.',
    "I'm passionate about creating modern Webpages.",
  ]
  return (
    <Element className="relative overflow-hidden">
      <div
        id="home-bg"
        className="w-full h-screen top-0 z-[-2] fixed transition"
      >
        <Image
          src="/images/background.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="top center"
        />
        <div className="bg-black bg-opacity-75 absolute top-0 w-full h-screen"></div>
      </div>
      <center
        className="grid place-items-start align-middle h-screen overflow-x-hidden relative"
        id="home"
      >
        <div className="absolute px-5 md:px-16 lg:px-36 top-1/4 md:top-1/3 text-left h-60 w-full">
          <h1 className="text-4xl md:text-7xl text-white mb-3 md:mb-6">
            Hello, I'm Dominik.
          </h1>
          <TypeWriter
            typing={typing}
            onTypingEnd={revertTyping}
            minDelay={25}
            maxDelay={250}
          >
            <p className="text-xl px-5 md:ml-10 md:text-3xl text-white relative text-left leading-8 cursor">
              {passionates[typeWord]}
            </p>
          </TypeWriter>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-2/3 md:-translate-x-1/2 lg:left-1/3 flex space-y-8 space-x-4 md:space-x-8 md:space-y-0 flex-col md:flex-row">
            <Link
              to="projects"
              hashSpy={true}
              spy={true}
              smooth={true}
              duration={750}
              ignoreCancelEvents={true}
            >
              <button className="home-button border-transparent bg-white">
                My Work
              </button>
            </Link>
            <Link
              to="contact"
              hashSpy={true}
              spy={true}
              smooth={true}
              duration={750}
              ignoreCancelEvents={true}
            >
              <button className="home-button text-white hover:bg-white hover:text-black">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
        <Link
          to="about"
          hashSpy={true}
          spy={true}
          smooth={true}
          duration={750}
          ignoreCancelEvents={true}
          onSetActive={() => console.log('test')}
        >
          <div className="absolute bottom-24 sm:bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 w-7 h-14 border border-white rounded-full cursor-pointer">
            <span className="w-2 h-2 rounded-full opacity-0 left-1/2 transform -translate-x-1/2 top-2 bg-white absolute animate-scrolldown"></span>
          </div>
        </Link>
      </center>
      <div className="hidden lg:flex absolute top-3/4 -translate-y-1/2 left-3/4 -translate-x-1/2 opacity-20 transform rotate-0">
        <FontAwesomeIcon
          icon={faQuoteRight}
          className="w-[250px] xl:w-[400px] text-gray-800"
        />
      </div>
      <div className="hidden lg:flex absolute border border-gray-800 border-opacity-40 w-[300px] h-[300px] backdrop-filter backdrop-blur-[2px] top-16 right-10 2xl:right-[20%] rounded-3xl transform rotate-45 z-[-1]"></div>
      <div className="hidden lg:flex absolute border border-gray-800 border-opacity-40 w-[300px] h-[300px] backdrop-filter backdrop-blur-[2px] top-[214px] right-[190px] 2xl:right-[28%] rounded-3xl transform rotate-0 z-[-1]"></div>
      <div className="hidden lg:flex absolute border border-gray-800 border-opacity-40 w-[300px] h-[300px] backdrop-filter backdrop-blur-[2px] top-[470px] right-10 2xl:right-[20%] rounded-3xl transform rotate-45 z-[-1]"></div>
    </Element>
  )
}

export default HomeScreen
