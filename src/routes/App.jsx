import '../sass/index.scss'
//Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//components
import RecoveryPassword from '../components/RecoveryPassword'
import LoginCheck from '../components/LoginCheck'
import Login from '../Pages/Login'
import LoginRegister from '../components/LoginRegister'
import Layout from '../containers/Layout'
import Home from '../Pages/Home'
import NotFound from '../Pages/NotFound'

//Svg
// import logoYard from './assets/logos/logo_yard_sale.svg'
function App() {

  return (
      <BrowserRouter>
        <Layout >
          <Routes> 
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<LoginRegister />} />
              <Route path="/check-password" element={<LoginCheck />} />
              <Route path="/recovery-password" element={<RecoveryPassword />} />
              <Route path="*"element={ <NotFound /> } />
          </Routes>
        </Layout>
      </BrowserRouter>
  )
}

export default App
