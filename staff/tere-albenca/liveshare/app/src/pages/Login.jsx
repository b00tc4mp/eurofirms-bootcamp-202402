import logic from "../logic";

function Login({ onUserLoggedIn, onRegisterClick, onResetPasswordClick }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const username = form.username.value;
    const password = form.password.value;

    try {
      logic.loginUser(username, password);

      onUserLoggedIn();
    } catch (error) {
      console.error(error);

      alert(error.message);
    }
  };

  const handleRegisterClick = (event) => {
    event.preventDefault();

    onRegisterClick();
  };

  const handleResetPasswordClick = (event) => {
    event.preventDefault();
    onResetPasswordClick();
  };

  return (
    <>
      <div className="body-rlr">
        <main className="main">
          <h1>LOGIN</h1>
          <form onSubmit={handleSubmit} className="form little-form">
            <label htmlFor="username">Username</label>
            <input className="input" type="text" id="username" />

            <label htmlFor="password">Password</label>
            <input className="input" type="password" id="password" />

            <button type="submit">LOGIN</button>

            <div className="container-a container-a-little">
              <a onClick={handleResetPasswordClick}>Reset password</a>
            </div>
            <div className="container-a container-a-little">
              <a onClick={handleRegisterClick}>Register</a>
              <br />
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
export default Login;
