import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import './index.css'
import { useState } from 'react'

function App() {
    const login = 'login'
    const home = 'home'
    const register = 'register'

    const [view, setView] = useState(login)

    const handleUserRegistered = () => setView(login)

    const handleUserLoggedIn = () => setView(home)

    const handleLoginButton = () => setView(login)

    const handleRegisterButton = () => setView(register)

    const handleLogoutButton = () => setView(login)

    return <>
        {view === login && <Login onUserLoggedIn={() => handleUserLoggedIn()} onRegisterClick={() => handleRegisterButton()} />}
        {view === register && <Register onUserRegistered={() => handleUserRegistered()} onLoginClick={() => handleLoginButton()} />}
        {view === home && <Home onLogoutClick={() => handleLogoutButton()} />}
    </>
}

export default App
