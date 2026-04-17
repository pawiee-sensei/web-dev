import { useState } from 'react'
import AuthLayout from '../components/AuthLayout.jsx'
import { registerUser } from '../services/auth.js'

function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })
  const [status, setStatus] = useState({
    type: '',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ type: 'loading', message: 'Creating account...' })

    try {
      const response = await registerUser(formData)
      setStatus({
        type: 'success',
        message: response.message ?? 'User registered successfully.',
      })
      setFormData({
        username: '',
        email: '',
        password: '',
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message,
      })
    }
  }

  return (
    <AuthLayout
      eyebrow="Create your account"
      title="Start with a secure registration flow."
      description="Set up your profile so new users can sign up cleanly before you connect the backend."
    >
      <form onSubmit={handleSubmit}>
        <div className="auth-card-header">
          <h2>Register</h2>
          <p>Fill in the details below to create a new account.</p>
        </div>

        <label className="field">
          <span>Username</span>
          <input
            type="text"
            name="username"
            placeholder="paolo123"
            value={formData.username}
            onChange={handleChange}
          />
        </label>

        <label className="field">
          <span>Email address</span>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label className="field">
          <span>Password</span>
          <input
            type="password"
            name="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>

        {status.message ? (
          <p className={`form-status ${status.type === 'error' ? 'form-status-error' : ''}`}>
            {status.message}
          </p>
        ) : null}

        <button className="primary-button" type="submit">
          {status.type === 'loading' ? 'Registering...' : 'Register'}
        </button>
      </form>
    </AuthLayout>
  )
}

export default RegisterPage
