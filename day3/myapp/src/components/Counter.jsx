import React from 'react'
import { Button, TextField } from '@mui/material'
import { useState } from 'react';


const Counter = () => {
    var [count, setCount] = useState(0);

    const onAdd = () => {
        setCount(count+= 1);
    }

    const onSubtract = () => {
        setCount(count-=1);  
    }

    return ( 
      <div>
          <h1>COUNT : {count}</h1>
            <Button variant="contained" onClick={onAdd}>add</Button>&nbsp;<Button variant="contained" onClick={onSubtract}>subtract</Button>
    </div>
  )
}

export default Counter
