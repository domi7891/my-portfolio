'use client'

import { Element, Link } from 'react-scroll'
import Image from 'next/image'

import me from '../../public/images/me.jpg'

function AboutScreen() {
  return (
    <Element id="about">
      <section className="relative grid grid-cols-1 md:grid-cols-3 place-items-center md:items-start bg-gray_variant-dark overflow-x-hidden pt-28 pb-14 md:pb-28">
        <div className="hidden md:flex relative h-40 w-40 rounded-full overflow-hidden">
          <Image
            src={me}
            placeholder="blur"
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="center -45px"
          />
          <div className="w-full h-full rounded-full bg-black bg-opacity-30 z-[2]"></div>
        </div>
        <div className="relative flex flex-col text-white md:col-span-2 px-12 md:px-0 md:pr-28 lg:pr-56 text-justify md:text-left">
          <div className="mb-16">
            <h1 className="text-3xl mb-5 font-bold">About me</h1>
            <p className="font-light text-gray-400 text-base">
              Hi there, I am Dominik! I'm a 20-year-old programmer and web
              developer from Austria. I graduated at a higher technical school,
              with focus on IT, in Vienna (HTL Spengergasse, 1050 Wien).
              Currently I am studying 'Software & Information Engineering' at TU
              Wien.
              <br />
              <br />
              I've been coding since I was 14, where my interest in programming
              first started. In the last 6 years I have learned a lot and I am
              increasing my knowledge everyday more and more. Since my
              graduation last year, I worked as a freelance web developer and
              created websites for small startup companies.
              <br /> <br />
              <span className="font-bold text-white text-[17px]">
                Let's make your idea become reality.
              </span>
            </p>
          </div>
          <div>
            <h1 className="text-3xl mb-5 font-bold">Contact me</h1>
            <p className="font-light text-gray-400 text-base">
              I'm always interested in new freelance opportunities.
              <br /> So feel free to contact me on{' '}
              <a className="link">Instagram</a> or{' '}
              <a className="link">LinkedIn</a>. You can also send me an email to{' '}
              <a className="link" href="mailto:dominik@nossal.at">
                dominik@nossal.at
              </a>{' '}
              or use the{' '}
              <Link
                to="contact"
                offset={0}
                hashSpy={true}
                spy={true}
                smooth={true}
                duration={750}
                ignoreCancelEvents={true}
                className="link"
              >
                contact form
              </Link>{' '}
              at the end.
            </p>
          </div>
        </div>
      </section>
    </Element>
  )
}

export default AboutScreen
