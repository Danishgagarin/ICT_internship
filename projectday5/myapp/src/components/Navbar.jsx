import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
      <div>
          <AppBar position="static">
              <Toolbar>
                  <Link to='/add'>
                    <Button variant="contained"> Add</Button> 
                  </Link>
                  <Link to='/view'>
                    <Button variant="contained"> View</Button>
                  </Link>
                  <Link to='/'>
                    <Button variant="contained"> Home</Button>
                  </Link>
              </Toolbar>
          </AppBar>
    </div>
  )
}

export default Navbar