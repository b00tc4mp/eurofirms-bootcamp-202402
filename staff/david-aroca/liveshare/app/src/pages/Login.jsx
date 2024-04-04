function Login() {
    return <main className="main main--thin">
        <h1>Login</h1>

        <form className="form" action="">

            <label htmlFor="username">username</label>
            <input className="input" type="text" id="username" />

            <label htmlFor="password">Password</label>
            <input className="input" type="password" id="password" />

            <button className="button button--right" type="submit">Login</button>
            <a className="link--center" href="register.html">Register</a>
        </form>
    </main>
}

export default Login