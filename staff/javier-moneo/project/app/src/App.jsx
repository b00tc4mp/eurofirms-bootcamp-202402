import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import logic from './logic';
import NavBar from './components/NavBar';
import AppLayout from './AppLayout';
import Comments from './pages/Comments';
import EditionsList from './pages/EditionsList';

function App() {
  const navigate = useNavigate();

  const handleUserRegistered = () => navigate('/login');

  const handleUserLoggedIn = () => navigate('/');

  const handleRegisterClick = () => navigate('/register');

  const handleLoginClick = () => navigate('/login');

  const handleUserLoggedOut = () => navigate('/login');

  console.debug('App render');

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            logic.isUserLoggedIn() ? (
              <Navigate to="/" />
            ) : (
              <Login
                onUserLoggedIn={handleUserLoggedIn}
                onRegisterClick={handleRegisterClick}
              />
            )
          }
        />

        <Route
          path="/register"
          element={
            logic.isUserLoggedIn() ? (
              <Navigate to="/" />
            ) : (
              <Register
                onUserRegistered={() => handleUserRegistered()}
                onLoginClick={handleLoginClick}
              />
            )
          }
        />
        <Route element={<AppLayout />}>
          <Route
            path="/"
            element={<Home onUserLoggedOut={handleUserLoggedOut} />}
          />
          <Route path="/editionsList/:editionCode" element={<EditionsList />} />
          <Route path="/comments" element={<Comments />} />
        </Route>

        {/* <Route
          path="/"
          element={<Home onUserLoggedOut={handleUserLoggedOut} />}
        /> */}

        {/* <Route
          path="/"
          element={
            logic.isUserLoggedIn() ? (
              <Home onUserLoggedOut={handleUserLoggedOut} />
            ) : (
              <Navigate to="/login" />
            )
          }
        /> */}
      </Routes>
    </>
  );
}

export default App;
