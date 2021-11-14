import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link,useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
 
 
// here is Login related function 
 
const Login = () => {
    const {googleSignIn,processLogin,registerUser,isLoading} = useAuth()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("");
    const [newUser, setNewUser] = useState(false)
    const location = useLocation();
    const history = useHistory(); 

     const handleName= e =>{
       setName(e.target.value)
     }
    const handleEmail = (e) => {
        setEmail(e.target.value);
      };
      const handlePassword = (e) => {
        setPassword(e.target.value);
      };
      const handleCheckBok= e=>{
        setNewUser(e.target.checked)
      }
      // here  calling processLogin function which is coming from useFirebase
      const handleRegister=e=>{
        registerUser(email, password, name,history, location)
        e.preventDefault()
      }
      const handleLogin = (e)=>{
        e.preventDefault();
        processLogin(email, password, history, location) 
        
      }
      // handling google sign in 
      const handleGoogleSignIn = ()=>{
        googleSignIn()
        const destination = location?.state?.from || "/";
        history.replace(destination); 
        
      }
    return (
        <div>
            <Navigation></Navigation>
            <div className="login-form pt-3 ">
            <div className="login-field bg-dark w-25 mt-5 p-5 mx-auto border">
                {
                  newUser? <h2>Register</h2>: <h2>Login</h2>
                }
                {!isLoading && <form   onSubmit={handleLogin}>
                    {
                      newUser &&  <input type="text" name="" id="" placeholder = 'your name' onBlur={handleName} required />  
                    }
                    <br/>
                    <br/>
                    <input type="email" name="" id="" placeholder = 'your email' onBlur={handleEmail} required />
                    <br />
                    <br />
                    <input type="password" name="" id="" placeholder="password" onBlur={handlePassword} required />
                    <br />
                    <br />
                    {
                      newUser? <button 
                      className="btn btn-danger"
                      onClick={handleRegister}
                      >Register</button>
                      :<input className="btn btn-danger" type="submit" value="Login" />
                     
                    }
                    <br/>
                    <input  type="checkbox" 
                    onChange={handleCheckBok}
                    class="form-check-input" id="exampleCheck1"/>
                    <label className="text-warning" class="form-check-label" for="exampleCheck1">New User? Please Register</label>
                </form>}
                {
                  isLoading && <Spinner animation="border" variant="primary" />
                }
                
                <div>---------or---------</div>
                <button 
                onClick={handleGoogleSignIn}
                className="btn btn-success"
                >Google SignIn</button>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Login;