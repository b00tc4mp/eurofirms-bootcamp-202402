import { useParams } from 'react-router-dom';
import logic from '../logic';
import { useEffect, useState } from 'react';

function Profile({ onUserLoggedOut, onHomeClick }) {
  const { targetUserId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await logic.retrieveUser(targetUserId);
        setUser(user);
      } catch (error) {
        console.error(error);
        alert('Sorry, there was an error retrieving the user profile.');
      }
    };

    fetchUser();
  }, [targetUserId]);

  const handleLogout = () => {
    logic.logoutUser();
    onUserLoggedOut();
  };

  return (
    <div>
      <header>
        <button onClick={onHomeClick}>Home</button>
        <button onClick={handleLogout}>Logout</button>
      </header>
      <main>
        {user ? (
          <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
        ) : (
          <p>Loading profile...</p>
        )}
      </main>
    </div>
  );
}

export default Profile;
