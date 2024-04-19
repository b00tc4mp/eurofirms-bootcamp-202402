import logic from "../logic/index.js"

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
                .catch(error => { console.error(error) })


        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }
    const handleLoginClick = event => {
        event.preventDefault()

        onLoginClick()
    }
    return <>
        <main className="main">
            <h1>Register</h1>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input className="input" type="text" id="name" />

                <label htmlFor="birthdate">Birthdate</label>
                <input className="input" type="date" id="birthdate" />

                <label htmlFor="username">Username</label>
                <input className="input" type="text" id="username" />

                <label htmlFor="email">E-mail</label>
                <input className="input" type="text" id="email" />

                <label htmlFor="password">Password</label>
                <input className="input" type="password" id="password" />

                <button className="button button--right" type="submit"> Register </button>

            </form>

            <a className="link--center" href="login.html" onClick={handleLoginClick} >Login</a>
        </main>
    </>
}
export default Register