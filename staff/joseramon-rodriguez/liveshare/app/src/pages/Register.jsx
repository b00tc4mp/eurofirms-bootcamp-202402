import logic from "../logic"
import Button from "../components/Button"
import Input from "../components/Input"
import Form from "../components/Form"


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
    return <>
        <main className="px-20">
            <h1 className="font-bold text-2xl text-center mb-10">Register</h1>
            <Form className="flex flex-col gap-2 mb-5" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <Input id="name" />

                <label htmlFor="birthdate">Birthdate</label>
                <Input type="date" id="birthdate" />

                <label htmlFor="email">E-mail</label>
                <Input id="email" />

                <label htmlFor="username">Username</label>
                <Input id="username" />

                <label htmlFor="password">Password</label>
                <Input type="password" id="password" />

                <Button type="rounded-xl border-2 border-black px-3 self-end">Register</Button>
            </Form>
            <a className="underline block text-center" href="login.html" onClick={handleLoginClick}>Login</a>
        </main>
    </>
}

export default Register