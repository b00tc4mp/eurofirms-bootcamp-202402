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
        <main className="px-20">
            <h1 className="font-bold text-2x1 text-center mb-10">Login</h1>

            <form className="flex flex-col gap-2 mb-5" onSubmit={handleSubmit}>


                <label htmlFor="username">Username</label>
                <input className="border-b-2 border-black" id="username" type="text" />
                <label htmlFor="password">Password</label>
                <input className="border-b-2 border-black" type="password" id="password" />
                <button className="rounded-x1 border-2 border-black px-3 self-end" type="submit">Login </button>
            </form>
            <a className="underline block text-center" href="" onClick={handleRegisterClick}>Register</a>
        </main>
    </>

}


export default Login