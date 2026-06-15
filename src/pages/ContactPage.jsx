import { useState } from 'react'
import SEO from '../components/SEO'
import { contactForm, contactLinks } from '../data/content'

const initialValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
  checkbox: false,
}

function ContactPage() {
  const [formValues, setFormValues] = useState(initialValues)
  const [formMsg, setFormMsg] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onChange = (event) => {
    const { name, value, type, checked } = event.target
    setFormValues((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setFormMsg('')
    try {
      const response = await fetch(contactForm.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      })
      const text = await response.text()
      if (!response.ok) {
        throw new Error(text || 'Submission failed')
      }
      setFormMsg(text || 'Submission Successful')
      setFormValues(initialValues)
    } catch (error) {
      setFormMsg(error.message || 'Connected Error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <SEO title="Contact" />
      <section className="container page-section contact-page">
        <h2 className="page-title">{contactForm.heading}</h2>
        <p className="contact-copy">{contactForm.text}</p>
        <form className="contact-form" onSubmit={onSubmit}>
          <input
            className="inputSaved"
            type="text"
            name="name"
            value={formValues.name}
            onChange={onChange}
            placeholder="Name"
            required
          />
          <input
            className="inputSaved"
            type="email"
            name="email"
            value={formValues.email}
            onChange={onChange}
            placeholder="Enter email"
            required
          />
          <input
            className="inputSaved"
            type="tel"
            name="phone"
            value={formValues.phone}
            onChange={onChange}
            placeholder="Phone Number"
            required
          />
          <input
            className="inputSaved"
            type="text"
            name="message"
            value={formValues.message}
            onChange={onChange}
            placeholder="Message"
            required
          />
          <label className="checkbox-line">
            <input
              type="checkbox"
              name="checkbox"
              checked={formValues.checkbox}
              onChange={onChange}
            />
            <span>Send me a SMS &amp; Email</span>
          </label>
          <p className="contact-disclaimer">{contactForm.disclaimer}</p>
          <button type="submit" className="button-link" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
          {formMsg && <p className="form-message">{formMsg}</p>}
        </form>
        <div className="contact-links">
          {Object.values(contactLinks).map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          ))}
        </div>
        <p className="made-with">Made with ❤ in Henderson, NV</p>
      </section>
    </>
  )
}

export default ContactPage
