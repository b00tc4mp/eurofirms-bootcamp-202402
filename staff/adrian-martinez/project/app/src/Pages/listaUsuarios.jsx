import logic from "../logic";
import { Link } from "react-router-dom";

function ListaUsuarios(props) {
    const role = logic.getLoggedInUserRole();
    const id = logic.getLoggedInUserId();

    return (
    <>
        <header className="header">
            <div id="app" onClick={props.onClickInicio}>FormativeLife</div>
            <div className="titular"><i>Lista de Usuarios</i></div>
            
                <button className="buscar" onClick={props.onUserLoggedIn}>Volver a tu perfil</button>
        </header>
        <main>
            <container id="container">
                <section>
                {
                  role === "student" ?
                        <>
                            <h2 className="text-xl font-bold text-center">Lista de estudiantes filtrados por profesión</h2>
                            <ul>
                                <hr className="h-1" />
                                <li className="text-lg font-bold  bg-gray-200 p-4">
                                    <Link to={`/home/${id}`}>Adrián Martínez Insua</Link>
                                </li>
                                <hr/>
                                <hr className="h-1" />
                                <li className="text-lg font-bold  bg-gray-200 p-4">
                                    Pablo Martinez Insua
                                </li>
                                <hr/>
                            </ul>
                        </>
                        :
                        <>
                            <h2 className="text-xl font-bold text-center">Lista de empresas filtradas por profesión</h2>
                            <ul>
                                <hr className="h-1" />
                                <li className="text-lg font-bold p-4">
                                    Microsoft
                                </li>
                                <hr/>
                                <hr className="h-1" />
                                <li className="text-lg font-bold p-4">
                                    Google
                                </li>
                                <hr/>
                            </ul>                           
                        </>
                        
                    }
                    {/* {logic.retrieveUsers()}              */}
                </section>
            </container>
        </main>
        <footer>
            
        </footer>
    </>
    )
}

export default ListaUsuarios;