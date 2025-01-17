import { TextField,Button } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
        <br/>
        <TextField label="name" varient="outlined">Name</TextField><br/><br/>
        <TextField label="age" varient="outlined">Age</TextField><br/><br/>
        <TextField label="department" varient="outlined">Department</TextField><br/><br/>
        <TextField label="salary" varient="outlined">Salary</TextField><br/><br/>
        <Button varient="contained">Sumbit</Button>
    </div>
  )
}

export default Add
