import { TextField, Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Add = (props) => {
  var [input, setinput] = useState({ Name: "", Age: "", Department: "", Salary: "" })

  var location = useLocation()
  var navigate = useNavigate()
  console.log("loc", location.state);

  const inputHandler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value })
    console.log(input)
  }

  const addHandler = () => {
    if (location.state !== null) {
        axios.put("http://localhost:8012/update/", location.state.val_id,...input)
        .then((res) => {
          alert(res.data.message);
          navigate("/view")
        })
      
    } else {
        axios.post("http://localhost:8012/add", input)
        .then((res) => {
          alert(res.data.message);
          navigate("/view")
        })
    }
  }

  useEffect(() => {
    if (location.state !== null) {
      setinput({
        ...input,
        Name: location.state.val.Name,
        Age: location.state.val.Age,
        Department: location.state.val.Department,
        Salary: location.state.val.Salary
      })
    }
  }, [location.state]);




  return (
    <div>
      <br />
      <TextField label="name" variant="outlined" name="Name" value={input.Name} onChange={inputHandler}>Name</TextField><br /><br />
      <TextField label="age" variant="outlined" name="Age" value={input.Age} onChange={inputHandler}>Age</TextField><br /><br />
      <TextField label="department" variant="outlined" name="Department" value={input.Department} onChange={inputHandler}>Department</TextField><br /><br />
      <TextField label="salary" variant="outlined" name="Salary" value={input.Salary} onChange={inputHandler}>Salary</TextField><br /><br />
      <Button varient="contained" onClick={addHandler}>Sumbit</Button>
    </div>
  )
}

export default Add
