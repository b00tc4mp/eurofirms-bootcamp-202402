
import Home from "./Pages/home"
import Register from "./Pages/register"
import Login from "./Pages/login"
import { useState } from "react"
import "./index.css"

//Para manejar las vistas hay que hacerlo a través de un estado 
function App() {
  const [view, setView] = useState('login')

  const handleUserRegistered = () => setView('login')

  const handleUserLoggedIn = () => setView('home')

  const handleRegisterClick = () => setView('register')

  const handleLoginClick = () => setView('login')

  const handleUserLoggedOut = () => setView('login')

  console.debug('App render')

  return <>
    {view === 'login' && <Login onUserLoggedIn={handleUserLoggedIn} onRegisterClick={handleRegisterClick} />}
    {view === 'register' && <Register onUserRegistered={() => handleUserRegistered()} onLoginClick={handleLoginClick} />}
    {view === 'home' && <Home onUserLoggedOut={handleUserLoggedOut} />}
  </>
}

export default App