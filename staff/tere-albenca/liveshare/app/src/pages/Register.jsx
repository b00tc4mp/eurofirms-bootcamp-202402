function Register(){
    return<>
        <div className="body-rlr">

<main className="main">
    <h1>REGISTER</h1>
    <form action="" className="form little-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name"/>

        <label htmlFor="lastname">Lastname</label>
        <input type="text" id="lastname"/>

        <label htmlFor="birthdate">Birthdate</label>
        <input type="date" id="birthdate"/>

        <label htmlFor="username">Username</label>
        <input type="text" id="username"/>

        <label htmlFor="email">Email</label>
        <input type="text" id="email"/>

        <label htmlFor="password">Password</label>
        <input type="password" id="password"/>

        <button type="submit">Register</button>

    </form>


    <div className="container-a container-a-little">
        <a href="">RESET PASSWORD</a>
    </div>
    <div className="container-a container-a-little">
        <a id="login" href="">LOGIN</a><br/>
    </div>

</main>
</div>

</>
}
export default Register