import logic from "../logic/index.js"
import LabelInput from "./components/LabelInput.jsx"
import Form from "./components/Form.jsx"
import HTag from "./components/HTags.jsx"
import Button from "./components/Button.jsx"

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
        <main >
            <HTag>Register</HTag>

            <Form onSubmit={handleSubmit}>
                <LabelInput text='Name' id='name' />
                <LabelInput text='Birthdate' type='date' id='birthdate' />
                <LabelInput text='E-mail' id='email' />
                <LabelInput text='Username' id='username' />
                <LabelInput text='Password' type='password' id='password' />

                <Button type="submit"> Register </Button>

            </Form>

            <a className="underline block text-center w-[100%]" href="" onClick={handleLoginClick} >Login</a>
        </main>
    </>
}
export default Register