import logic from "../logic"

function ResetPassword(props){
    const handleSubmit = event =>{
        event.preventDefault()

        const form = event.target

        const name = form.name.value 
        const lastname = form.lastname.value 
        const birthdate = form.birthdate.value 
        const email = form.email.value
        const username = form.username.value 
        const newpassword = form.newpassword.value
        const repeatpassword= form.repeatpassword.value

        try {
            logic.resetPasswordUser(name, lastname, birthdate, email, username, newpassword, repeatpassword)

            props.onUserResetPassword()
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    const handleRegisterClick= event => {
        event.preventDefault()

        props.onRegisterClick()
    }

    const handleLoginClick = event => {
        event.preventDefault()

        props.onLoginClick()
    }

    
    return <>
        <div className="body-rlr">

        <main className="main">
        <h1>RESET PASSWORD</h1>
        <form onSubmit={handleSubmit} className="form big-form">
        <div className="container-form">
            
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

                <h2>New password</h2>
          
                <label htmlFor="newPassword">New Password</label>
                <input type="password" id="newpassword"/>

                <label htmlFor="repeatPassword">Repeat Password </label>
                <input type="password" id="repeatpassword"/>

                <button type="submit">Reset</button>                
        </div>
        <div className="container-a container-a-big">
            <a id="login" onClick={handleLoginClick}>LOGIN</a><br/>
        </div>
        <div className="container-a container-a-big">
            <a id="register" onClick={handleRegisterClick}>REGISTER</a><br/>
        </div>
       
        </form>
        </main>

        </div>
    </>
}
export default ResetPassword