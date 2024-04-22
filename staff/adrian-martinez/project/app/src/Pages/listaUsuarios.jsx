function ListaUsuarios() {

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
                <form className="form">
                    <label htmlFor="ciudad">Ciudad: </label>
                    <input className="input" type="text" id="ciudad" placeholder="Ejemplo: Coruña"/>

                    &nbsp;<label htmlFor="ciudad">Área profesional: </label>
                    <input className="input" type="text" id="ciudad" placeholder="Ejemplo: Desarrollo Web"/>
                    <button className="buscar" type="submit">Buscar</button>
                </form>
            </div>
        </header>
        <main>
            <container id="container">
                <section>
                    <h2>Lista de Usuarios filtrados por profesión</h2>
                    
                </section>
            </container>
        </main>
        <footer>
            
        </footer>
    </>
    )
}

export default ListaUsuarios;