/* eslint-disable react/prop-types */
import { useState } from "react";
import Form from "../components/Form"
import logic from "../logic"
import { errors } from "com"

const { ContentError, DuplicityError } = errors

function Register(props) {

    //Construimos un objecto para guardar el estado de los diferentes tipos de error que recojamos en el formulario
    //de registro para ponerlos poder ponerlos en el html al lado de su correspondiente input.
    //Haremos lo mismo con cada formulario que tengamos en el cada componente.
    const [error, setError] = useState(null)

    const handleSubmit = event => {

        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const birthdate = form.birthdate.value;
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;

        try {
            logic.registerUser(name, birthdate, email, username, password)
                .then(() => props.onUserRegistered())
                .catch(error => {
                   errorHandler(error)
                })
        } catch (error) {
            errorHandler(error)
        }
    }

    //Esta función nos va guardar los tipos de error de cada campo del formulario como propiedad del objeto Error
    const errorHandler = (error) => {
        console.error(error.message)

        let feedback = error.message;

        if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
            feedback = `${feedback}, please correct it`;

        else if (error instanceof DuplicityError)
            feedback = `${feedback}, please verify credentials`;

        else
            feedback = "Sorry, there was an error, please try again later";

        const isUserNameError = error.message.includes('username')
        const isNameError = error.message.includes('name')
        const isBirthdate = error.message.includes("birthdate")

        setError({ message: feedback, isUserNameError, isNameError, isBirthdate });
    }

    const handleLoginClick = event => {
        event.preventDefault()

        props.onLoginClick()
    }

    console.debug('Register render')
    return (
        <>
            <main className="font-bold text-xl py-2 m-20">
                <h1>Register</h1>
                <hr />
                <Form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" />
                    {error?.isNameError && <span className='text-red-500'>{error.message}</span>}

                    <label htmlFor="birthdate">Birthdate</label>
                    <input type="date" id="birthdate" />
                    {error?.isBirthdate && <span className="text-red-500">{error.message}</span>}

                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" />
                    {error?.isUserNameError && <span className='text-red-500'>{error.message}</span>}

                    <label htmlFor="email">Correo</label>
                    <input type="text" id="email" />
                    {error?.is}

                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" />

                    <button className="button--right" type="submit">Registrar</button>
                </Form>
                <button><a className="link--center" href="" onClick={handleLoginClick}>Login</a></button>
            </main>
        </>
    )
}
export default Register;