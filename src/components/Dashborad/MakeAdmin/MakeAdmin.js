import { TextField,Button, Alert } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const handleEmail =e =>{
        setEmail(e.target.value)
        
    }
    const handleMakeAdmin=e=>{
        e.preventDefault()
        const user ={email}
        fetch('https://lit-ravine-71907.herokuapp.com/users/admin',{
            method:'PUT',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=> {
            if(data.modifiedCount){
                setSuccess(true)
                e.target.reset()
            }
        })
       
    }
    return (
        <div className="min-vh-100">
            <div className='border bg-dark p-5 w-50 mx-auto'>
            <h2>Make an admin</h2>
            <form onSubmit={handleMakeAdmin}>
            <TextField 
            sx={{ width:'50%',bgcolor:'white'}}
             onBlur={handleEmail}
            label="email" 
            placeholder='enter email id'
            variant="standard" /> 
            <br />
            <br />
            <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            <br />
            <br />
            {
                success && <Alert severity="success">Admin made successfully</Alert>
            }
            </div>
        </div>
    );
};

export default MakeAdmin;