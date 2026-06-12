import SEO from '../components/SEO'
import { contactLinks, projects } from '../data/content'

function ProjectsPage() {
  return (
    <>
      <SEO title="Projects" />
      <section className="container page-section">
        <h2 className="page-title">
          Projects
          <span className="resume-inline">
            <a href={contactLinks.resume.href} target="_blank" rel="noreferrer">
              resume
            </a>
          </span>
        </h2>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <img src={project.image} alt={project.title} className="project-icon" />
              <h3>{project.title}</h3>
              <p className="project-meta">{project.meta}</p>
              <p className="project-text">{project.text}</p>
              <div className="project-links">
                {project.links.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="button-link">
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default ProjectsPage
