import { IconButton, TextField } from '@mui/material'
import React from 'react'


const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <TextField id="outlined-basic" label="Username" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
        
        </div>
    )
}

export default Login
