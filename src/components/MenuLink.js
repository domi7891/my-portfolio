import { Link, animateScroll as scroll } from 'react-scroll'

function MenuLink({ setOpen, to, children }) {
  return (
    <Link
      className="menu-nav-link-container"
      activeClass="active"
      to={to}
      hashSpy={true}
      spy={true}
      delay={1000}
      smooth={true}
      duration={750}
      ignoreCancelEvents={true}
      onClick={() => setOpen(false)}
    >
      <span className={`menu-nav-link`}>{children}</span>
    </Link>
  )
}

export default MenuLink
