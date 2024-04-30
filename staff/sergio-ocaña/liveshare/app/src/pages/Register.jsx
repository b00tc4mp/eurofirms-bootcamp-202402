import logic from '../logic/index.js'
import LabelInput from '../components/LabelInput.jsx'
import Form from '../components/Form.jsx'
import HTag from '../components/HTags.jsx'
import Button from '../components/Button.jsx'
import { errors } from 'com'
import { useState } from 'react'
import SpanError from '../components/SpanError.jsx'

const { ContentError, DuplicityError } = errors

function Register({ onUserRegistered, onLoginClick }) {
    const [error, setError] = useState(null)

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const birthdate = form.birthdate.value
        const email = form.email.value
        const username = form.username.value
        const password = form.password.value

        try {
            logic.registerUser(name, birthdate, email, username, password)
                .then(() => onUserRegistered())
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
        else if (error instanceof DuplicityError)
            feedback = `${feedback}, please try with another user`
        else
            feedback = 'sorry, there was an error,please try again later'

        const isUsernameError = error.message.includes('username')
        let isNameError = false

        if (!isUsernameError) {
            isNameError = error.message.includes('name')
        }

        const isEmailError = error.message.includes('email')

        const isBirthdateError = error.message.includes('birthdate')

        const isPasswordError = error.message.includes('password')

        setError({ message: feedback, isUsernameError, isNameError, isBirthdateError, isPasswordError, isEmailError })

    }

    const handleLoginClick = event => {
        event.preventDefault()

        onLoginClick()
    }
    return <>
        <main >
            <HTag>Register</HTag>

            <Form onSubmit={handleSubmit}>
                <LabelInput text='Name' id='name' />
                {error?.isNameError && <SpanError>{error.message}</SpanError>}
                <LabelInput text='Birthdate' type='date' id='birthdate' />
                {error?.isBirthdateError && <SpanError>{error.message}</SpanError>}
                <LabelInput text='E-mail' id='email' />
                {error?.isEmailError && <SpanError>{error.message}</SpanError>}
                <LabelInput text='Username' id='username' />
                {error?.isUsernameError && <SpanError>{error.message}</SpanError>}
                <LabelInput text='Password' type='password' id='password' />
                {error?.isPasswordError && <SpanError>{error.message}</SpanError>}

                <Button type="submit"> Register </Button>

            </Form>

            <a className="underline block text-center w-[100%]" href="" onClick={handleLoginClick} >Login</a>
        </main>
    </>
}
export default Register