import logic from "../logic"

function Login({ OnUserLoggedIn, OnRegisterClick }) {

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const username = form.username.value
        const password = form.password.value

        try {
            logic.loginUser(username, password)
                .then(() => OnUserLoggedIn())
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })



        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    const handleRegisterClick = event => {
        event.preventDefault()

        OnRegisterClick()
    }


    return <>
        <main className="main main--thin">
            <h1>Login</h1>
            <form className="form" onSubmit={handleSubmit}>


                <label htmlFor="username">Username</label>
                <input id="username" type="text" />
                <label htmlFor="password">Password</label>
                <input id="password" type="password" />
                <button id="buttonSubmit" type="submit">Login </button>
            </form>
            <a href="" onClick={handleRegisterClick}>Register</a>
        </main>
    </>

}


export default Login