import AuthLayout from '../components/AuthLayout.jsx'

function HomePage() {
  return (
    <AuthLayout
      eyebrow="Auth App"
      title="Choose login or register from the header."
      description="Your navigation now changes routes between dedicated auth screens instead of jumping to page anchors."
    >
      <div className="hero-card">
        <p className="auth-description">
          This shared layout keeps the pages consistent while letting each screen supply its own
          content.
        </p>
      </div>
    </AuthLayout>
  )
}

export default HomePage
