import logic from "../logic/index.js"
import LabelInput from "./components/LabelInput.jsx"

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
            <h1 className=' px-[10px] text-[cornflowerblue] font-bold text-2xl text-center mb-10'>Register</h1>

            <form className="flex flex-col gap-2 mb-5" onSubmit={handleSubmit}>
                <LabelInput text='Name' type='text' id='name' />
                <LabelInput text='Birthdate' type='date' id='birthdate' />
                <LabelInput text='E-mail' type='text' id='email' />
                <LabelInput text='Username' type='text' id='username' />
                <LabelInput text='Password' type='password' id='password' />

                <button className=" rounded-[10px] border-w-[1px] px-[10px] max-w- self-end" type="submit"> Register </button>

            </form>

            <a className="underline block text-center w-[100%]" href="" onClick={handleLoginClick} >Login</a>
        </main>
    </>
}
export default Register