import '../sass/index.scss'
//Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//components
import RecoverPassword from '../components/RecoverPassword'
import LoginCheck from '../components/LoginCheck'
import Login from '../components/Login'
import LoginRegister from '../components/LoginRegister'
import Layout from '../containers/Layout'
import Home from '../components/Home'
import NotFound from '../components/NotFound'

//Svg
// import logoYard from './assets/logos/logo_yard_sale.svg'
function App() {

  return (
      <BrowserRouter>
        <Layout >
          <Routes> 
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/recover" element={<RecoverPassword />} />
              <Route path="*"element={ <NotFound /> } />
          </Routes>
        </Layout>
      </BrowserRouter>
  )
}

export default App
