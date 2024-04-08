import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  const [view, setView] = useState("login");

  const handleUserRegistered = () => setView("login");

  const handleUserLoggedIn = () => setView("home");

  const handleUserResetPassword = () => setView("login");

  const handleRegisterClick = () => setView("register");

  const handleLoginClick = () => setView("login");

  const handleResetPasswordClick = () => setView("resetpassword");

  const handleLogout = () => setView("login");

  return (
    <>
      {view === "login" && (
        <Login
          onUserLoggedIn={handleUserLoggedIn}
          onRegisterClick={handleRegisterClick}
          onResetPasswordClick={handleResetPasswordClick}
        />
      )}
      {view === "register" && (
        <Register
          onUserRegistered={handleUserRegistered}
          onLoginClick={handleLoginClick}
          onResetPasswordClick={handleResetPasswordClick}
        />
      )}
      {view === "resetpassword" && (
        <ResetPassword
          onUserResetPassword={handleUserResetPassword}
          onRegisterClick={handleRegisterClick}
          onLoginClick={handleLoginClick}
        />
      )}
      {view === "home" && <Home onUserLoggedOut={handleLogout} />}
    </>
  );
}
export default App;
