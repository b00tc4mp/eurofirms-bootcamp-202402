import logic from "../logic";
import { errors, validate } from "com"

const { SystemError } = errors;

function Inicio({ onClickLogin , onClickRegister, onClickParaQuienEs, onClickTutorial, onClickContacto, onClickListarUsers, numUsers}) {

    const handleClickUserLogin = () => {
      
        onClickLogin();
    } 

    const handleClickUserRegister = () => {

        onClickRegister();
    }

    const handleClickParaQuienEs = () => {

        onClickParaQuienEs();
    }

    const handleClickTutorial = () => {

        onClickTutorial();
    }

    const handleClickContacto = () => {

        onClickContacto();
    }

    const handleClickListarUsers = () => {

        onClickListarUsers();
    }
        
    return (
    <>
        <header className="header">
            <div id="app">FormativeLife</div>
            <div className="titular"><i>Busca o atrae talento</i></div>
            <div id="area-perfil h-14">
                <button className="login" onClick={handleClickUserLogin}>Iniciar Sesión</button>
                <button className="register" onClick={handleClickUserRegister}>Crear cuenta</button>
            </div><br/><br/>
            <div id="area-perfil mt-10">
                Usuarios registrados: 4
            </div>
        </header>
        <main>
            <aside id="aside-left">
                <nav>
                    <ul>
                        <li>Inicio</li>
                        <li onClick={handleClickParaQuienEs}>¿Para quien es?</li>
                        <li onClick={handleClickTutorial}>Tutorial de uso</li>
                        <li onClick={handleClickContacto}>Contacto</li>
                    </ul>
                </nav>
            </aside>
            <container id="container">
                <section>
                    <h2>Estudiante de último año contactando con su primera empresa.</h2><br/>
                    <img width="300px" height="300px" src="https://www.infoautonomos.com/wp-content/uploads/2016/11/man-875702_640-640x433.jpg"/>
                    <p>Una primera toma de contacto del estudiante con la empresa es crucial para que tanto el estudiante y el empresario con los mismos valores puedan conocerse y ser productivos para llevar un negocio al éxito.</p>
                    <p>Y eso se consigue de una forma más productiva cuando se tiene experiencia en el sector. ¿Pero que pasa cuando no tienes experiencia laboral?.<br/></p>
                    
                </section>
            </container>
        </main>
        <footer>
            
        </footer>
    </>
    )
}

export default Inicio;