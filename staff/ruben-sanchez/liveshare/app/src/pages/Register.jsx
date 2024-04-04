function Register() {
    return <>
    <main className="main main--thin">
        <h1>Register</h1>
        
    <form className="form" action="">
        <label htmlFor="name">Name</label>
        <input className="input" type="text" id="name"/>

        <label htmlFor="birthdate">Birthdate</label>
        <input className="input" type="date" name="" id="birthdate"/>

        <label htmlFor="username">Username</label>
        <input className="input" type="text" id="username" />

        <label htmlFor="email">E-mail</label>
        <input className="input" type="text" id="email" />

        <label htmlFor="password">Password</label>
        <input className="input" type="password" id="password"/>

        <button className="button button--right" type="submit" class="button">Register</button>

        



    </form>
    <a class="link--center" href="login.html">Login</a>
</main>

    

   
    <script src="logic.js"></script>
    <script src="data.js"></script>
    <script src="register.js"></script>



</>
}
export default Register