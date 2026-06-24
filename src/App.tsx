
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import SucessPage from './pages/payments/SucessPage'
import Login from './pages/InAndOut/page'
import RegisterPage from './pages/InAndOut/Register'
import PageGiveBillets from './pages/contracts/page'
import ProtectedRoute from './server/context/protectedRoute'
import LoginRoute from './server/context/LoginRoute'

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
            <Route path='/generateBoleto' element={<SucessPage/>}/>
            <Route path='/giveBankBillets' element={<PageGiveBillets/>}/>
          </Route>
      </Routes>
  )
}

export default App
