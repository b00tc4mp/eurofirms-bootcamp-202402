function Login(){
    return <>
    <div className="body-rlr">
    <main className="main">
        <h1>LOGIN</h1>
        <form action="" className="form little-form">

            <label htmlFor="username">Username</label>
            <input className="input" type="text" id="username"/>

            <label htmlFor="password">Password</label>
            <input className="input" type="password" id="password"/>

            <button type="submit">LOGIN</button>

        </form>


        <div className="container-a container-a-little">
            <a href="">Reset password</a>
        </div>
        <div className="container-a container-a-little">
            <a href="">Register</a><br/>
        </div>

    </main>
    
</div>
    </>
}
export default Login