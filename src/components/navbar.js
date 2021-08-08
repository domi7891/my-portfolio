/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useEffect, useState } from 'react'

import Image from 'next/image'

import { Link, animateScroll as scroll, scrollSpy, Events } from 'react-scroll'

import Menu from '@/components/Menu'
import SocialIcon from '@/components/SocialIcon'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
// import logo from '../../public/logo_v2.svg'

function Navbar() {
  const [open, setOpen] = useState(false)

  function animateHeader() {
    // console.log(window.scrollY)
    if (window.scrollY > 0) {
      document.querySelector('#navbar').classList.add('active')
    } else document.querySelector('#navbar').classList.remove('active')
  }

  useEffect(() => {
    window.addEventListener('scroll', animateHeader)
    return () => window.removeEventListener('scroll', animateHeader)
  })

  useEffect(() => {
    return () => {
      Events.scrollEvent.remove('begin')
      Events.scrollEvent.remove('end')
    }
  })

  return (
    <div>
      <header
        onScroll={animateHeader}
        id="navbar"
        className="h-16 w-full transition duration-300 bg-transparent fixed top-0 z-50 text-white grid grid-cols-2 md:grid-cols-3 px-5 md:px-10 items-center backdrop-filter"
      >
        <div className="nav-container relative h-4/6 w-14">
          <Link
            className="nav-link-container"
            to="home"
            hashSpy={true}
            spy={true}
            smooth={true}
            duration={750}
            ignoreCancelEvents={true}
            onSetActive={() => console.log('test')}
          >
            <Image
              src="/logo_white.svg"
              alt=""
              layout="fill"
              objectFit="contain"
              objectPosition="left"
            />
          </Link>
        </div>
        <div className="nav-container justify-center gap-4 hidden md:flex">
          <Link
            className="nav-link-container"
            activeClass="active"
            to="home"
            hashSpy={true}
            spy={true}
            smooth={true}
            duration={750}
            ignoreCancelEvents={true}
            onSetActive={() => console.log('test')}
          >
            <span className="nav-link">
              Home <i></i>
            </span>
          </Link>
          <Link
            className="nav-link-container"
            activeClass="active"
            to="about"
            hashSpy={true}
            spy={true}
            smooth={true}
            duration={750}
            ignoreCancelEvents={true}
          >
            <span className="nav-link">
              About <i></i>
            </span>
          </Link>
          <Link
            className="nav-link-container"
            activeClass="active"
            to="skills"
            hashSpy={true}
            spy={true}
            smooth={true}
            duration={750}
            ignoreCancelEvents={true}
          >
            <span className="nav-link">
              Skills <i></i>
            </span>
          </Link>
          <Link
            className="nav-link-container"
            activeClass="active"
            to="projects"
            hashSpy={true}
            spy={true}
            smooth={true}
            duration={750}
            ignoreCancelEvents={true}
          >
            <span className="nav-link">
              Projects <i></i>
            </span>
          </Link>
        </div>
        <div className="justify-end h-full hidden md:flex space-x-10">
          <SocialIcon
            icon={faInstagram}
            hoverClass="hover:text-pink-600"
            href="https://www.instagram.com/domi7891"
          />
          <SocialIcon
            icon={faLinkedinIn}
            hoverClass="hover:text-blue-600"
            href="https://www.linkedin.com/in/dominik-nossal-07119b219"
          />
          <SocialIcon
            icon={faGithub}
            hoverClass="hover:text-gray-400"
            href="https://github.com/domi7891"
          />
        </div>
        <div className="nav-container flex justify-end md:hidden h-full">
          <FontAwesomeIcon
            onClick={() => setOpen(!open)}
            icon={faBars}
            className="h-2/5 w-12 cursor-pointer text-white hover:text-gray-500 transition-colors duration-500"
          />
        </div>
      </header>
      <Menu open={open} setOpen={setOpen} />
    </div>
  )
}

// class Navbar extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { page: 0 }
//     this.changePage = this.changePage.bind(this)
//     this.animateHeader = this.animateHeader.bind(this)
//   }

//   componentDidMount() {
//     window.addEventListener('scroll', this.animateHeader)
//   }
//   componentDidUpdate() {
//     window.removeEventListener('scroll', this.animateHeader)
//   }

//   changePage(newPage) {
//     this.setState({ page: newPage })
//   }

//   animateHeader() {
//     if (window.scrollY >= 200) {
//       document.querySelector('#navbar').classList.add('active')
//     } else document.querySelector('#navbar').classList.remove('active')
//   }

//   render() {
//     return (
//       <header
//         onScroll={this.animateHeader}
//         id="navbar"
//         className="h-16 w-full transition duration-300 bg-transparent fixed top-0 z-50 text-white grid grid-cols-3 px-5 md:px-10 items-center backdrop-filter backdrop-blur-sm"
//       >
//         <div className="nav-container relative h-4/6">
//           <Image
//             src="/logo_white.svg"
//             alt=""
//             layout="fill"
//             objectFit="contain"
//             objectPosition="left"
//           />
//         </div>
//         <div className="nav-container justify-center gap-4">
//           <Link
//             activeClass="active"
//             to="home"
//             spy={true}
//             smooth={true}
//             duration={750}
//           >
//             <span
//               className="nav-link smoothscroll"
//               onClick={() => this.changePage(0)}
//             >
//               {' '}
//               Home <i className={this.state.page == 0 ? `active` : ''}></i>
//             </span>
//           </Link>
//           <Link
//             activeClass="active"
//             to="about"
//             spy={true}
//             smooth={true}
//             duration={750}
//           >
//             <span className="nav-link" onClick={() => this.changePage(1)}>
//               {' '}
//               About <i className={this.state.page == 1 ? `active` : ''}></i>
//             </span>
//           </Link>
//         </div>
//         {/* <div className="nav-container">
//           <FontAwesomeIcon
//             icon={faBars}
//             className="h-2/5 cursor-pointer text-white hover:text-gray-500 transition-colors duration-500"
//           />
//         </div> */}
//       </header>
//     )
//   }
// }

export default Navbar
