import { useEffect, useState } from 'react';

import logic from '../logic';

import Posts from '../components/Posts';
import CreatePost from '../components/CreatePost';

function Home({ onUserLoggedOut }) {
  const [view, setView] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      logic
        .retrieveUser()
        .then((user) => setUser(user))
        .catch((error) => {
          console.error(error);

          alert(error.message);
        });
    } catch (error) {
      console.error(error);

      alert(error.message);
    }
  }, []);

  const handleLogout = () => {
    logic.logoutUser();

    onUserLoggedOut();
  };

  let posts = [];

  try {
    posts = logic.retrievePosts();
  } catch (error) {
    console.error(error);

    alert(error.message);
  }

  const handleCreatePostClick = () => setView('create-post');

  const handleCreatePostCancelClick = () => setView(null);

  const handlePostCreated = () => setView(null);

  return (
    <>
      <header className="header">
        {!user && <p>Loading...</p>}
        {user && <h1>Hello, {user.name}!</h1>}

        <nav id="top-menu">
          <button className="button" id="chat-button">
            💬
          </button>
          <button className="button" id="logout-button" onClick={handleLogout}>
            🚪
          </button>
        </nav>
      </header>

      <main className="main">
        {/* <Posts /> */}
        {view === 'create-post' && (
          <CreatePost
            onCancelClick={handleCreatePostCancelClick}
            onPostCreated={handlePostCreated}
          />
        )}
      </main>

      <footer className="footer">
        <button className="button" id="posts-button">
          🏚️
        </button>
        <button
          className="button"
          id="create-post-button"
          onClick={handleCreatePostClick}
        >
          ➕
        </button>
      </footer>
    </>
  );
}

export default Home;
