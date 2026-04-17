import Header from './components/Header.jsx'
import usePathname from './hooks/usePathname.js'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import DashboardPage from './pages/dashboardPage.jsx'

import './App.css'

function App() {
  const pathname = usePathname()

  if (pathname === '/login') {
    return (
      <div className="app-shell">
        <Header />
        <main className="page-content">
          <LoginPage />
        </main>
      </div>
    )
  }

  if (pathname === '/register') {
    return (
      <div className="app-shell">
        <Header />
        <main className="page-content">
          <RegisterPage />
        </main>
      </div>
    )
  }

  
  if (pathname === '/dashboard') {
    return (
      <div className="app-shell">
        <Header />
        <main className="page-content">
          <DashboardPage />
        </main>
      </div>
    )
  }

  return (
    <div className="app-shell">
      <Header />
      <main className="page-content">
        <HomePage />
      </main>
    </div>
  )
}




export default App
