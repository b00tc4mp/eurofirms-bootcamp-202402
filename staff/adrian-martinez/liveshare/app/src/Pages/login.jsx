import { useState } from "react"
import Form from "../components/Form";
import logic from "../logic"
import { errors } from "com"
//Esto sería opcional, react lanza un warning para tipar las props(últimas línea)
import PropTypes from 'prop-types';

const { ContentError, MatchError } = errors;

function Login({ onUserLoggedIn, onRegisterClick }) {

    //Construimos un objecto para guardar el estado de los diferentes tipos de error que recojamos en el formulario
    //de registro para ponerlos poder ponerlos en el html al lado de su correspondiente input.
    //Haremos lo mismo con cada formulario que tengamos en el cada componente.
    const [error, setError] = useState(null);

    const handleSubmit = event => {

        event.preventDefault();
        const form = event.target;

        const username = form.username.value;
        const password = form.password.value;

        try {
            logic.loginUser(username, password)
                .then(() => onUserLoggedIn())
                .catch(error => {
                    errorHandler(error);
                })
        } catch (error) {
            errorHandler(error);
        }
    }

    //Esta función nos va guardar los tipos de error de cada campo del formulario como propiedad del objeto Error
    const errorHandler = (error) => {
        console.error(error.message)

        let feedback = error.message;

        if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
            feedback = `${feedback}, please correct it`;

        else if (error instanceof MatchError)
            feedback = `${feedback}, please verify credentials`;

        else{
            feedback = "Sorry, there was an error, please try again later";
            alert(feedback)
        }
            

        const isUserNameError = error.message.includes("username");
        const isPasswordError = error.message.includes("password");

        setError({ message: feedback, isUserNameError, isPasswordError })
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
                <hr />

                <Form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input className="" type="text" id="username" />
                    {error?.isUserNameError && <span className="text-red-500">{error.message}</span>}

                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" />
                    {error?.isPasswordError && <span className="text-red-500">{error.message}</span>}

                    <button type="submit">Login</button>
                </Form>
                <button><a className="link--center" href="" onClick={handleRegisterClick}>Register</a></button>
            </main>
        </>
    )
}
export default Login;


Login.propTypes = {
    onRegisterClick: PropTypes.func.isRequired,
    onUserLoggedIn: PropTypes.func.isRequired
}