import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import logic from './logic';
import NavBar from './components/NavBar';
import AppLayout from './AppLayout';
import Comments from './pages/Comments';
import EditionsList from './pages/EditionsList';
import NewSearches from './pages/NewSearches';
import Dashboard from './pages/Dashboard';
import AssignAllRolesToUser from './pages/AssignAllRolesToUser';

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
          {/* HOME */}
          <Route
            path="/"
            element={<Home onUserLoggedOut={handleUserLoggedOut} />}
          />
          <Route
            path="/:urlEditionCode"
            element={<Home onUserLoggedOut={handleUserLoggedOut} />}
          />

          {/* NEW SEARCHES */}
          <Route
            path="/newSearches/:urlEditionCode?/:urlSearcherName?/:urlSearchTypeName?/:urlTagName?"
            element={<NewSearches />}
          />

          {/* EDITION LIST */}
          <Route
            path="/editionsList/:urlEditionCode"
            element={<EditionsList />}
          />
          {/* COMMENTS */}
          <Route path="/comments/:urlSearchId" element={<Comments />} />
          {/* DASHBOARD */}
          <Route path="/dashboard" element={<Dashboard />} />
          {/* ASSIGNALLROLESTOUSER */}
          <Route
            path="/assignAllRolesToUser"
            element={
              logic.isUserLoggedIn() ? (
                <AssignAllRolesToUser />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
