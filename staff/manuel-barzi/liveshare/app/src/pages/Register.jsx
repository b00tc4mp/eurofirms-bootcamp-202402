function Register() {
    return <main className="main main--thin">
        <h1>Register</h1>

        <form className="form" action="">
            <label for="name">Name</label>
            <input className="input" type="text" id="name" />

            <label for="birthdate">Birthdate</label>
            <input className="input" type="date" id="birthdate" />

            <label for="username">Username</label>
            <input className="input" type="text" id="username" />

            <label for="email">E-mail</label>
            <input className="input" type="text" id="email" />

            <label for="password">Password</label>
            <input className="input" type="password" id="password" />

            <button className="button button--right" type="submit">Register</button>
        </form>

        <a className="link--center" href="login.html">Login</a>
    </main>
}

export default Register