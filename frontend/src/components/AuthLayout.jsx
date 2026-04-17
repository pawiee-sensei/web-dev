function AuthLayout({ eyebrow, title, description, children }) {
  return (
    <section className="auth-shell">
      <div className="auth-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="auth-description">{description}</p>
      </div>

      <div className="auth-card">{children}</div>
    </section>
  )
}

export default AuthLayout
