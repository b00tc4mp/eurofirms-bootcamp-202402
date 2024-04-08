import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = { view: "login" };
  }

  handleUserRegistered() {
    this.setState({ view: "login" });
  }

  handleUserLoggedIn() {
    this.setState({ view: "home" });
  }

  handleUserResetPassword() {
    this.setState({ view: "login" });
  }

  handleRegisterClick() {
    this.setState({ view: "register" });
  }

  handleLoginClick() {
    this.setState({ view: "login" });
  }

  handleResetPasswordClick() {
    this.setState({ view: "resetpassword" });
  }

  render() {
    return (
      <>
        {this.state.view === "login" && (
          <Login
            onUserLoggedIn={() => this.handleUserLoggedIn()}
            onRegisterClick={() => this.handleRegisterClick()}
            onResetPasswordClick={() => this.handleResetPasswordClick()}
          />
        )}
        {this.state.view === "register" && (
          <Register
            onUserRegistered={() => this.handleUserRegistered()}
            onLoginClick={() => this.handleLoginClick()}
            onResetPasswordClick={() => this.handleResetPasswordClick()}
          />
        )}
        {this.state.view === "resetpassword" && (
          <ResetPassword
            onUserResetPassword={() => this.handleUserResetPassword()}
            onRegisterClick={() => this.handleRegisterClick()}
            onLoginClick={() => this.handleLoginClick()}
          />
        )}
        {this.state.view === "home" && <Home />}
      </>
    );
  }
}

export default App;
