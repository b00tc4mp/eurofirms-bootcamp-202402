import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import Home from "./pages/Home";
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import logic from './logic'

function App() {
  const navigate = useNavigate()

  const handleUserRegistered = () => navigate('/login')

  const handleUserLoggedIn = () => navigate('/')

  const handleUserResetPassword = () => navigate('/login')

  const handleRegisterClick = () => navigate('/register')

  const handleLoginClick = () => navigate('/login')

  const handleResetPasswordClick = () => navigate('/resetpassword')

  const handleLogout = () => navigate('/login')

  return (
    <>
      <Routes>
      <Route path="/login" element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Login onUserLoggedIn={handleUserLoggedIn} onRegisterClick={handleRegisterClick} onResetPasswordClick={handleResetPasswordClick}/>} />
      <Route path="/register" element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Register onUserRegistered={() => handleUserRegistered()} onLoginClick={handleLoginClick} onResetPasswordClick={handleResetPasswordClick}/>} />
      <Route path="/resetpassword" element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <ResetPassword onUserResetPassword={() => handleUserResetPassword()} onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick}/>} />
      <Route path="/" element={logic.isUserLoggedIn() ? <Home onUserLoggedOut={handleLogout} /> : <Navigate to="/login" />} />
    </Routes>
    </>
  );
}
export default App;
