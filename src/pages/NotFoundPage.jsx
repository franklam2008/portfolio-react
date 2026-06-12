import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

function NotFoundPage() {
  return (
    <section className="container page-section not-found">
      <SEO title="404: Not Found" />
      <h2 className="page-title">Not Found</h2>
      <p>You just hit a route that does not exist.</p>
      <Link to="/" className="button-link">
        Back to Home
      </Link>
    </section>
  )
}

export default NotFoundPage
