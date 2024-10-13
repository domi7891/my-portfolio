import { Link } from 'react-scroll'

function MenuLink({ setOpen, to, children }) {
  return (
    <Link
      className="menu-nav-link-container cursor-pointer"
      activeClass="active"
      to={to}
      hashSpy={true}
      spy={true}
      delay={1500}
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
