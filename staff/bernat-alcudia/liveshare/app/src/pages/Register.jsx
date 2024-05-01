import logic from "../logic"

import { errors, validate } from 'com'

const { ContentError, DuplicityError } = errors

function Register({ onUserRegistered, onLoginClick }) {
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
                    console.error(error.message)

                    let feedback = error.message

                    if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) feedback = `${feedback},please correct it`
                    else if (error instanceof DuplicityError) feedback = `${feedback}, please try with another user `
                    else feedback = 'sorry,there was an error,please try again later'
                    alert(feedback)
                })

        } catch (error) {
            console.error(error.message)

            let feedback = error.message

            if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) feedback = `${feedback}, please correct it`
            else feedback = 'sorry,there was an error,please try again later'

            alert(feedback)
        }
    }

    const handleLoginClick = event => {
        event.preventDefault()
        onLoginClick()
    }



    return (

        <main className="px-20">
            <h1 className="font-bold text-2x1 text-center mb-10">Register</h1>
            <form className="flex flex-col gap-2 mb-5" onSubmit={handleSubmit} >
                <label htmlFor="name">Name</label>
                <input className="border-b-2 border-black" id="name" type="text" />

                <label htmlFor="birthdate">Birthdate</label>
                <input className="border-b-2 border-black" id="birthdate" type="date" />

                <label htmlFor="email">E-mail</label>
                <input className="border-b-2 border-black" id="email" type="text" />

                <label htmlFor="username">Username</label>
                <input className="border-b-2 border-black" id="username" type="text" />

                <label htmlFor="password">Password</label>
                <input className="border-b-2 border-black" id="password" type="password" />

                <button className="rounded-x1 border-2 border-black px-3 self-end" id="buttonSubmit" type="submit">Register </button>
            </form>
            <a className="underline block text-center" href="" onClick={handleLoginClick}>Login</a>
        </main>

    )
}
export default Register