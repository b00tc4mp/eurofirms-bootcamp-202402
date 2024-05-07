import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import RegisterStudent from './pages/RegisterStudent.jsx'
import ResetPassword from './pages/ResetPassword.jsx'
import Profile from './pages/Profile.jsx'
import Contact from './pages/Contact.jsx'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import logic from './logic'

function App() {
  const navigate = useNavigate()

  const handleUserRegistered = () => navigate('/login')

  const handleUserLoggedIn = () => navigate('/')

  const handleRegisterClick = () => navigate('/register')

  const handleResetPasswordClick = () => navigate('/resetPassword')

  const handleLoginClick = () => navigate('/login')

  const handleUserLoggedOut = () => navigate('/login')

  const handleContactClick = () => navigate('/contact')

  const handleHomeClick = () => navigate('/home')

  console.debug('App render')

  return <>
    <Routes>
      <Route path="/home" element={<Home />} 
        onLoginClick={handleLoginClick} 
        onContactClick={handleContactClick}
      />
      
      <Route path="/login" element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Login onUserLoggedIn={handleUserLoggedIn} onRegisterClick={handleRegisterClick} onResetPasswordClick={handleResetPasswordClick}/>} />
      
      <Route path="/register" 
        element={logic.isUserLoggedIn() ? 
        <Navigate to="/login" /> : 
        <Register onUserRegistered={() => handleUserRegistered()} 
          onLoginClick={handleLoginClick} 
          onHomeClick={handleHomeClick} 
        />} 
      />
      
      <Route path="/resetPassword" 
        element={ <ResetPassword />} 
        onLoginClick={handleLoginClick} 
        onRegisterClick={handleRegisterClick} 
        onHomeClick={handleHomeClick}
      />
      
      <Route path="/profile" 
        element={logic.isUserLoggedIn() ? 
        <Profile onUserLoggedOut={handleUserLoggedOut} /> : 
          <Navigate to="/" 
        />} 
      />

      <Route path="/contact" element={<Contact />} 
        onLoginClick={handleLoginClick} 
        onHomeClick={handleHomeClick}
      />

      <Route path="/" element={logic.isUserLoggedIn() ? <Home onUserLoggedOut={handleLogout} /> : <Navigate to="/login" />} />

    </Routes>
  </>
}

export default App