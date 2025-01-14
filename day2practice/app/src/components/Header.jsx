import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <header className="header">
            <div>
              <Link to='/'>
                  <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7KzX14gSaNj8m1ZN4StPldsekx3zx5RApuA&s"
                      alt="logo"
                      width="120px"
                  />
              </Link>
            </div>
             <div className="nav-links">
                <span className="topLink">About</span>
                <Link to='/pricing'><span className="topLink">Pricing</span></Link>
                <span className="topLink">Projects</span>
            </div>
      </header>
    </div>
  )
}

export default Header