import logic from "../logic/index.js"
import LabelInput from "./components/LabelInput.jsx"
import HTag from './components/HTags.jsx'
import Form from "./components/Form.jsx"
import Button from "./components/Button.jsx"

import errors from "../logic/errors.js"
const { ContentError, MatchError } = errors

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

                    let feedback = error.message

                    if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                        feedback = `${feedback},please correct it`

                    else if (error instanceof MatchError)
                        feedback = `${feedback},please verify credentials`

                    else
                        feedback = 'sorry, there was an error, please try again later'

                    alert(feedback)
                })


        } catch (error) {
            console.error(error)

            let feedback = error.message

            if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                feedback = `${feedback},please correct it`
            else
                feedback = 'sorry, there was an error, please try again later'

            alert(feedback)
        }
    }

    const handleRegisterClick = event => {
        event.preventDefault()

        onRegisterClick()
    }

    return <>
        <main className="main main--thin">
            <HTag>Login</HTag>
            <Form onSubmit={handleSubmit}>
                <LabelInput text='Username' id="username" />

                <LabelInput text='Password' type='password' id='password' />

                <Button className='align-end' type="submit">Login</Button>
            </Form>

            <a className="underline block text-center w-[100%]" href="" onClick={handleRegisterClick}>Register</a>
        </main>
    </>
}
export default Login