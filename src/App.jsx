import { useState } from 'react'
import './App.css'
import './sass/index.scss'
//components
import RecoverPassword from './components/RecoverPassword'
import LoginCheck from './components/LoginCheck'
import Login from './components/Login'
//Svg
// import logoYard from './assets/logos/logo_yard_sale.svg'
function App() {

  return (
    <>
      <RecoverPassword />
      <LoginCheck />
      <Login />
    </>
  )
}

export default App
