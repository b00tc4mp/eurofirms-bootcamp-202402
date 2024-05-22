import React from 'react'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Home from './pages/Home.jsx'
import Recurses from './pages/Recurses.jsx'
import Donate from './pages/Donate.jsx'
import Gallery from './pages/Gallery.jsx'
import Contact from './pages/Contact.jsx'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import logic from './logic'
import { useState, useEffect } from 'react'
import { errors } from 'com'
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

const { TypeError, RangeError, ContentError } = errors


function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (logic.isUserLoggedIn()) {
      try {
        logic.retrieveUser()
          .then(user => setUser(user))
          .catch(error => {
            console.error(error.message)

            let feedback = error.message

            if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
              feedback = `${feedback}, please correct it`
            else if (error instanceof MatchError)
              feedback = `${feedback}, please verify user`
            else
              feedback = 'sorry, there was an error, please try again later'

            alert(feedback)

          })
      } catch (error) {
        console.error(error.message)

        let feedback = error.message

        if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
          feedback = `${feedback}, please correct it`
        else
          feedback = 'sorry, there was an error, please try again later'

        alert(feedback)
      }
    }
  }, [logic.isUserLoggedIn()])

  const navigate = useNavigate()

  const handleLogout = () => {
    logic.logoutUser()

    setUser(null)

    navigate('/login')
  }

  const handleHomeClick = () => navigate('/')

  const handleUserRegistered = () => navigate('/login')

  const handleUserLoggedIn = () => navigate('/')

  const handleRegisterClick = () => navigate('/register')

  const handleLoginClick = () => navigate('/login')


  const handleRecursesClick = () => navigate('/recurses')

  const handleDonateClick = () => navigate('/donate')

  const handleGalleryClick = () => navigate('/gallery')

  const handleContactClick = () => navigate('/contact')

  console.debug('App render')
  return <>
    <header className="  flex items-center border-b-2 bg-teal-700 border-black fixed top-0 w-full h-15 box-border">
     
      {!user && (
        <>
          <button className="px-3 ml-36 text-white" onClick={handleRegisterClick}>Register</button>
          <button className="px-3  text-white" onClick={handleLoginClick}>Login</button>
        </>
      )}

      {user && (
        <h1 className='text-white text-start p-8'>Hola,{user.name}!</h1>
      )}

 <div className=' object-center h-20 w-30 '>
        <img className= "h-20 w-30" src="/src/assets/Logotipo-MSM-04.png" />
      </div>
      {user && (
        <button className="px-3 absolute inset-y-0 right-0" id="logout-button" onClick={handleLogout}>🚪</button>
      )}
    </header>
    <main className=' bg-green-100 flex-grow min-h-screen pt-20' >

      <Routes>
        <Route path="/login" element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Login onUserLoggedIn={handleUserLoggedIn} onRegisterClick={handleRegisterClick} />} />
        <Route path="/register" element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Register onUserRegistered={() => handleUserRegistered()} onLoginClick={handleLoginClick} />} />
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery userRole={user?.role} onGalleryIn={handleGalleryClick} />} />
        <Route path="/recurses" element={<Recurses onRecursesIn={handleRecursesClick} />} />
        <Route path="/donate" element={<Donate onRecursesIn={handleDonateClick} />} />
        <Route path="/contact" element={<Contact onContactIn={handleContactClick} />} />

      </Routes>
    </main>
    <footer className="flex justify-center items-center border-t-2 bg-teal-700 border-black fixed bottom-0 w-full  h-12 px-2 box-border align-end">
      <button className="px-3 text-white" onClick={handleRecursesClick}>Recursos</button>
      <button className="px-3 text-white" onClick={handleDonateClick}>Donaciones</button>
      <button className="px-3" onClick={handleHomeClick}>🏚️</button>
      <button className="px-3 text-white" onClick={handleGalleryClick}>Galería</button>
      <button className="px-3 text-white" onClick={handleContactClick}>Contacto</button>

      


    </footer>
    <FloatingWhatsAppButton />
  </>
}

export default App

