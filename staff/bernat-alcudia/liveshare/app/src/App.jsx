import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import { useState } from 'react'


function App() {

  const [view, setView] = useState('login')

  const handleRegisterClick = () => setView('register')

  const handleUserRegistered = () => setView('login')

  const handleUserLoggedIn = () => setView('home')

  const handleLoginClick = () => setView('login')

  const handleUserLoggedOut = () => setView('login')


  return <>
    {view === 'login' && <Login OnUserLoggedIn={handleUserLoggedIn} OnRegisterClick={handleRegisterClick} />}
    {view === 'register' && <Register onUserRegistered={() => handleUserRegistered()} onLoginClick={handleLoginClick} />}
    {view === 'home' && <Home onUserLoggedOut={handleUserLoggedOut} />}
  </>

}


export default App
