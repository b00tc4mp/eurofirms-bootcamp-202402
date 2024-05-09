import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import RegisterStudent from './pages/RegisterStudent.jsx'

import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import logic from './logic'

function App() {
  const navigate = useNavigate()

  const handleStudentRegistered = () => navigate('/login')

  const handleUserLoggedIn = () => navigate('/')

  const handleRegisterClick = () => navigate('/register')

  const handleLoginClick = () => navigate('/login')

  const handleLogoutClick = () => navigate('/login')

  const handleHomeClick = () => navigate('/')

  console.debug('App render')

  return ( 
  <Routes>
      <Route path="/" element={logic.isUserLoggedIn() ? <Home onUserLoggedOut={handleLogoutClick} onLoginClick={handleLoginClick} /> : <Navigate to="/login" />} />
      
      <Route path="/login" 
       element={logic.isUserLoggedIn() ? 
       <Navigate to="/" /> : 
       <Login onUserLoggedIn={handleUserLoggedIn} onRegisterClick={handleRegisterClick} />}
      />
      
      <Route path="/register" 
        element={logic.isUserLoggedIn() ? 
        <Navigate to="/" /> : 
        <RegisterStudent onStudentRegistered={() => handleStudentRegistered()} onLoginClick={handleLoginClick}  onHomeClick={handleHomeClick} />} 
      />

    </Routes>
    )
}

export default App