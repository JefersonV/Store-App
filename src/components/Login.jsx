import React from 'react'

const Login = () => {
  return (
    <div className="login">
      <div className="wrapper">
        
        <div className="login-description">
          <h3>Create a new password</h3>
          <p>Enter a new password for your account</p>
        </div>
        <form action="" className="login-form">
          <label htmlFor="userName">User</label>
          <input type="text" name="userName" id="userName" placeholder="John Doe"/>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="********"/>
          <button type="submit">Confirm</button>
        </form>
      </div>
    </div>
  )
}

export default Login