import { useEffect, useState } from 'react'

function usePathname() {
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    const handleLocationChange = () => setPathname(window.location.pathname)

    window.addEventListener('popstate', handleLocationChange)
    window.addEventListener('app:navigate', handleLocationChange)

    return () => {
      window.removeEventListener('popstate', handleLocationChange)
      window.removeEventListener('app:navigate', handleLocationChange)
    }
  }, [])

  return pathname
}

export default usePathname
