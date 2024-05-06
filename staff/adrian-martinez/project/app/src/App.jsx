//import logic from "./logic"
import { Routes, Route, Navigate, useNavigate } from "react-router-dom"

//Todas las páginas no tienen por qué estar en este archivo 
import Inicio from "./Pages/index"
import ParaQuienEs from "./Pages/paraQuienEs"
import Tutorial from "./Pages/tutorial"
import Contacto from "./Pages/contacto"
import Login from "./Pages/login"
import Register from "./Pages/register"
//import ResetPassword from "./Pages/resetPassword"
//import Home from "./Pages/home"
import ListaUsuarios from "./Pages/listaUsuarios"
//import HomeEmpresa from "./Pages/homeEmpresa"

function App() {
  
  const navigate = useNavigate()

  const handleUserLogin = () => navigate('/login');
  const handleUserRegister = () => navigate('/register');
  const handleListarUsers = () => navigate('/listaUsuarios');
  const handleResetPassword = () => navigate('/resetPassword');
  const handlePerfil = () => navigate('/');
  
  //Menú navegación
  const handleInicio = () => navigate("/");
  const handleParaQuienEs = () => navigate('/paraQuienEs');
  const handleTutorial = () => navigate('/tutorial');
  const handleContacto = () => navigate('/contacto');

  console.debug('App render')

  return (
      <Routes>
          <Route path="/" element={<Inicio onClickLogin={handleUserLogin} onClickRegister={handleUserRegister} onClickParaQuienEs={handleParaQuienEs} onClickTutorial={handleTutorial} onClickContacto={handleContacto} onClickListarUsers={handleListarUsers} />} /> 
          <Route path="/login" element={<Login onClickPerfil={handlePerfil} onClickResetPassword={handleResetPassword} onClickInicio={handleInicio}/> }/>
          <Route path="/register" element={<Register onClickRegister={handleUserRegister} onClickLogin={handleUserLogin} onClickInicio={handleInicio}/> }/>
          <Route path="/paraQuienEs" element={<ParaQuienEs onClickParaQuienEs={handleParaQuienEs} onClickTutorial={handleTutorial} onClickLogin={handleUserLogin} onClickRegister={handleUserRegister} onClickInicio={handleInicio}/>}/>
          <Route path="/tutorial" element={<Tutorial onClickTutorial={handleTutorial} onClickParaQuienEs={handleParaQuienEs} onClickContacto={handleContacto} onClickLogin={handleUserLogin} onClickRegister={handleUserRegister} onClickInicio={handleInicio}/>}/>
          <Route path="/contacto" element={<Contacto onClickContacto={handleContacto} onClickParaQuienEs={handleParaQuienEs} onClickTutorial={handleTutorial} onClickLogin={handleUserLogin} onClickRegister={handleUserRegister} onClickInicio={handleInicio}/>}/>
          {/* <Route path="/listaUsuarios" element={logic.isUserLoggedIn() ? <ListaUsuarios /> : <Navigate to="/" />}/> */}
          {/* {view === 'resetPassword' && <ResetPassword />} */}
      </Routes>
  )
}

export default App