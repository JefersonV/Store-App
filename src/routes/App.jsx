import '../sass/index.scss'
//Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//components
import RecoveryPassword from '../Pages/RecoveryPassword'
import LoginCheck from '../Pages/LoginCheck'
import Login from '../Pages/Login'
import LoginRegister from '../Pages/LoginRegister'
import Home from '../Pages/Home'
import Layout from '../containers/Layout'
import NotFound from '../Pages/NotFound'
import MyOrders from '../Pages/MyOrders'
import Orders from '../Pages/Orders'
import MyAccount from '../Pages/MyAccount'
//Context
import AppContext from '../Context/AppContext'
//Hooks
import useInitialState from '../hooks/useInitialState'

const App = () => {

  const InitialState = useInitialState()
  return (
    <AppContext.Provider value={InitialState}>
      <BrowserRouter>
        <Layout >
          <Routes> 
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<LoginRegister />} />
              <Route path="/check-password" element={<LoginCheck />} />
              <Route path="/recovery-password" element={<RecoveryPassword />} />
              <Route path="/my-orders" element={<MyOrders />}/>
              <Route path="/orders" element={<Orders />}/>
              <Route path="/my-account" element={<MyAccount />}/>
              <Route path="*"element={ <NotFound /> } />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App