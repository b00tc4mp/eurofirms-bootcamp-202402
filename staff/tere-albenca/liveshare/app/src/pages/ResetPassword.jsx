function ResetPassword(){
    return <>
        <div className="body-rlr">

        <main className="main">
        <h1>RESET PASSWORD</h1>
        <form action="" className="form big-form">
        <div className="container-form">
            
                <label htmlFor="name">Name</label>
                <input type="text" id="name"/>

                <label htmlFor="lastname">Lastname</label>
                <input type="text" id="lastname"/>

                <label htmlFor="birthdate">Birthdate</label>
                <input type="date" id="birthdate"/>

                <label htmlFor="username">Username</label>
                <input type="text" id="username"/>

                <label htmlFor="email">Email</label>
                <input type="text" id="email"/>

                <h2>New password</h2>
          
                <label htmlFor="newPassword">New Password</label>
                <input type="password" id="newpassword"/>

                <label htmlFor="repeatPassword">Repeat Password </label>
                <input type="password" id="repeatpassword"/>

                <button type="submit">Reset</button>                
        </div>
        <div className="container-a container-a-big">
            <a id="login" href="">LOGIN</a><br/>
        </div>
        <div className="container-a container-a-big">
            <a id="register" href="">REGISTER</a><br/>
        </div>
       
        </form>
        </main>

        </div>
    </>
}
export default ResetPassword