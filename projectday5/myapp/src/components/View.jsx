import { TableBody, Table, TableContainer, TableCell, TableHead, TableRow, Button } from '@mui/material'
import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const View = () => {
    var navigate = useNavigate()
    const [data, setData] = useState([])
    axios.get("http://localhost:8012/view")
        .then((res) => {
            // console.log(res.data);
            setData(res.data);
        });
    const delvalue = (id) => {
        axios.delete("http://localhost:8012/remove/" + id)
            .then((res) => {
                alert(res.data.message)
                window.location.reload()
        })
    }

    const updatevalue = (val) => {
        navigate("/add", { state: {val} })
    }
    
    
    
    return (
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Department</TableCell>
                            <TableCell>Salary</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((val) => {
                            return (
                                <TableRow>
                                    <TableCell>{val.Name}</TableCell>
                                    <TableCell>{val.Age}</TableCell>
                                    <TableCell>{val.Department}</TableCell>
                                    <TableCell>{val.Salary}</TableCell>
                                    <TableCell>
                                        <Button varient="contained" color="error" onClick={() => { delvalue(val._id) }}>Delete</Button>
                                        <Button varient="contained" color="success" onClick={() => { updatevalue(val) }}>Update</Button>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default View