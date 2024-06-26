import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import './index.css'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import logic from './logic'

function App() {
    const navigate = useNavigate()

    const handleUserRegistered = () => navigate('/login')

    const handleUserLoggedIn = () => navigate('/')

    const handleLoginButton = () => navigate('/login')

    const handleRegisterButton = () => navigate('/register')

    const handleLogoutButton = () => navigate('/login')

    return <>
        <Routes>
            <Route path="/login" element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Login onUserLoggedIn={() => handleUserLoggedIn()} onRegisterClick={() => handleRegisterButton()} />} />
            <Route path="/register" element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Register onUserRegistered={() => handleUserRegistered()} onLoginClick={() => handleLoginButton()} />} />
            <Route path="/" element={logic.isUserLoggedIn() ? <Home onLogoutClick={() => handleLogoutButton()} /> : <Navigate to="/login" />} />
        </Routes>
    </>
}

export default App
