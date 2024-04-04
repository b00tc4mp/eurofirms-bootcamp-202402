function Register() {
    return <>
        <main class="main">
            <h1>Register</h1>
            <form class="form" action="">
                <label for="name">Name</label>
                <input class="input" type="text" id="name" />

                <label for="birthdate">Birthdate</label>
                <input class="input" type="date" id="birthdate" />

                <label for="username">Username</label>
                <input class="input" type="text" id="username" />

                <label for="email">E-mail</label>
                <input class="input" type="text" id="email" />

                <label for="password">Password</label>
                <input class="input" type="password" id="password" />

                <button class="button button--right" type="submit"> Register </button>

            </form>

            <a class="link--center" href="login.html">Login</a>
        </main>
    </>
}
export default Register