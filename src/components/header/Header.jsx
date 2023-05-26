import React, { useEffect } from 'react'
import './Header.css'
import { Link, useLocation } from 'react-router-dom'

function Header(props) {
  const location = useLocation()
  const currentPath = location.pathname

  const [currentLocation, setCurrentLocation] = React.useState(currentPath)

  useEffect(() => {
    setCurrentLocation(location.pathname)
  }, [location.pathname])

  const links = [
    { link: `/`, title: 'Home' },
    { link: `/gallery`, title: 'Gallery' },
    { link: `/Recipes`, title: 'Recipes' },
  ]
  const getCurrentLinkStyle = (data) => {
    let condition = currentLocation === data.link
    return {
      background: condition ? `var(--main-color)` : '',
      color: condition ? `#fff` : '',
      boxShadow: condition
        ? 'box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;'
        : '',
    }
  }
  return (
    <div className={`header-wrapper`}>
      <nav>
        <ul>
          {links.map((item) => (
            <li key={item.link}>
              <Link end={true} style={getCurrentLinkStyle(item)} to={item.link}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Header