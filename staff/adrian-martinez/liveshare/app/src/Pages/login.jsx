import logic from "../logic"

function Login({ onUserLoggedIn, onRegisterClick }){

  const handleSubmit = event => {

    event.preventDefault();
    const form = event.target;

    const username = form.username.value;
    const password = form.password.value;

    try {
      logic.loginUser(username, password)
          .then(() => onUserLoggedIn())
          .catch(error => {
              console.error(error)

              alert(error.message)
          })
    } catch (error) {
        console.error(error)

        alert(error.message)
    }
}

const handleRegisterClick = event => {
  event.preventDefault();

  onRegisterClick();
}

console.debug("Login render");

    return (
        <>
          <main className="main--thin">
            <h1>Login</h1>
            <hr/>
            
            <form className="form" onSubmit={ handleSubmit }>
                <label htmlFor="username">Username</label>
                <input type="text" id="username"/>
    
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password"/>
    
                <button type="submit">Login</button>
            </form>
            <button><a className="link--center" href="" onClick={ handleRegisterClick }>Register</a></button>
        </main>
        </>
      )
}
export default Login;