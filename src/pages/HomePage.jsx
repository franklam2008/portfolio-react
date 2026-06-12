import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { homeContent } from '../data/content'

function HomePage() {
  return (
    <>
      <SEO title="Home" />
      <section className="hero">
        <div className="hero-content container">
          <p className="hero-greeting">{homeContent.greeting}</p>
          <h1>{homeContent.title}</h1>
          <p className="hero-subtitle">{homeContent.subtitle}</p>
          <Link to="/projects" className="primary-link">
            My Work
          </Link>
        </div>
        <img src={homeContent.wave} className="hero-wave" alt="" aria-hidden="true" />
      </section>
      <section className="container page-section">
        <p className="home-intro">{homeContent.intro}</p>
      </section>
    </>
  )
}

export default HomePage
