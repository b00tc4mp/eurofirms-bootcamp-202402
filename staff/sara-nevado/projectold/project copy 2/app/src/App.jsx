import React from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import logic from './logic'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Calendar from './pages/Calendar'



function App() {
  const navigate = useNavigate()

  const handleUserLoggedIn = () => navigate('/')
  const handleUserRegistered = () => navigate('/login')
  const handleRegisterClick = () => navigate('/register')
  const handleLoginClick = () => navigate('/login')
  const handleUserLoggedOut = () => navigate('/login')

  console.debug('App render')

  return (
    <Routes>
      <Route
        path="/login"
        element={
          logic.isUserLoggedIn() ? <Navigate to="/" /> : <Login onUserLoggedIn={handleUserLoggedIn} onRegisterClick={handleRegisterClick} />
        }
      />
      <Route
        path="/register"
        element={
          logic.isUserLoggedIn() ? <Navigate to="/" /> : <Register onUserRegistered={handleUserRegistered} onLoginClick={handleLoginClick} />
        }
      />
      <Route
        path="/"
        element={
          logic.isUserLoggedIn() ? (
            <Home onUserLoggedOut={handleUserLoggedOut}>
              <Calendar />
            </Home>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  )
}

export default App

