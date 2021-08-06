import SocialIcon from '@/components/SocialIcon'
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'

function SocialSidebar() {
  return (
    <div className="fixed top-1/2 right-5 transform -translate-y-1/2 flex md:hidden flex-col py-4 w-12 gap-y-6 bg-black bg-opacity-50 items-center justify-around rounded-full">
      <SocialIcon
        icon={faInstagram}
        hoverClass="pink-600"
        href="https://www.instagram.com/domi7891"
        width="w-5"
      />
      <SocialIcon
        icon={faLinkedinIn}
        hoverClass="blue-600"
        href="https://www.linkedin.com/in/dominik-nossal-07119b219"
        width="w-5"
      />
      <SocialIcon
        icon={faGithub}
        hoverClass="gray-400"
        href="https://github.com/domi7891"
        width="w-5"
      />
    </div>
  )
}

export default SocialSidebar
