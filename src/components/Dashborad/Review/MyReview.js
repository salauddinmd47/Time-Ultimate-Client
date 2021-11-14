import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
const MyReview = () => {
    const {user} = useAuth()
    const { register,reset, handleSubmit,   formState: {   } } = useForm();
  const onSubmit = data => {
      fetch('https://lit-ravine-71907.herokuapp.com/reviews',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(data)
      })
      .then(res=> res.json())
      .then(data=> {
          
          if(data.insertedId){
              alert('Thank You for Sharing your precious opinion with us')
              reset()
          }
      })};
    return (
        <div style={{ minHeight:'100vh' }}>
            <div className='text-center'>
            <h4>REVIEWS</h4>
            <h2>Leave Your Precious Opinion</h2> 
            </div>
            <form className="w-50 mx-auto bg-dark p-3" onSubmit={handleSubmit(onSubmit)}>
      
            <input className="d-block w-100 mb-3" defaultValue={user.displayName} {...register("name")} required /> 
            <textarea className="d-block w-100 mb-3" placeholder="write your comment here"  {...register("comment")} required /> 
            <input className="d-block w-100 mb-3" placeholder="enter img url"    {...register("img")}  /> 
            <input className="d-block w-100 mb-3" placeholder="rating i.e 1,2 .."   {...register("rating")} required /> 
      
            <input className="bg-success" type="submit" />
    </form>

        </div>
    );
};

export default MyReview;