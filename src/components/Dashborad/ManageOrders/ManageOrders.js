import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow,Table, Alert } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
 import useAuth from '../../../hooks/useAuth'

const ManageOrders = () => {
   
    const [orders, setOrders] = useState([])
    const [success , setSuccess] = useState(false)
    const {isLoading, setIsLoading} = useAuth()

    useEffect(()=>{
        fetch('https://lit-ravine-71907.herokuapp.com/allOrders')
        .then(res=> res.json())
        .then(data=> setOrders(data))
    },[])

    const handleOrderUpdate = id =>{
     setIsLoading(true)
      fetch(`https://lit-ravine-71907.herokuapp.com/updateOrder/${id}`,{
        method:'PUT', 
      })
      .then(res=> res.json())
      .then(data => {
        if(data.modifiedCount){
          const proceed =  window.confirm('do you want to update order status')
          if(proceed){
             setSuccess(true)
             setIsLoading(false)
          }
        }
      })
    }
    const handleDeleteOrders = id =>{
      
      fetch(`https://lit-ravine-71907.herokuapp.com/orders/${id}`,{
        method:'DELETE'
      })
      .then(res=> res.json())
      .then(data=> {
        if(data.deletedCount){
          const proceed = window.confirm('Are you sure? want to delete this order')
          if(proceed){
           const remainingOrders= orders.filter(order=> order._id !== id)
           setOrders(remainingOrders)
          }
         }
      })
    }
    if(isLoading){
      return <Spinner animation="border" variant="primary" />
    }
  return (
    <div className="min-vh-100">
      <div>
        <h4>ALL ORDERS</h4>
        <h2>MANAGE ALL YOUR ORDERS</h2>
      </div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="fw-bold ">Customer Name</TableCell> 
            <TableCell className="fw-bold " align="left">Product Name</TableCell>
            <TableCell className="fw-bold " align="left"> Order Status</TableCell> 
            <TableCell className="fw-bold " align="left"> Update Status</TableCell> 
            <TableCell className="fw-bold " align="left">Action</TableCell>
             
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {  <TableCell component="th" scope="row">
              {row.customerName}
              </TableCell>  } 
              <TableCell align="left">{row.productName}</TableCell>
              {
                row?.status? <TableCell className="text-success" align="left">{row.status}</TableCell>:<TableCell className="text-danger" align="left">pending...</TableCell>
              }
              <TableCell align="left"><Button 
              onClick= {()=>handleOrderUpdate(row._id)}
                variant="warning"
                >Update Status</Button></TableCell>
              <TableCell align="left"><Button 
              onClick= {()=>handleDeleteOrders(row._id)}
                variant="danger"
                >delete</Button></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {success && <Alert severity="success">Order Status successfully updated give reload to see in UI</Alert>}
    </div>
  );
};

export default ManageOrders;
