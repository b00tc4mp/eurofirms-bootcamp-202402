import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Home from './pages/Home.jsx'
// import Recurses from './pages/Recurses.jsx'
// import Donate from './pages/Donate.jsx'
import Gallery from './pages/Gallery.jsx'
// import Contact from './pages/Contact.jsx'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import logic from './logic'
import { useState, useEffect } from 'react'


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
  }, [])

  const navigate = useNavigate()


  const handleUserRegistered = () => navigate('/login')

  const handleUserLoggedIn = () => navigate('/')

  const handleRegisterClick = () => navigate('/register')

  const handleLoginClick = () => navigate('/login')

  const handleUserLoggedOut = () => navigate('/login')

  // const handleRecursesClick = () => navigate('/recurses')

  // const handleDonateClick = () => navigate('/donate')

  const handleGalleryClick = () => navigate('/gallery')

  // const handleContactClick = () => navigate('/contact')

  const handleRecursesClick = () => onRecursesIn()

  const handleDonateClick = () => onDonateIn()

  const handleContactClick = () => onContactIn()

  console.debug('App render')

  return <>
    <header className="flex justify-between items-center border-b-2 bg-green-700 border-black  fixed top-0 w-full bg-white h-12 px-2 box-border">
      {!user && <p>MI SOBRINO</p>}
      {user && <h1>Hello, {user.name}!</h1>}
      <button className="px-3 bg-white" onClick={handleRegisterClick}>Register</button>
      <button className="px-3 bg-white" onClick={handleLoginClick}>Login</button>
      <button className="px-3 bg-white" onClick={handleRecursesClick}>Recursos</button>
      <button className="px-3 bg-white" onClick={handleDonateClick}>Donate</button>
      <button className="px-3 bg-white" onClick={handleGalleryClick}>Gallery</button>
      <button className="px-3 bg-white" onClick={handleContactClick}>Contact</button>



    </header>
    <Routes>
      <Route path="/login" element={ <Login onUserLoggedIn={handleUserLoggedIn} onRegisterClick={handleRegisterClick} />} />
      <Route path="/register" element={ <Register onUserRegistered={() => handleUserRegistered()} onLoginClick={handleLoginClick} />} />
      <Route path="/" element={<Home onUserLoggedOut={handleUserLoggedOut} />} />
      <Route path="/gallery" element={<Gallery onGalleryIn={handleGalleryClick} />} />
      {/* <Route path="/recurses" element={<Recurses onRecursesIn={handleRecursesClick}/>} />
      <Route path="/donate" element={<Donate onRecursesIn={handleDonateClick}/>} />
      <Route path="/contact" element={<Contact onContactIn={handleContactClick}/>} /> */}

    </Routes>
    <footer className="flex justify-center items-center border-t-2 bg-green-700 border-black fixed bottom-0 w-full bg-white h-12 px-2 box-border align-end">


    </footer>
  </>
}

export default App
