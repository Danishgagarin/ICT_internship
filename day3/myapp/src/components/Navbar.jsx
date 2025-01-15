import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const NavBar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar className="nav">
                  <Link to='/log'>
                      <Button variant="contained"> Login</Button>
                  </Link>
                  <Link to='/sign'>
                      <Button variant="contained"> SignIn</Button>
                  </Link>
                  <Link to='/state'>
                      <Button variant="contained"> State</Button>
                  </Link>
                  <Link to='/counter'>
                      <Button variant="contained"> Counter</Button>
                  </Link>
                  <Link to='/welcome'>
                      <Button variant="contained"> Welcome</Button>
                  </Link>
                  <Link to='/cardget'>
                      <Button variant="contained"> Card</Button>
                  </Link>
                  <Link to='/api'>
                      <Button variant="contained"> Api</Button>
                  </Link>
              </Toolbar>
          </AppBar>
    </div>
  )
}

export default NavBar

