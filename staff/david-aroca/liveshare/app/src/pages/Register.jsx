import logic from "../logic"

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

                    alert(error.message)
                })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    const handleLoginClick = event => {
        event.preventDefault()

        onLoginClick()
    }

    console.debug('Register render')

    return <main className="px-20 ">
        <h1 className="font-bold text-2xl text-center mb-10">Register</h1>

        <form className="flex flex-col gap-2 mb-5" onSubmit={handleSubmit}>

            <label htmlFor="name">Name</label>
            <input className="border-b-2 border-black" type="text" id="name" />

            <label htmlFor="birthdate">Birthdate</label>
            <input className="border-b-2 border-black" type="date" id="birthdate" />

            <label htmlFor="emaill">E-mail</label>
            <input className="border-b-2 border-black" type="text" id="email" />

            <label htmlFor="username">Username </label>
            <input className="border-b-2 border-black" type="text" id="username" />

            <label htmlFor="password">Password</label>
            <input className="border-b-2 border-black" type="password" id="password" />

            <button className="rounded-xl border-2 border-black px-3 self-end" type="submit">Register</button>

        </form>
        <a className="underline block text-center" href="" onClick={handleLoginClick}>Login</a>
    </main>
}

export default Register