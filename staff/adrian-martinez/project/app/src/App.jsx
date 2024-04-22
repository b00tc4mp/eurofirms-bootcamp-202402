import Inicio from "./Pages/index"
import ParaQuienEs from "./Pages/paraQuienEs"
import Tutorial from "./Pages/tutorial"
import Contacto from "./Pages/contacto"
import Login from "./Pages/login"
import Register from "./Pages/register"
import { useState } from "react"
import ResetPassword from "./Pages/resetPassword"
import Home from "./Pages/home"
import ListaUsuarios from "./Pages/listaUsuarios"

//Para manejar las vistas hay que hacerlo a través de un clase
function App() {
  const [view, setView] = useState('index');

  const handleUserLogin = () => setView('login');
  const handleUserRegister = () => setView('register');
  const handleListarUsers = () => setView('listaUsuarios');
  const handleResetPassword = () => setView('resetPassword');
  const handlePerfil = () => setView('home');
  
  //Menú navegación
  const handleParaQuienEs = () => setView('paraQuienEs');
  const handleTutorial = () => setView('tutorial');
  const handleContacto = () => setView('contacto');

  console.debug('App render')

  return <>
    { view === "index" && <Inicio onClickLogin={handleUserLogin} onClickRegister={handleUserRegister} onClickParaQuienEs={handleParaQuienEs} onClickTutorial={handleTutorial} onClickContacto={handleContacto} onClickListarUsers={handleListarUsers}/> }
    { view === "login" && <Login onClickPerfil={handlePerfil} onClickResetPassword={handleResetPassword}/> }
    { view === "register" && <Register onClickRegister={handleUserRegister} onClickLogin={handleUserLogin}/> }
    { view === 'paraQuienEs' && <ParaQuienEs />}
    { view === 'tutorial' && <Tutorial />}
    { view === 'contacto' && <Contacto />}
    { view === 'home' && <Home />}
    {/* { view === 'homeEmpresa' && <HomeEmpresa />} */}
    { view === 'listaUsuarios' && <ListaUsuarios />}
    { view === 'resetPassword' && <ResetPassword />}
  </>
}

export default App