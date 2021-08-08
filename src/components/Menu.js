import MenuLink from '@/components/MenuLink'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function Menu({ open, setOpen }) {
  return (
    <div
      className={`${
        open ? 'left-0' : 'left-full  delay-1000'
      } md:hidden flex py-10 flex-col items-center justify-center gap-y-10 fixed z-[60] top-0 bg-black bg-opacity-90 backdrop-filter backdrop-blur-sm w-screen h-screen transition-all duration-500 text-white text-xl menu ${
        open ? 'active' : ''
      }`}
    >
      <FontAwesomeIcon
        onClick={() => setOpen(!open)}
        icon={faTimes}
        className="h-6 w-6 cursor-pointer text-white hover:text-gray-500 transition-colors duration-500 absolute top-5 right-10"
      />
      <MenuLink setOpen={setOpen} to="home">
        Home
      </MenuLink>
      <MenuLink setOpen={setOpen} to="about">
        About
      </MenuLink>
      <MenuLink setOpen={setOpen} to="skills">
        Skills
      </MenuLink>
      <MenuLink setOpen={setOpen} to="projects">
        Projects
      </MenuLink>
    </div>
  )
}

export default Menu
