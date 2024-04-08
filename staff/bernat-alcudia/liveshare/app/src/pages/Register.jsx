

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

            onUserRegistered()
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    const handleLoginClick = event => {
        event.preventDefault()
        onLoginClick()
    }



    return (

        <main className="main main--thin">
            <h1>Register</h1>
            <form className="form" onSubmit={handleSubmit} >
                <label htmlFor="name">Name</label>
                <input className="input" id="name" type="text" />

                <label htmlFor="birthdate">Birthdate</label>
                <input className="input" id="birthdate" type="date" />

                <label htmlFor="email">E-mail</label>
                <input className="input" id="email" type="text" />

                <label htmlFor="username">Username</label>
                <input className="input" id="username" type="text" />

                <label htmlFor="password">Passsword</label>
                <input className="input" id="password" type="password" />

                <button className="button button--right" id="buttonSubmit" type="submit">Register </button>
            </form>
            <a className="link--center" href="" onClick={handleLoginClick}>Login</a>
        </main>

    )
}
export default Register