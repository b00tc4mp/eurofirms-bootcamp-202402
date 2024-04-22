import logic from "../logic"

function Register(props){

    const handleSubmit = event => {

        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const birthdate = form.birthdate.value;
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;

        try {
            logic.registerUser(name, birthdate, email, username, password)
                .then(() => props.onUserRegistered())
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

    console.debug('Register render')
    return (
        <>
            <main className="main--thin">
                <h1>Register</h1>
                <hr/>
                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name"/>

                    <label htmlFor="birthdate">Birthdate</label>
                    <input type="date" id="birthdate"/>

                    <label htmlFor="username">Username</label>
                    <input type="text" id="username"/>

                    <label htmlFor="email">Correo</label>
                    <input type="text" id="email"/>

                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password"/>

                    <button className="button--right" type="submit">Registrar</button>
                </form>
                <button><a className="link--center" href="" onClick={handleLoginClick}>Login</a></button>
            </main>
        </>
    )
}
export default Register;