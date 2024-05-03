import logic from '../logic'

import {errors} from 'com'


const {ContentError, DuplicityError } = errors

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
                    console.error(error)

                    let feedback = error.message

                    if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                        feedback = `${feedback}, please correct it`
                    else if (error instanceof DuplicityError)
                        feedback = `${feedback}, please try with another user`
                    else 
                        feedback =' sorry, there was an error, please try again later'        
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
        <h1 className='font-bold text-2xl text-center mb-10'>Register</h1>

        <form className="flex flex-col gap-2 mb-5 underline" onSubmit={handleSubmit}>
            <label htmlFor="name" className='text-red-400 font-sans' >Name</label>
            <input className="border-b-2 border-black text-red" type="text" id="name" />

            <label htmlFor="birthdate">Birthdate</label>
            <input className="border-b-2 border-black underline rounded-lg" type="date" id="birthdate" />

            <label htmlFor="email" className='text-amber-300'>E-mail</label>
            <input className="border-b-2 border-black rounded-lg" type="text" id="email" />

            <label htmlFor="username">Username</label>
            <input className="border-b-2 border-black " type="text" id="username" />

            <label htmlFor="password" className='underline'>Password</label>
            <input className="rounded-xl border-2 border-black px-3 self-end text-red-600" type="password" id="password" />

            <button className="underline block text-center" type="submit">Register</button>
        </form>

        <a className="link--center underline to-blue-500" href="" onClick={handleLoginClick}>Login</a>
    </main>
}

export default Register