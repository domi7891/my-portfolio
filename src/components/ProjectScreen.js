import Image from 'next/image'

import { Element, Link } from 'react-scroll'
import { useEffect, useState } from 'react'

import Spacer from '@/components/Spacer'
import Project from '@/components/Project'

import projects from './data/projects.json'

function ProjectScreen() {
  const [showBg, setShowBg] = useState(false)
  // let inititalTop = 384
  // let last = 0

  const parallaxScroll = (e) => {
    setShowBg(window.scrollY >= 1297)
  }

  useEffect(() => {
    window.addEventListener('scroll', parallaxScroll)
    return () => window.removeEventListener('scroll', parallaxScroll)
  })

  return (
    <Element id="projects" className="relative">
      <Spacer bgColor="bg-transparent" spacerColor="text-gray_variant-light" />
      <div
        id="projects-bg"
        className={` w-full top-0 bottom-0 ${
          showBg ? 'z-[-1]' : 'z-[-3]'
        } fixed transition`}
      >
        <Image
          src="/images/background.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="top center"
        />
        <div className="bg-black bg-opacity-75 absolute top-0 bottom-0 w-full"></div>
      </div>
      <section className="grid place-items-center overflow-x-hidden bg-fixed text-white w-3/4 mx-auto pt-20 pb-24">
        <h1 className="text-5xl pb-10">Projects</h1>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 pt-10 gap-y-24">
          {projects.map((project) => {
            return <Project key={project.id} project={project} />
          })}
        </div>
      </section>
    </Element>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default ProjectScreen
