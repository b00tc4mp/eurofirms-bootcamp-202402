import logic from "../logic"

function Login(props) {
    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const username = form.username.value
        const password = form.password.value

        try {
            logic.loginUser(username, password)

            props.onUserLoggedIn()
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    const handleRegisterClick = event => {
        event.preventDefault()

        props.onRegisterClick()
    }
    return <>
        <main className="main">
            <h1>Login</h1>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" />

                <button type="submit">Login</button>
                <a href="register.html" onClick={handleRegisterClick}>Register</a>
            </form>
        </main>
    </>
}

export default Login