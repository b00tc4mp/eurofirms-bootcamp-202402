import logic from "../logic"

function Register(props){
    const handleSubmit = event =>{
        event.preventDefault()

        const form = event.target

        const name = form.name.value 
        const lastname = form.lastname.value 
        const birthdate = form.birthdate.value 
        const email = form.email.value
        const username = form.username.value 
        const password = form.password.value

        try {
            logic.registerUser(name, lastname, birthdate, email, username, password)

            props.onUserRegistered()
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    const handleLoginClick = event => {
        event.preventDefault()

        props.onLoginClick()
    }

    const handleResetPasswordClick = event => {
        event.preventDefault()
        props.onResetPasswordClick()
    }
    return <div className="body-rlr">

        <main className="main main--thin">
        <h1>REGISTER</h1>
        <form onSubmit={handleSubmit} className="form little-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name"/>

        <label htmlFor="lastname">Lastname</label>
        <input type="text" id="lastname"/>

        <label htmlFor="birthdate">Birthdate</label>
        <input type="date" id="birthdate"/>

        <label htmlFor="email">Email</label>
        <input type="text" id="email"/>

        <label htmlFor="username">Username</label>
        <input type="text" id="username"/>

        <label htmlFor="password">Password</label>
        <input type="password" id="password"/>

        <button type="submit">Register</button>

    </form>

    <div className="container-a container-a-little">
        <a onClick={handleResetPasswordClick}>RESET PASSWORD</a>
    </div>
    <div className="container-a container-a-little">
        <a id="login" onClick={handleLoginClick}>LOGIN</a><br/>
    </div>

</main>
</div>

}
export default Register