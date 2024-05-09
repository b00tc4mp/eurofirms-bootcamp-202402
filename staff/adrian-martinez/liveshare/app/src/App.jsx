
import Home from "./Pages/home"
import Register from "./Pages/register"
import Login from "./Pages/login"
import logic from "./logic"
//import { useState } from "react"
import { Routes, Route, Navigate, useNavigate } from "react-router-dom"

//Para manejar las vistas hay que hacerlo a través de un estado 
function App() {

  const navigate = useNavigate();

  //const [view, setView] = useState('login')

  /* const handleUserRegistered = () => setView('login')

  const handleUserLoggedIn = () => setView('home')

  const handleRegisterClick = () => setView('register')

  const handleLoginClick = () => setView('login')

  const handleUserLoggedOut = () => setView('login') */

  const handleUserRegistered = () => navigate('/login')

  const handleUserLoggedIn = () => navigate('/')

  const handleRegisterClick = () => navigate('/register')

  const handleLoginClick = () => navigate('/login')

  const handleUserLoggedOut = () => navigate('/login')
  console.debug('App render')

  return <>
    {/* {view === 'login' && <Login onUserLoggedIn={handleUserLoggedIn} onRegisterClick={handleRegisterClick} />}
    {view === 'register' && <Register onUserRegistered={() => handleUserRegistered()} onLoginClick={handleLoginClick} />}
    {view === 'home' && <Home onUserLoggedOut={handleUserLoggedOut} />} */}
    <Routes>
      <Route path="/login" element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Login onUserLoggedIn={handleUserLoggedIn} onRegisterClick={handleRegisterClick} />} />
      <Route path="/register" element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Register onUserRegistered={() => handleUserRegistered()} onLoginClick={handleLoginClick} />} />
      <Route path="/" element={logic.isUserLoggedIn() ? <Home onUserLoggedOut={handleUserLoggedOut} /> : <Navigate to="/login" />} />
    </Routes>
  </>
}

export default App