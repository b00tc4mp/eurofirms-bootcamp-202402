import { errors } from 'com'
import logic from '../logic'

const { ContentError, DuplicityError } = errors

function Register({ onUserRegistered, onLoginClick }) {
    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const surname = form.surname.value
        const email = form.email.value
        const password = form.password.value

        try {
            logic.registerUser(name, surname, email, password)
                .then(() => onUserRegistered())
                .catch(error => {
                    console.error(error.message)

                    let feedback = error.message

                    if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                        feedback = `${feedback}, please correct it`
                    else if (error instanceof DuplicityError)
                        feedback = `${feedback}, please try with another user`
                    else
                        feedback = 'sorry, there was an error, please try again later'

                    alert(feedback)
                })
        } catch (error) {
            console.error(error.message)

            let feedback = error.message

            if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                feedback = `${feedback}, please correct it`
            else
                feedback = 'sorry, there was an error, please try again later'

            alert(feedback)
        }
    }

    const handleLoginClick = event => {
        event.preventDefault()

        onLoginClick()
    }

    console.debug('Register render')
    return (
        <main className="px-10 py-8 bg-gray-900 rounded-lg shadow-lg">
            <h1 className="font-bold text-3xl text-center mb-6 text-white">Register</h1>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <label htmlFor="name" className="text-white">Name</label>
                <input className="border-2 border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 bg-gray-800 text-white" type="text" id="name" />

                <label htmlFor="surname" className="text-white">Surname</label>
                <input className="border-2 border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 bg-gray-800 text-white" type="text" id="surname" />

                <label htmlFor="email" className="text-white">E-mail</label>
                <input className="border-2 border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 bg-gray-800 text-white" type="email" id="email" />

                <label htmlFor="password" className="text-white">Password</label>
                <input className="border-2 border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 bg-gray-800 text-white" type="password" id="password" />

                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md self-center hover:bg-blue-600 focus:outline-none focus:bg-blue-600" type="submit">Register</button>
            </form>

            <p className="text-center mt-4 text-white">Already have an account? <a className="text-blue-500 underline" href="#" onClick={handleLoginClick}>Login</a></p>
        </main>
    )
}

export default Register
