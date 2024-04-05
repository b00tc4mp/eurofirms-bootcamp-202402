import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = { view: 'register' };
  }

  handleUserRegistered() {
    this.setState({ view: 'login' });
  }

  render() {
    return (
      <>
        {this.state.view === 'login' && <Login />}
        {this.state.view === 'register' && (
          <Register onUserRegistered={() => this.handleUserRegistered()} />
        )}
        {this.state.view === 'home' && <Home />}
      </>
    );
  }
}

export default App;
