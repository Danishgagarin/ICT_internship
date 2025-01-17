import { TableBody,Table, TableContainer,TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'

const View = () => {
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead sx={{ borderBottom: '2px solid black' }}>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Department</TableCell>
                        <TableCell>Salary</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>dasdas</TableCell>
                        <TableCell>dasdas</TableCell>
                        <TableCell>dasdas</TableCell>
                        <TableCell>dasdas</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default View