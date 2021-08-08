import { Element, Link } from 'react-scroll'
import Image from 'next/image'
import Spacer from '@/components/Spacer'
import Skill from '@/components/Skill'

function SkillsScreen() {
  return (
    <Element id="skills">
      <Spacer bgColor="bg-gray_variant-light" />
      <section
        className="relative flex flex-col w-full text-black bg-gray_variant-light overflow-x-hidden pt-20 pb-24"
        // id="skills"
      >
        <div className="w-3/4 mx-auto">
          <h1 className="text-3xl mb-8 font-extrabold">Skills & Experience</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 gap-y-7">
            <Skill name="Vue.js" color="bg-[#41B883]" percentage="w-[80%]" />
            <Skill name="React.js" color="bg-[#41a5e8]" percentage="w-[70%]" />
            <Skill
              name="Web development"
              subname="HTML, CSS, Scss, Bootstrap, TailwindCSS, JavaScript, jQuery, PHP"
              color="bg-orange-400"
              percentage="w-[90%]"
            />
            <Skill
              name="Java"
              subname="SpringBoot, Hibernate, Maven"
              color="bg-[#ff2e2e]"
              percentage="w-[85%]"
            />
            <Skill
              name="Database"
              subname="MySQL, PostgreSQL, MSSQL, MongoDB"
              color="bg-gray-500"
              percentage="w-[75%]"
            />
            <Skill
              name="Other"
              subname="Python, C#, Git"
              color="bg-yellow-400"
              percentage="w-[65%]"
            />
          </div>
        </div>
      </section>
    </Element>
  )
}

export default SkillsScreen
