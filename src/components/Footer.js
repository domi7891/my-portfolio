import { Link, animateScroll as scroll } from 'react-scroll'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  const scrollTop = () => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: 'easeInOutQuint',
    })
  }

  return (
    <footer className="w-full bg-[#171717] relative text-center py-14">
      <div className="group absolute bottom-full left-1/2 transition duration-500 transform -translate-x-1/2 translate-y-1/2 border-[1px] border-gray_variant-light rounded-full w-12 h-12 text-gray_variant-light hover:bg-gray_variant-light hover:text-gray_variant-dark">
        <a onClick={scrollTop}>
          <FontAwesomeIcon
            icon={faChevronUp}
            size="lg"
            className={`h-full !w-5 cursor-pointer group-hover:animate-bounceUp transform group-hover:translate-y-[6px]`}
          />
        </a>
      </div>
      <p className="text-gray_variant text-sm font-light mb-3">
        Made by <span className="text-gray_variant-light">Dominik Nossal</span>
      </p>
      <a className="" href="mailto:dominik@nossal.at">
        <span className="text-gray_variant text-sm font-light transition-colors duration-300 edjhover:text-gray_variant-light">
          dominik@nossal.at
        </span>
      </a>
    </footer>
  )
}

export default Footer
