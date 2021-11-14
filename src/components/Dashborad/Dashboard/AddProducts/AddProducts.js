import { Alert } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
const AddProducts = () => {
    const [insertProduct, setInsertProduct] =useState(false)
    const { register,reset, handleSubmit,   formState: {   } } = useForm();
    const onSubmit= data=> {
        fetch('https://lit-ravine-71907.herokuapp.com/products',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)

        })
        .then(res=> res.json())
        .then(data=> {
            if(data.insertedId){
                setInsertProduct(true)
                reset()
            }
        })
        console.log(data)
    }
    return (
        <div className="min-vh-100">
            <h2 className='text-center my-3'> Add a product </h2>
            <form className="w-50 mx-auto bg-dark p-3" onSubmit={handleSubmit(onSubmit)}>
      
            <input className="d-block w-100 mb-3"  placeholder="name" {...register("name")} required /> 
            <input className="d-block w-100 mb-3" placeholder="enter prce"  {...register("price")} required /> 
            <input className="d-block w-100 mb-3" placeholder="product description"  {...register("description")} required /> 
            <input className="d-block w-100 mb-3" placeholder="product img url"    {...register("img")}  /> 
            <input className="d-block w-100 mb-3" placeholder="rating i.e 1,2 .."   {...register("rating")} required /> 
      
            <input className="bg-success" value="Add Product" type="submit" />
    </form>
    <br /> 
    {
        insertProduct && <Alert severity="success">Product added successfully</Alert>
    }
        </div>
    );
};

export default AddProducts;