import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div className='container'> 
        <h1>Login form</h1>
   <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email Address"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Password</label>
  <textarea class="form-control" id="exampleFormControlTextarea1"  placeholder ='Enter Your Password'></textarea>
</div>
  <div class="col-auto">
    <span id="passwordHelpInline" class="form-text"> Must be 8-20 characters long.
    </span>
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Login</button>
  </div>
      </div>
  )
        }

export default Login
