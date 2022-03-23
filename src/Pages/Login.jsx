import React, { useRef } from 'react'
import YardSale from '../assets/logos/logo_yard_sale.svg'

const Login = () => {
  const form = useRef(null)
  //Fn para manejar el submit de este form
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(form.current)
    const data = {
      //Los inputs deben tener el atributo name
      username: formData.get('email'),
      password: formData.get('password')
    } 
    console.log(data)
  } 
  return (
    <div className="login">
    <div className="form-container">
      <img src={YardSale} alt="logo" className="logo" />
      <form action="/" className="form" ref={form}>
        <label htmlFor="email" className="label">Email address</label>
        <input type="text" name="email" placeholder="platzi@example.cm" className="input input-email" />
        <label htmlFor="password" className="label">Password</label>
        <input type="password" name="password" placeholder="*********" className="input input-password" />
        <button 
          className="primary-button login-button"
          onClick={handleSubmit}>
            Log In
          </button>
        <a href="/">Forgot my password</a>
      </form> 
      <button 
        className="secondary-button signup-button">
        Sign up
      </button>
    </div>
  </div>
  )
}
 
export default Login