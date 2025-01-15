import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'

const Api = () => {

    const [data, setData] = useState([])
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            console.log(res.data);
            setData(res.data);
        });
    return (
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">City</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((val) => {
                            return (
                                <TableRow>
                                    <TableCell>{val.name}</TableCell>
                                    <TableCell>{val.email}</TableCell>
                                    <TableCell>{val.address.city}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Api
