function Login() {
    return <main className="main main--thin">
        <h1>Login</h1>

        <form className="form" action="">
            <label for="username">Username</label>
            <input className="input" type="text" id="username" />

            <label for="password">Password</label>
            <input className="input" type="password" id="password" />

            <button className="button button--right" type="submit">Login</button>
        </form>

        <a className="link--center" href="register.html">Register</a>
    </main>
}

export default Login