
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/InAndOut/page'
import RegisterPage from './pages/InAndOut/Register'
import PageGiveBillets from './pages/contracts/page'
import ProtectedRoute from './server/context/protectedRoute'
import LoginRoute from './server/context/LoginRoute'
import BankBilletPage from './pages/bankBillets/page'
import ClientDetailPage from './pages/ClientDetailPage/contractsPage/page'
import InstallmentsPage from './pages/ClientDetailPage/InstallmentsPage/page'

function App() {

  return (
      <Routes>
          {/*Login && Register */}
          <Route element={<LoginRoute/>}>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
          </Route>

          {/*Private Routes */}
          <Route element={<ProtectedRoute/>}>
            <Route path='/' element={<Navigate to="/giveBankBillets" replace/>}/>

            {/*Contracts && billets */}
            <Route path='/generateBoleto' element={<BankBilletPage/>}/>
            <Route path='/giveBankBillets' element={<PageGiveBillets/>}/>

            {/*User page */}
            <Route path='/client/:id' element={<ClientDetailPage/>}/>
            <Route path='/client/:id/contract/:idContract' element={<InstallmentsPage/>}/>
          </Route>
      </Routes>
  )
}

export default App
