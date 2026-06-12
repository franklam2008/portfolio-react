import { NavLink, Outlet } from 'react-router-dom'
import { contactLinks, navLinks, ownerName } from '../data/content'

const navClassName = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')

function Layout() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="site-header-inner">
          <div className="site-brand">
            <NavLink to="/" className="brand-link">
              <img src={contactLinks.resume.icon} alt={ownerName} className="brand-avatar" />
              <span>{ownerName}</span>
            </NavLink>
          </div>
          <nav className="site-nav" aria-label="Main navigation">
            {navLinks.map((item) => (
              <NavLink key={item.href} to={item.href} className={navClassName}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="site-socials">
            {Object.values(contactLinks).map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="social-link"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </header>
      <main className="site-main">
        <Outlet />
      </main>
      <footer className="site-footer">© {new Date().getFullYear()} Frank Lam, Built with React</footer>
    </div>
  )
}

export default Layout
