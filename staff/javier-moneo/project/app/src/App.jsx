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
import ReportedSearches from './pages/ReportedSearches';
import ReportedComments from './pages/ReportedComments';
import ReportedTags from './pages/ReportedTags';
import ReportedUsers from './pages/ReportedUsers';
import NewSearchesByEditionIdAndTagId from './pages/NewSearchesByEditionIdAndTagId';
import AssignRoleModerator from './pages/AssignRoleModerator';
import RemoveRoleModerator from './pages/RemoveRoleModerator';

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

          {/* NEW SEARCHES by */}
          <Route
            path="/newSearchesByEditionIdAndTagId/:urlEditionId/:urlTagId"
            element={<NewSearchesByEditionIdAndTagId />}
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
          {/* REPORTED SEARCHES */}
          <Route
            path="/reportedSearches"
            element={
              logic.isUserLoggedIn() ? (
                <ReportedSearches />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          {/* REPORTED COMMENTS */}
          <Route
            path="/reportedComments"
            element={
              logic.isUserLoggedIn() ? (
                <ReportedComments />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          {/* REPORTED TAGS */}
          <Route
            path="/reportedTags"
            element={
              logic.isUserLoggedIn() ? (
                <ReportedTags />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          {/* REPORTED USERS */}
          <Route
            path="/reportedUsers"
            element={
              logic.isUserLoggedIn() ? (
                <ReportedUsers />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          {/* ASSIGN ROLE MODERATOR */}
          <Route
            path="/assignRoleModerator"
            element={
              logic.isUserLoggedIn() ? (
                <AssignRoleModerator />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          {/* REMOVE ROLE MODERATOR */}
          <Route
            path="/removeRoleModerator"
            element={
              logic.isUserLoggedIn() ? (
                <RemoveRoleModerator />
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
