import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
const MyOrder = () => {
    const {user} = useAuth()
    const [orders, setOrders] = useState([])

    useEffect(()=>{
        fetch(`https://lit-ravine-71907.herokuapp.com/orders?email=${user.email}`)
        .then(res=> res.json())
        .then(data=> setOrders(data))
    },[])
    const handleDelete= id=>{
      fetch(`https://lit-ravine-71907.herokuapp.com/orders/${id}`,{
        method:'DELETE',
      })
      .then(res=> res.json())
      .then(data=>{
        if(data.deletedCount){
         const proceed = window.confirm('Are you sure? want to delete this order')
         if(proceed){
          const remainingOrders= orders.filter(order=> order._id !== id)
          setOrders(remainingOrders)
         }
        }
      })
    }
    return (
        <div style={{ minHeight:'100vh' }}>
            <div className="text-center mt-3">
                <h2>MY ORDERS</h2> 
                <h2>ORDERS OF {user.displayName}</h2>
            </div>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
           
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Action</TableCell>
             
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {  <TableCell component="th" scope="row">
              {row.productName}
              </TableCell>  } 
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right"><Button 
              onClick={()=>handleDelete(row._id)} variant="danger">Delete</Button></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default MyOrder;