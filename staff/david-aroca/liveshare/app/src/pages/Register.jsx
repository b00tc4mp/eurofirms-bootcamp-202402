function Register() {
    return <main className="main ">
        <h1>Register</h1>

        <form className="form" action="">

            <label htmlFor="name">Name</label>
            <input className="input" type="text" id="name" />

            <label htmlFor="birthdate">Birthdate</label>
            <input className="input" type="date" id="birthdate" />

            <label htmlFor="username">Username </label>
            <input className="input" type="text" id="username" />

            <label htmlFor="emaill">E-mail</label>
            <input className="input" type="text" id="email" />

            <label htmlFor="password">Password</label>
            <input className="input" type="password" id="password" />

            <button className="button button--right" type="submit">Register</button>

        </form>
        <a className="link--center" href="login.html">Log in </a>
    </main>
}

export default Register