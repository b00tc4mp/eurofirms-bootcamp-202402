function Login() {
    return <>
        <main className="main">
            <h1>Login</h1>
            <form action="" className="form">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" />

                <button type="submit">Login</button>
                <a href="register.html">Register</a>
            </form>
        </main>
    </>
}

export default Login