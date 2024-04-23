import logic from "../logic"
import Button from "../components/Button"
import Form from "../components/Form"
import Input from "../components/Input"

function Login({ onUserLoggedIn, onRegisterClick }) {
    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const username = form.username.value
        const password = form.password.value

        try {
            logic.loginUser(username, password)
                .then(() => onUserLoggedIn())

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

        onRegisterClick()
    }
    return <>
        <main className="px-20">
            <h1 className="font-bold text-2xl text-center mb-10">Login</h1>
            <Form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <Input id="username" />

                <label htmlFor="password">Password</label>
                <Input type="password" id="password" />

                <Button className="rounder-xl border-2 border-black px-3 self-end" type="submit">Login</Button>
                <a className="underline block text-center" href="register.html" onClick={handleRegisterClick}>Register</a>
            </Form>
        </main>
    </>
}

export default Login