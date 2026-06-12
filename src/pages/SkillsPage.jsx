import SEO from '../components/SEO'
import { languageContent, skillSections } from '../data/content'

function SkillsPage() {
  return (
    <>
      <SEO title="Skills" />
      <section className="container page-section">
        <h2 className="page-title">Specialized Skill Set</h2>
        {skillSections.map((section) => (
          <article key={section.title} className="skill-section">
            <h3>{section.title}</h3>
            <div className="skill-grid">
              {section.skills.map((skill) => (
                <div key={skill.name} className="skill-card">
                  <img src={skill.image} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
        <p className="language-note">{languageContent}</p>
      </section>
    </>
  )
}

export default SkillsPage
