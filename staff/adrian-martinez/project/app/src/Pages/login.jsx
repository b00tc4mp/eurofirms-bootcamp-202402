function Login({onClickPerfil, onClickResetPassword}) {

    const handleClickHome = () => {

        onClickPerfil();
    }
    
    const handleClickResetPassword = () => {

        onClickResetPassword();
    }

    return (
    <>
        <header className="header">
            <div id="app">FormativeLife</div>
            <div className="titular"><i>Tu red de contactos haciendo Match</i></div>
        </header>
        <main>
            <container id="container">
                <section>
                    <form className="form" onSubmit={handleClickHome}>
                        <label forhtml="user">Usuario</label>
                        <input type="text" id="user" placeholder="Usuario"/><br/><br/>

                        <label forhtml="password">Contraseña</label>
                        <input type="password" id="password" placeholder="Contraseña"/><br/><br/>

                        <button type="submit">Iniciar Sesion</button><br/><br/>
                    </form>
                    <button onClick={handleClickResetPassword}>Olvidé mi Contraseña</button>
                </section>
            </container>
        </main>
        <footer>
            
        </footer>
    </>
    )
}

export default Login;