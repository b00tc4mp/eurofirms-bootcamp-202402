import { errors } from 'com'

import logic from '../logic'

const {ContentError, DuplicityError} = errors

function Register({ onUserRegistered, onLoginClick}) {
    const handleSubmit = event => {
       event.preventDefault()

        const form = event.target 

        const name = form.name.value 
        const surname = form.surname.value 
        const birthdate = form.birthdate.value 
        const email = form.email.value 
        const password = form.password.value

        
        try {
            logic.registerUser(name, surname,birthdate, email, password)
                .then(() => onUserRegistered())
                .catch(error => {
                    console.error(error)

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
            console.error(error)

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

    return <main className="px-20">
    <h1 className=" mt-12 font-bold text-2xl text-center mb-10 text-green-900">Register</h1>

    <form className="flex flex-col gap-2 mb-5" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input className=" rounded-md border-b-2 border-green-900" type="text" id="name" />

        <label htmlFor="surname">Surname</label>
        <input className=" rounded-md border-b-2 border-green-900" type="text" id="surname" />

        <label htmlFor="birthdate">Birthdate</label>
        <input className=" rounded-md border-b-2 border-green-900" type="date" id="birthdate" />

        <label htmlFor="email">E-mail</label>
        <input className=" rounded-md border-b-2 border-green-900" type="text" id="email" />

        <label htmlFor="password">Password</label>
        <input className=" rounded-md border-b-2 border-green-900" type="password" id="password" />

        <button className="rounded-xl border-2 border-green-900 px-3 self-end" type="submit">Register</button>
    </form>

    <a className="underline block text-center text-green-900" href="" onClick={handleLoginClick}>Login</a>
</main>
    
}

export default Register