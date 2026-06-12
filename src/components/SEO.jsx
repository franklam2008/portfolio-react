import { Helmet } from 'react-helmet-async'
import PropTypes from 'prop-types'
import { siteMetadata } from '../data/content'

function SEO({ title }) {
  const metaTitle = `${title} | ${siteMetadata.title}`
  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={siteMetadata.description} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={siteMetadata.description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={siteMetadata.author} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={siteMetadata.description} />
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SEO
