import logic from "../logic/index.js"
import { LabelInput, HTag, Form, Button, SpanError } from '../components'
import { useState } from "react"

import { errors } from 'com'
const { ContentError, MatchError } = errors

function Login({ onUserLoggedIn, onRegisterClick }) {
    const [error, setError] = useState(null)

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const username = form.username.value
        const password = form.password.value

        try {
            logic.loginUser(username, password)
                .then(() => onUserLoggedIn())
                .catch(error => {
                    errorHandler(error)
                })

        } catch (error) {
            errorHandler(error)
        }
    }

    const errorHandler = error => {
        console.error(error)

        let feedback = error.message

        if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
            feedback = `${feedback}, please correct it`
        else if (error instanceof MatchError)
            feedback = `${feedback}, please verify credetials`
        else
            feedback = 'sorry, there was an error,please try again later'

        const isUsernameError = error.message.includes('username')

        const isPasswordError = error.message.includes('password')

        setError({ message: feedback, isUsernameError, isPasswordError })

    }
    const handleRegisterClick = event => {
        event.preventDefault()

        onRegisterClick()
    }

    return <>
        <main className="main main--thin">
            <HTag>Login</HTag>
            <Form onSubmit={handleSubmit}>
                <LabelInput text='Username' id="username" />
                {error?.isUsernameError && <SpanError>{error.message}</SpanError>}
                <LabelInput text='Password' type='password' id='password' />
                {error?.isPasswordError && <SpanError>{error.message}</SpanError>}
                <Button className='align-end' type="submit">Login</Button>
            </Form>

            <a className="underline block text-center w-[100%]" href="" onClick={handleRegisterClick}>Register</a>
        </main>
    </>
}
export default Login