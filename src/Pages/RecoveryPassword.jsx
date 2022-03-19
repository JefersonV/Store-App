import React from 'react'

const RecoveryPassword = () => {
  return (
    <div className="recover">
      <div className="wrapper">
        
        <div className="recover-description">
          <h3>Create a new password</h3>
          <p>Enter a new password for your account</p>
        </div>
        <form action="" className="recover-form">
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

export default RecoveryPassword