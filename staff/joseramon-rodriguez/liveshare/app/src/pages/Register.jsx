import logic from "../logic"
import Button from "../components/Button"
import Input from "../components/Input"
import Form from "../components/Form"
import { errors } from 'com'
import { useState } from "react"

const { ContentError, DuplicityError } = errors

function Register({ onUserRegistered, onLoginClick }) {
    const [error, setError] = useState(null)

    const errorHandler = (error) => {
        console.error(error)

        let feedback = error.message

        if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
            feedback = `${feedback}, please correct it`
        else if (error instanceof DuplicityError)
            feedback = `${feedback}, please try with another user`
        else
            feedback = 'sorry, there was an error, please try again later'

        // alert(feedback)
        const isUserNameError = error.message.includes('username')
        let isNameError = false
        if (!isUserNameError) {
            isNameError = error.message.includes('name')
        }

        const isBirthdateError = error.message.includes('birthdate')
        const isEmailError = error.message.includes('email')
        const isPasswordError = error.message.includes('password')

        const isAnotherError = !isUserNameError && !isNameError && !isBirthdateError && !isEmailError && !isPasswordError

        setError({ message: feedback, isUserNameError, isNameError, isBirthdateError, isEmailError, isPasswordError, isAnotherError })
    }

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

    const handleLoginClick = event => {
        event.preventDefault()

        onLoginClick()
    }
    return <>
        <main className="px-20">
            <h1 className="font-bold text-2xl text-center mb-10">Register</h1>
            <Form className="flex flex-col gap-2 mb-5" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <Input id="name" />
                {error?.isNameError && <span className="text-red-500">{error.message}</span>}

                <label htmlFor="birthdate">Birthdate</label>
                <Input type="date" id="birthdate" />
                {error?.isBirthdateError && <span className="text-red-500">{error.message}</span>}

                <label htmlFor="email">E-mail</label>
                <Input id="email" />
                {error?.isEmailError && <span className="text-red-500">{error.message}</span>}

                <label htmlFor="username">Username</label>
                <Input id="username" />
                {error?.isUserNameError && <span className="text-red-500">{error.message}</span>}


                <label htmlFor="password">Password</label>
                <Input type="password" id="password" />
                {error?.isPasswordError && <span className="text-red-500">{error.message}</span>}

                <Button type="rounded-xl border-2 border-black px-3 self-end">Register</Button>
            </Form>
            <a className="underline block text-center" href="login.html" onClick={handleLoginClick}>Login</a>
            {error?.isAnotherError && <span className="text-red-500">{error.message}</span>}
        </main>
    </>
}

export default Register