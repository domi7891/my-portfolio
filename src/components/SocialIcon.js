import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SocialIcon({ icon, hoverClass, href, width }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <FontAwesomeIcon
        icon={icon}
        size="lg"
        className={`h-full !${
          width || 'w-5'
        } cursor-pointer text-white ${hoverClass} transition-colors duration-500`}
      />
    </a>
  )
}

export default SocialIcon
