import React from 'react'
import { Button, TextField } from '@mui/material'
import { useState } from 'react'
const Welcome = () => {
    var [name, setName] = useState("");
    
    const vue = () => {
        setName("Vue");
    }

    const react = () => {
        setName("React");
    }


    const angular = () => {
        setName("Angular");
    }


  return (
      <div>
          <h1> Welcome :{name}</h1>
          <Button variant="contained" onClick={vue}>Vue</Button>&nbsp;<Button variant="contained" onClick={react}>React</Button>&nbsp;<Button variant="contained" onClick={angular}>Angular</Button>
    </div>
  )
}

export default Welcome
