import { errors } from "com"
import logic from "../logic"
import { useState } from "react"

const { SystemError, ContentError, DuplicityError } = errors

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
                    console.error(error)

                    let feedback = error.message

                    if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                        feedback = `${feedback}, please correct it `
                    else if (error instanceof DuplicityError)
                        feedback = `${feedback},please try with another user`
                    else
                        feedback = `sorry,there was an error,please try again later`

                    alert(feedback)
                })
        } catch (error) {
            console.error(error)

            let feedback = error.message

            if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                feedback = `${feedback}, please correct it `
            else
                feedback = `sorry,there was an error,please try again later`

            alert(feedback)
        }
    }

    const handleLoginClick = event => {
        event.preventDefault()

        onLoginClick()
    }

    return <main className="px-20 ">
        <h1 className="font-bold text-2xl text-center mb-10">Register</h1>

        <form className="flex flex-col gap-2 mb-5" onSubmit={handleSubmit}>

            <label htmlFor="name">Name</label>
            <input className="border-b-2 border-black" type="text" id="name" />
            {error?.isNameError && <span className="text-red-500"></span>}

            <label htmlFor="birthdate">Birthdate</label>
            <input className="border-b-2 border-black" type="date" id="birthdate" />
            {error?.isBirthdateError && <span className="text-red-500"></span>}

            <label htmlFor="emaill">E-mail</label>
            <input className="border-b-2 border-black" type="text" id="email" />
            {error?.isEmailError && <span className="text-red-500"></span>}

            <label htmlFor="username">Username </label>
            <input className="border-b-2 border-black" type="text" id="username" />
            {error?.isUserNameError && <span className="text-red-500">{error.message}</span>}

            <label htmlFor="password">Password</label>
            <input className="border-b-2 border-black" type="password" id="password" />
            {error?.isPasswordError && <span className="text-red-500"></span>}

            <button className="rounded-xl border-2 border-black px-3 self-end" type="submit">Register</button>

        </form>
        <a className="underline block text-center" href="" onClick={handleLoginClick}>Login</a>
    </main>
}

export default Register