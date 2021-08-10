import Image from 'next/image'

function Project({ project }) {
  return (
    <div className="bg-gray_variant-light w-full sm:w-4/5 md:3/4 mx-auto rounded-lg overflow-hidden shadow-md-white">
      <div className="relative w-full h-44 md:h-56 transform origin-center hover:scale-105 transition-transform duration-300 cursor-pointer">
        <a
          href="http://www.ontime-store.at"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={project.images[0]}
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="left center"
          />
        </a>
      </div>
      <div className="px-8 py-6">
        <h3 className="text-black text-lg font-semibold mb-2 cursor-pointer transform origin-left transition-transform duration-300 hover:scale-105 hover:underline">
          <a
            href="https://www.ontime-store.at"
            target="_blank"
            rel="noreferrer"
          >
            {project.name}
          </a>
        </h3>
        <h4 className="text-gray_variant-dark text-base font-medium mb-2">
          {project.description}
        </h4>
        <span className="text-[#787878] text-sm font-light">
          <p className="font-medium w-full border-b-[1px] border-[#b3b3b3] mb-2 mr-2">
            Tech-Stack
          </p>
          <span>{project.techstack}</span>
        </span>
      </div>
    </div>
  )
}

export default Project
