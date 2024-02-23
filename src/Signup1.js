import React from 'react'
const Signup = () => {
  return (
    <div className='container'>
      <h1>Sign Up </h1>
    <form>
    <div class="form-floating">
      <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Full Name</label>
    </div><br></br>
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div><br></br>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
    </div><br></br>
    <div class="col-auto">
    <span id="passwordHelpInline" class="form-text"> Must be 8-20 characters long.
    </span>
  </div>
<br></br>
    <div class="form-check text-start my-3">
      <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label class="form-check-label" for="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button class="btn btn-primary  py-2" type="submit">Sign in</button>
  </form>
    </div>
  )
}

export default Signup
