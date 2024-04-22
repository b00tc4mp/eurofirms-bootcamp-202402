function ParaQuienEs() {

    return (
    <>
        <header className="header">
            <div id="app">FormativeLife</div>
            <div className="titular"><i>Busca o atrae talento</i></div>
            <div id="area-perfil">
                <button className="login">Iniciar Sesión</button>
                <button className="register">Crear cuenta</button>
            </div>
            <div id="area-buscador">
                <form className="form" onSubmit="">
                    <label htmlFor="ciudad">Ciudad: </label>
                    <input className="input" type="text" id="ciudad" placeholder="Ejemplo: Coruña"/>

                    &nbsp;<label htmlFor="ciudad">Área profesional: </label>
                    <input className="input" type="text" id="ciudad" placeholder="Ejemplo: Desarrollo Web"/>
                    <button className="buscar">Buscar</button>
                </form>
            </div>
        </header>
        <main>
            <aside id="aside-left">
                <nav>
                    <ul>
                        <li>Inicio</li>
                        <li>¿Para quien es?</li>
                        <li>Tutorial de uso</li>
                        <li>Contacto</li>
                    </ul>
                </nav>
            </aside>
            <container id="container">
                <section>
                    <h2>¿Para Quién es?</h2>
                    
                </section>
            </container>
        </main>
        <footer>
            
        </footer>
    </>
    )
}

export default ParaQuienEs;