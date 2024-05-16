import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import RegisterStudent from './pages/RegisterStudent.jsx';
import Profile from './pages/Profile.jsx';
import logic from './logic';

function App() {
  const navigate = useNavigate();

  const handleStudentRegistered = () => navigate('/login');

  const handleUserLoggedIn = () => navigate('/');

  const handleRegisterClick = () => navigate('/register');

  const handleLoginClick = () => navigate('/login');

  const handleLogoutClick = () => {
    logic.logoutUser();
    navigate('/login');
  };

  const handleHomeClick = () => navigate('/');

  const handleProfileClick = (userId) => navigate(`/profile/${userId}`);

  return (
    <Routes>
      <Route
        path="/"
        element={logic.isUserLoggedIn() ? (
          <Home
            onUserLoggedOut={handleLogoutClick}
            onHomeClick={handleHomeClick}
            onProfileClick={handleProfileClick}
          />
        ) : (
          <Navigate to="/login" />
        )}
      />
      <Route
        path="/login"
        element={logic.isUserLoggedIn() ? (
          <Navigate to="/" />
        ) : (
          <Login
            onUserLoggedIn={handleUserLoggedIn}
            onRegisterClick={handleRegisterClick}
          />
        )}
      />
      <Route
        path="/register"
        element={logic.isUserLoggedIn() ? (
          <Navigate to="/" />
        ) : (
          <RegisterStudent
            onStudentRegistered={handleStudentRegistered}
            onLoginClick={handleLoginClick}
            onHomeClick={handleHomeClick}
          />
        )}
      />
      <Route
        path="/profile/:targetUserId"
        element={logic.isUserLoggedIn() ? (
          <Profile onUserLoggedOut={handleLogoutClick} onHomeClick={handleHomeClick} />
        ) : (
          <Navigate to="/login" />
        )}
      />
    </Routes>
  );
}

export default App;
