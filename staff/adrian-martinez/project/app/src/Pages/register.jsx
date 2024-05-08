function Register(props) {

    const handleClickUserLogin = () => {
      
        props.onClickLogin();
    } 

    /* const handleClickUserRegister = () => {
      
        onClickRegister();
    }  */

    return (
    <>
        <header className="header">
            <div id="app">FormativeLife</div>
            <div className="titular"><i>Crea ya tu perfil profesional !!</i></div>
            
        </header>
        <main>
            <container id="container">
                <section className="">
                    <form className="form" onSubmit={ handleClickUserLogin }>
                        <label forhtml="username">Nombre: </label>
                        <input type="text" id="username" placeholder="" required /><br/><br/>

                        <label forhtml="lastname">Apellidos: </label>
                        <input type="text" id="lastname" placeholder="" required /><br/><br/>

                        <label forhtml="age">Edad: </label>
                        <input type="text" id="age" placeholder="Debe ser mayor de 16" required /><br/><br/>

                        <label forhtml="profileType">Tipo de perfil: </label>
                        <input type="text" id="profileType" placeholder="Estudiante/Empresa" required /><br/><br/>

                        <label forhtml="email">Correo electrónico: </label>
                        <input type="text" id="email" placeholder="" required /><br/><br/>

                        <label forhtml="password">Contraseña: </label>
                        <input type="password" id="password" placeholder="Entre 8 y 16 caracteres" required /><br/><br/>

                        <button type="submit">Registrarse</button>
                        </form>
                        <button onClick={props.onClickInicio}>Volver</button>
                </section>
            </container>
        </main>
        <footer>
            
        </footer>
    </>
    )
}

export default Register;