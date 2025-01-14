import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
                  <Link to='/log'>
                      <Button variant="contained"> Login</Button>
                  </Link>
                  <Link to='/sign'>
                      <Button variant="contained"> SignIn</Button>
                  </Link>
                  <Link to='/state'>
                      <Button variant="contained"> State</Button>
                  </Link>
              </Toolbar>
          </AppBar>
    </div>
  )
}

export default NavBar

