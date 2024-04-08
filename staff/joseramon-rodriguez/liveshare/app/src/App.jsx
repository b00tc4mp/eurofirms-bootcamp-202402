import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
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

  handleRegisterClick() {
    this.setState({ view: 'register' })
  }

  handleLoginClick() {
    this.setState({ view: 'login' })
  }

  handleLogoutClick() {
    this.setState({ view: 'login' })
  }


  render() {
    return <>
      {this.state.view === 'login' && <Login
        onUserLoggedIn={() => this.handleUserLoggedIn()}
        onRegisterClick={() => this.handleRegisterClick()} />}
      {this.state.view === 'register' && <Register
        onUserRegistered={() => this.handleUserRegistered()}
        onLoginClick={() => this.handleLoginClick()} />}
      {this.state.view === 'home' && <Home
        onLogoutClick={() => this.handleLogoutClick()} />}
    </>
  }

}

export default App
