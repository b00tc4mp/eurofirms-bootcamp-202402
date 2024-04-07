import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import './index.css'
import { Component } from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = { view: 'login' }
    }

    handleUserRegistered() {
        this.setState({ view: 'login' })
    }
    handleUserLoggedIn() {
        this.setState({ view: 'home' })
    }
    handleLoginButton() {
        this.setState({ view: 'login' })
    }
    handleRegisterButton() {
        this.setState({ view: 'register' })
    }
    handleLogoutButton() {
        this.setState({ view: 'login' })
    }
    render() {

        return <>
            {this.state.view === 'login' && <Login onUserLoggedIn={() => this.handleUserLoggedIn()} onRegisterClick={() => this.handleRegisterButton()} />}
            {this.state.view === 'register' && <Register onUserRegistered={() => this.handleUserRegistered()} onLoginClick={() => this.handleLoginButton()} />}
            {this.state.view === 'home' && <Home onLogoutClick={() => this.handleLogoutButton()} />}
        </>
    }
}

export default App
