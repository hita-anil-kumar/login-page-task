import React, {useState} from 'react'
import './Login.scss'
import {Link} from 'react-router-dom'

function Login() {
    
    const[emailVal, setEmailVal]= useState("");
    const[passwordVal, setPasswordVal]= useState("");

    const handleSubmit = (event) =>{
        event.preventDefault();
    }
  return (
      <div className='main-login'>
      <div className='login-container'>
      <div className='left-side'>
        <form onSubmit={handleSubmit}>
            <label for='email1'>Email</label>
                <input placeholder='email' type='email' value={emailVal} onChange={(e)=>{setEmailVal(e.target.value)}} id='email1'/>
            <label for='pwd1'>Password</label>
                <input placeholder='password' type='password' value={passwordVal} onChange={(e)=>{setPasswordVal(e.target.value)}} id='pwd1'/>
                <button type='submit'>Submit</button>
        </form>
        <div className='footer'>
            <h4>Dont have an account?<Link to="/Register">Register Now</Link></h4>
        </div>
      </div>

      <div className='right-side'>
      <div className='welcomenote'>
        <h3>Welcome Back</h3>
      </div>
      </div>

     </div>
     </div>
  )
}

export default Login;