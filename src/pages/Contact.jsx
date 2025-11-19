import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Email is not valid'
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = validateForm()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setIsSubmitted(false)
    } else {
      setErrors({})
      setIsSubmitted(true)
      console.log('Form submitted:', formData)

      // Simulate API call delay and reset form
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' })
        setIsSubmitted(false)
      }, 3000)
    }
  }

  return (
    <div className="container bg-white py-5" style={{ minHeight: 'calc(100vh - 80px)' }}>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="display-4 fw-bold mb-3">Contact Us</h1>

          <p className="text-muted mb-5">
            Have a question about our movies? Don't hesitate to contact us!
          </p>

          {isSubmitted && (
            <div className="alert alert-success border-2" role="alert">
              <strong>✓ Message sent successfully!</strong>
              <p className="mb-0 mt-2">We will respond as soon as possible.</p>
            </div>
          )}

          <div className="card border-dark border-2 bg-light">
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="form-label fw-bold">NAME *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    // FIXED: Use backticks for the template literal
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <div className="invalid-feedback d-block">
                      {errors.name}
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <label className="form-label fw-bold">EMAIL *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    // FIXED: Use backticks for the template literal
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <div className="invalid-feedback d-block">
                      {errors.email}
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <label className="form-label fw-bold">MESSAGE *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    // FIXED: Use backticks for the template literal
                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                    placeholder="Your message (minimum 10 characters)"
                  />
                  {errors.message && (
                    <div className="invalid-feedback d-block">
                      {errors.message}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-dark w-100 py-3 fw-bold"
                >
                  SEND
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}