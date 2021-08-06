import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SocialIcon({ icon, hoverClass, href, width = 'w-12' }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <FontAwesomeIcon
        icon={icon}
        className={`h-full ${width} cursor-pointer text-white hover:text-${hoverClass} transition-colors duration-500`}
      />
    </a>
  )
}

export default SocialIcon
