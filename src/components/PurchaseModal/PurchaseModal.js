import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button'; 
import { useForm } from "react-hook-form";
import ProductCard from '../Home/ProductCard/ProductCard';
import './PurchaseModal.css'
import useAuth from '../../hooks/useAuth';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const PurchaseModal = ({open, handleClose,handleOpen,product}) => {
    const { register,reset, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
      fetch('https://lit-ravine-71907.herokuapp.com/orders',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
      })
      .then(result=> result.json())
      .then(data=>{
        if(data.insertedId){
          alert('Your order placed successfully')
          reset()
          handleClose()
        }
      })
      console.log(data)};
    const {user} = useAuth()
    return (
        <div> 
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
            <form onSubmit={handleSubmit(onSubmit)}>
      <label className="fw-bold " htmlFor="">Product Name:</label>
      <input defaultValue={product.name} {...register("productName")} /> 
      <label className="fw-bold " htmlFor="">Price:</label>
      <input  defaultValue={product.price} {...register("price", { required: true })} />
      <label  className="fw-bold " htmlFor="">Customer Name:</label>
      <input defaultValue={user.displayName}  {...register("customerName", { required: true })} />
      <label className="fw-bold " htmlFor="">Email:</label>
      <input defaultValue={user.email}  {...register("email", { required: true })} /> 
      <label className="fw-bold " htmlFor="">Phone Number:</label>
      <input placeholder="enter your phone"  {...register("phone", { required: true })} /> 
      <label className="fw-bold " htmlFor="">Shipping Address:</label>
      <input placeholder="enter your address" {...register("shippingAddress", { required: true })} />  
      <br />
       <Button variant="contained" type="submit"> Place Order</Button>
    </form>
            </Box>
          </Fade>
        </Modal>
      </div>
    );
};

export default PurchaseModal;