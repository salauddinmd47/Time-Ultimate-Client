import React, { useEffect, useState } from 'react';
import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow,Table } from "@mui/material";
import { Button } from "react-bootstrap";
const ManageProducts = () => {
    const [products , setProducts] = useState([])

    useEffect(()=>{
        fetch('https://lit-ravine-71907.herokuapp.com/products')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])
    const handleDelete = id =>{
      fetch(`https://lit-ravine-71907.herokuapp.com/products/${id}`,{
        method:'DELETE', 
      })
      .then(res=> res.json())
      .then(data=> {
        if(data.deletedCount){
          const proceed = window.confirm('Are you sure? want to delete')
          if(proceed){
            const remainingProducts = products.filter(product=> product._id !== id)
            setProducts(remainingProducts)
          }
        }
      })
    }
    return (
        <div>
            <h2>Manage products</h2>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
           
            <TableCell align="right">Product Id</TableCell>
            <TableCell align="right">Action</TableCell>
             
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {  <TableCell component="th" scope="row">
              {row.name}
              </TableCell>  } 
              <TableCell align="right">{row._id}</TableCell>
              <TableCell align="right"><Button 
                onClick={()=> handleDelete(row._id)}
                variant="danger"
                >Delete</Button></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default ManageProducts;