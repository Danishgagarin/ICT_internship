import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'

const State = () => {
    var [name, setName] = useState("ramu");
    var [name1, setName1] = useState("ramu");

    const handleInput = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    };

    const handleSubmit = () => {
        setName1(name);
    };

    return (
        <div>
            
            <h1>Hello Mr:{name1}</h1>
            <TextField variant="outlined" label="tocheckchange" onChange={handleInput}></TextField>
            <Button varient="contained" onClick={handleSubmit}>Submit</Button>
        </div>
    )
}

export default State
