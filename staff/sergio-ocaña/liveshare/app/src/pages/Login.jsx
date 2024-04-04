function Login() {
    return <>
        <main class="main main--thin">
            <h1>Login</h1>
            <form class="form" action="">
                <label for="username">Username</label>
                <input class="input" type="text" id="username" />

                <label for="password">Password</label>
                <input class="input" type="password" id="password" />

                <button class="button button--right" type="submit">Login</button>
            </form>
            <a class="link--center" href="register.html">Register</a>
        </main>
    </>
}
export default Login