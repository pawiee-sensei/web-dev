import { useState } from 'react'
import AuthLayout from '../components/AuthLayout.jsx'
import { loginUser } from '../services/auth.js'

function LoginPage() {
  const [formData, setFormData] = useState({
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
    setStatus({ type: 'loading', message: 'Signing in...' })

    try {
      const response = await loginUser(formData)
      setStatus({
        type: 'success',
        message: response.message ?? 'Login successful.',
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
      eyebrow="Welcome back"
      title="Sign in to continue building."
      description="Use your account to access your workspace, projects, and saved activity."
    >
      <form onSubmit={handleSubmit}>
        <div className="auth-card-header">
          <h2>Login</h2>
          <p>Enter your credentials to access your account.</p>
        </div>

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
            placeholder="Enter your password"
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
          {status.type === 'loading' ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </AuthLayout>
  )
}

export default LoginPage
