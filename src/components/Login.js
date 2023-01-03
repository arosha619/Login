import React from 'react';
import { useState } from 'react';
import '../components/login.css'
import '../App.css'


function Login() {
  

//initial state of the input fields
const initialvalues = {username:"",password:""};
const [Values,setValues]=useState(initialvalues); 
const [Errors,setErrors]=useState({}); 


//Handle input changes
const handleChange =(e)=>{
    const {name,value}= e.target;
    setValues({...Values,[name]:value});  
};

//send data 
const handleSubmit=(e)=>{
     e.preventDefault();
     setErrors(validate(Values));
    
};


//validation
const validate=(values)=>{
const errors ={};
if(!values.username)
{
    errors.username="Username is required!";
}
if(!values.password)
{
    errors.password="Password is required!";
}else if(values.password.length < 4)
{
    errors.password="Password must be more than 4 characters!";
}
else if(values.password.length > 10)
{
    errors.password="Password cannot exceed more than 10 characters!";
}
return errors;
};

return (
    <div className='container'>
        <form>
            <h1>Login to your account</h1>       
                <div className='field'>
                    <label>Username</label>
                    <img className='uname' src={require('../images/user.png')} alt="user"  />        
                    <input  type="text" name='username' className='textarea' value={Values.username} onChange={handleChange}/>
                </div>
                  <p>{Errors.username}</p>
                <div className='field'>
                    <label>Password</label>
                    <img className='pswd' src={require('../images/unlock.png')} alt="user"  />   
                    <input  type="password" name='password' className='textarea' value={Values.password} onChange={handleChange}/>
                </div>
                  <p>{Errors.password}</p>
                  <div className='middle'>
                         <div className='left'>
                                <input type="checkbox" id='check' />
                                <label for="check">Remember Me</label> 
                         </div>
                         <div className='right'>
                                <label><a href='/'>Forgot password?</a></label>
                         </div>
                         </div>      
                        <button id='btn1' onClick={handleSubmit}><a href='/'>Get started</a></button>
                        <button id='btn2'><a href='/'>Become Member</a></button>
                        <a id='l4' href='/'>Need Help ?</a>
        </form>
    </div>
  )
}

export default Login;
