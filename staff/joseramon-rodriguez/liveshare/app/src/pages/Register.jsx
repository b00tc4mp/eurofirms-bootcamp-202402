function Register() {
    return <>
        <main className="main">
            <h1>Register</h1>
            <form className="form" action="">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />

                <label htmlFor="birthdate">Birthdate</label>
                <input type="date" id="birthdate" />

                <label htmlFor="username">Username</label>
                <input type="text" id="username" />

                <label htmlFor="email">E-mail</label>
                <input type="text" id="email" />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" />

                <button type="submit">Register</button>
            </form>
            <a href="login.html">Login</a>
        </main>
    </>
}

export default Register