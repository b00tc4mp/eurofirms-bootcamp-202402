import logic from "../logic"
import Button from "../components/Button"
import Form from "../components/Form"
import Input from "../components/Input"
import { errors } from 'com'
import { useState } from "react"


const { ContentError, MatchError } = errors

function Login({ onUserLoggedIn, onRegisterClick }) {
    const [error, setError] = useState(null)

    const errorHandler = (error) => {
        console.error(error)

        let feedback = error.message

        if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
            feedback = `${feedback}, please correct it`
        else if (error instanceof MatchError)
            feedback = `${feedback}, please input correct data`
        else
            feedback = 'sorry, there was an error, please try again later'

        // alert(feedback)
        const isUserNameError = error.message.includes('username')
        const isPasswordError = error.message.includes('password')

        setError({ message: feedback, isUserNameError, isPasswordError })
    }

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const username = form.username.value
        const password = form.password.value

        try {
            logic.loginUser(username, password)
                .then(() => onUserLoggedIn())

                .catch(error => errorHandler(error))

        } catch (error) {
            errorHandler(error)
        }
    }

    const handleRegisterClick = event => {
        event.preventDefault()

        onRegisterClick()
    }
    return <>
        <main className="px-20">
            <h1 className="font-bold text-2xl text-center mb-10">Login</h1>
            <Form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <Input id="username" />
                {error?.isUserNameError && <span className="text-red-500">{error.message}</span>}

                <label htmlFor="password">Password</label>
                <Input type="password" id="password" />
                {error?.isPasswordError && <span className="text-red-500">{error.message}</span>}


                <Button className="rounder-xl border-2 border-black px-3 self-end" type="submit">Login</Button>
                <a className="underline block text-center" href="register.html" onClick={handleRegisterClick}>Register</a>
            </Form>
        </main>
    </>
}

export default Login