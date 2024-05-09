//import logic from "./logic"
import { Routes, Route, Navigate, useNavigate } from "react-router-dom" 

//Todas las páginas no tienen por qué estar en este archivo 
import Inicio from "./Pages/index"
import ParaQuienEs from "./Pages/ParaQuienEs"
import Tutorial from "./Pages/Tutorial"
import Contacto from "./Pages/Contacto"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
//import ResetPassword from "./Pages/resetPassword"
import Home from "./Pages/Home"
import ListaUsuarios from "./Pages/ListaUsuarios"
//import HomeEmpresa from "./Pages/homeEmpresa"

function App() {
  
  const navigate = useNavigate()

  const handleUserLogin = () => navigate('/Login');
  const handleUserRegister = () => navigate('/Register');
  const handleListarUsers = () => navigate('/ListaUsuarios');
  const handleResetPassword = () => navigate('/ResetPassword');
  const handlePerfil = () => navigate('/Home');
  
  //Menú navegación
  const handleInicio = () => navigate("/");
  const handleParaQuienEs = () => navigate('/ParaQuienEs');
  const handleTutorial = () => navigate('/Tutorial');
  const handleContacto = () => navigate('/Contacto');

  console.debug('App render')

  return (
      <Routes>
          <Route path="/" element={<Inicio onClickLogin={handleUserLogin} onClickRegister={handleUserRegister} onClickParaQuienEs={handleParaQuienEs} onClickTutorial={handleTutorial} onClickContacto={handleContacto} onClickListarUsers={handleListarUsers} />} /> 
          <Route path="/Login" element={<Login onClickPerfil={handlePerfil} onClickResetPassword={handleResetPassword} onClickInicio={handleInicio}/> }/>
          <Route path="/Register" element={<Register onClickRegister={handleUserRegister} onClickLogin={handleUserLogin} onClickInicio={handleInicio}/> }/>
          <Route path="/ParaQuienEs" element={<ParaQuienEs onClickParaQuienEs={handleParaQuienEs} onClickTutorial={handleTutorial} onClickLogin={handleUserLogin} onClickRegister={handleUserRegister} onClickInicio={handleInicio}/>}/>
          <Route path="/Tutorial" element={<Tutorial onClickTutorial={handleTutorial} onClickParaQuienEs={handleParaQuienEs} onClickContacto={handleContacto} onClickLogin={handleUserLogin} onClickRegister={handleUserRegister} onClickInicio={handleInicio}/>}/>
          <Route path="/Contacto" element={<Contacto onClickContacto={handleContacto} onClickParaQuienEs={handleParaQuienEs} onClickTutorial={handleTutorial} onClickLogin={handleUserLogin} onClickRegister={handleUserRegister} onClickInicio={handleInicio}/>}/>
          <Route path="/Home" element={<Home onClickPerfil={handlePerfil} onClickResetPassword={handleResetPassword} onClickInicio={handleInicio} />} /> 
          {/* <Route path="/listaUsuarios" element={logic.isUserLoggedIn() ? <ListaUsuarios /> : <Navigate to="/" />}/> */}
          {/* {view === 'resetPassword' && <ResetPassword />} */}
      </Routes>
  )
}

export default App