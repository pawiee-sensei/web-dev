import { navigateTo } from '../utils/navigation.js'

function Header() {
  const navItems = [
    { label: 'Login', href: '/login' },
    { label: 'Register', href: '/register' },
  ]

  return (
    <header className="site-header">
      <a
        className="brand"
        href="/"
        onClick={(event) => {
          event.preventDefault()
          navigateTo('/')
        }}
      >
        Auth App
      </a>

      <nav aria-label="Primary navigation">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                className="nav-link"
                href={item.href}
                onClick={(event) => {
                  event.preventDefault()
                  navigateTo(item.href)
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
