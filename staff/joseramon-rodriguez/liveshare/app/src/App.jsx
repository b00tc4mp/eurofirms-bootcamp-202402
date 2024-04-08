import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { useState } from 'react'

function App() {
  const [view, setView] = useState('login')

  const handleUserRegistered = () => {
    setView('login')
  }

  const handleUserLoggedIn = () => {
    setView('home')
  }

  const handleRegisterClick = () => {
    setView('register')
  }

  const handleLoginClick = () => {
    setView('login')
  }

  const handleLogoutClick = () => {
    setView('login')
  }

  return <>
    {view === 'login' && <Login
      onUserLoggedIn={handleUserLoggedIn}
      onRegisterClick={handleRegisterClick} />}
    {view === 'register' && <Register
      onUserRegistered={handleUserRegistered}
      onLoginClick={handleLoginClick} />}
    {view === 'home' && <Home
      onLogoutClick={handleLogoutClick} />}
  </>
}

export default App
