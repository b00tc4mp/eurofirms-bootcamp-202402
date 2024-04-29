import Form from "../components/Form";
import logic from "../logic"
import errors from "../logic/errors"
//Esto sería opcional, react lanza un warning para tipar las props(últimas línea)
import PropTypes from 'prop-types';

const { ContentError, MatchError } = errors;

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
              console.error(error.message)

              let feedback = error.message;

              if(error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                  feedback = `${feedback}, please correct it`;

              else if(error instanceof MatchError)
                  feedback = `${feedback}, please verify credentials`;

              else
                  feedback = "Sorry, there was an error, please try again later";

              alert(feedback);
          })
    } catch (error) {
        console.error(error.message)

        let feedback = error.message;
        
        if(error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                  feedback = `${feedback}, please correct it`;

              else if(error instanceof MatchError)
                  feedback = `${feedback}, please verify credentials`;

              else
                  feedback = "Sorry, there was an error, please try again later";

              alert(feedback);
    }
}

const handleRegisterClick = event => {
  event.preventDefault();

  onRegisterClick();
}

console.debug("Login render");

    return (
        <>
          <main className="text-lg px-20">
            <h1 className="font-mono font-bold text-3xl">Login</h1>
            <hr/>
            
            <Form onSubmit={ handleSubmit }>
                <label htmlFor="username">Username</label>
                <input type="text" id="username"/>
    
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password"/>
    
                <button type="submit">Login</button>
            </Form>
            <button><a className="link--center" href="" onClick={ handleRegisterClick }>Register</a></button>
        </main>
        </>
      )
}
export default Login;


Login.propTypes = {
    onRegisterClick: PropTypes.func.isRequired,
    onUserLoggedIn: PropTypes.func.isRequired
  }