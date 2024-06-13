import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import logic from './logic'


function App() {

  const navigate = useNavigate()

  const handleRegisterClick = () => navigate('/register')

  const handleUserRegistered = () => navigate('/login')

  const handleUserLoggedIn = () => navigate('/home')

  const handleLoginClick = () => navigate('/login')

  const handleUserLoggedOut = () => navigate('/login')


  return <>
    <Routes>
      <Route path='/login' element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Login OnUserLoggedIn={handleUserLoggedIn} OnRegisterClick={handleRegisterClick} />} />
      <Route path='/register' element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Register onUserRegistered={() => handleUserRegistered()} onLoginClick={handleLoginClick} />} />
      <Route path='/' element={logic.isUserLoggedIn() ? <Home onUserLoggedOut={handleUserLoggedOut} /> : <Navigate to="/login" />} />
    </Routes>


  </>

}

export default App
