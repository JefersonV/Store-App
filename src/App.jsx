import { useState } from 'react'
import './App.css'
import './sass/index.scss'
//components
import RecoverPassword from './components/RecoverPassword'
import LoginCheck from './components/LoginCheck'
import Login from './components/Login'
import LoginRegister from './components/LoginRegister'
import Layout from './components/Layout'
//Svg
// import logoYard from './assets/logos/logo_yard_sale.svg'
function App() {

  return (
    <>
    <Layout >
      <RecoverPassword />
      <LoginCheck />
      <Login />
      <LoginRegister />
    </Layout>
    </>
  )
}

export default App
