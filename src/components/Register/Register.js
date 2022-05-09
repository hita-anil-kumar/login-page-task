import React ,{useState} from 'react'
import './Register.scss'
import {Link} from 'react-router-dom'

function Register() {

    const[Email, setEmail]= useState("");
    const[Fusername, setFusername]= useState("");
    const[Lusername, setLusername]= useState("");
    const[Password1, setPassword1]= useState("");
    const[Password2, setPassword2]= useState("");

    const handleSubmit = (event) =>{
        event.preventDefault();
    } 

  return (
    <div className='main-register'>
    <div className='left-side'>
   <p>ajybjhbhdbcekjdc ksjnxk.jwncxwdkjcndclkem;dc</p>
    </div>
    <div className='right-side'>
    <div className='top-right'>
       <p>already have an account?
        <Link id='Links-signin' to="/Login">Sign in</Link>
        </p>
    </div>
    <div className='body-right'>
    <div className='container'>
    <h5>Create account</h5>
    <form onSubmit={handleSubmit}>
        <div className='input-group'>
            <h5>First Name</h5>
            <input type='text' name='Fname' value={Fusername} onChange={(e)=>{setFusername(e.target.value)}} id='fname'/>
        </div>
        <div className='input-group'>
            <h5>Last Name</h5>
            <input type='text' name='Lname' value={Lusername} onChange={(e)=>{setLusername(e.target.value)}} id='lname'/>
        </div>
        <div className='input-group'>
            <h5>Email</h5>
            <input type='Email' name='Email' value={Email} onChange={(e)=>{setEmail(e.target.value)}} id='email'/>
        </div>
        <div className='input-group'>
            <h5>Password</h5>
            <input type='password' name='Pwsd' value={Password1} onChange={(e)=>{setPassword1(e.target.value)}} id='pwsd'/>
        </div>
        <div className='input-group'>
            <h5>Confirm Password</h5>
            <input type='password' name='CPwsd' value={Password2} onChange={(e)=>{setPassword2(e.target.value)}} id='cpwsd'/>
        </div>
        <input type='submit' value='Submit' id='sbtn'/>
        </form>
    </div>
    </div>

    </div>
    </div>
  )
}

export default Register