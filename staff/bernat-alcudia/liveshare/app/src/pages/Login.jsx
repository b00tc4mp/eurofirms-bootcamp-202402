import { useState } from "react"
import logic from "../logic"

import { errors, validate } from 'com'

const { ContentError, MatchError } = errors

const [error, setError] = useState(null)

function Login({ OnUserLoggedIn, OnRegisterClick }) {

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const username = form.username.value
        const password = form.password.value

        try {
            logic.loginUser(username, password)
                .then(() => OnUserLoggedIn())
                .catch(error => {
                    errorHandler(error)
                })



        } catch (error) {
            errorHandler(error)
        }
    }

    //Errors function
    const errorHandler = (error) => {
        console.error(error.message)
        let feedback = error.message;
        if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
            feedback = `${feedback}, please correct it`;
        else if (error instanceof MatchError)
            feedback = `${feedback}, please verify credentials`;
        else {
            feedback = "Sorry, there was an error, please try again later";
            alert(feedback)
        }

        const isUserNameError = error.message.includes("username");
        const isPasswordError = error.message.includes("password");
        setError({ message: feedback, isUserNameError, isPasswordError })
    }


    const handleRegisterClick = event => {
        event.preventDefault()

        OnRegisterClick()
    }


    return <>
        <main className="px-20">
            <h1 className="font-bold text-2x1 text-center mb-10">Login</h1>

            <form className="flex flex-col gap-2 mb-5" onSubmit={handleSubmit}>


                <label htmlFor="username">Username</label>
                <input className="border-b-2 border-black" id="username" type="text" />
                <label htmlFor="password">Password</label>
                <input className="border-b-2 border-black" type="password" id="password" />
                <button className="rounded-x1 border-2 border-black px-3 self-end" type="submit">Login </button>
            </form>
            <a className="underline block text-center" href="" onClick={handleRegisterClick}>Register</a>
        </main>
    </>

}


export default Login