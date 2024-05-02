import { useEffect, useState } from 'react';
import logic from '../logic';
import Posts from '../components/Posts';
import CreatePost from '../components/CreatePost';
import { errors } from 'com';
import Profile from './Profile';

const { ContentError, TypeError, RangeError, MatchError, DuplicityError } =
  errors;

function Home({ onUserLoggedOut }) {
  const [createPostView, setCreatePostView] = useState(null);
  const [view, setView] = useState('posts');
  const [targetUserId, setTargetUserId] = useState(null);
  const [user, setUser] = useState(null);
  const [refreshStamp, setRefreshStamp] = useState(null);

  const handleProfileClick = (targetUserId) => {
    setTargetUserId(targetUserId);
    setView('profile');
  };

  useEffect(() => {
    try {
      logic
        .retrieveUser()
        .then((user) => setUser(user))
        .catch((error) => {
          console.error(error.message);

          let feedback = error.message;

          if (
            error instanceof TypeError ||
            error instanceof RangeError ||
            error instanceof ContentError
          )
            feedback = `${feedback}, please correct it`;
          else if (error instanceof MatchError)
            feedback = `${feedback}, this user not exist`;
          else feedback = 'sorry, there was an error, please try again later';

          alert(feedback);
        });
    } catch (error) {
      console.error(error.message);

      let feedback = error.message;

      if (
        error instanceof TypeError ||
        error instanceof RangeError ||
        error instanceof ContentError
      )
        feedback = `${feedback}, please correct it`;
      else feedback = 'sorry, there was an error, please try again later';

      alert(feedback);
    }
  }, []);

  const handleLogout = () => {
    logic.logoutUser();

    onUserLoggedOut();
  };

  const handleCreatePostClick = () => setCreatePostView('create-post');

  const handleCreatePostCancelClick = () => setCreatePostView(null);

  const handlePostCreated = () => {
    setCreatePostView(null);
    setRefreshStamp(Date.now());
  };

  return (
    <>
      <header className="flex justify-between items-center border-b-2 border-black fixed top-0 w-full bg-white h-12 px-2 box-border">
        {!user && <p>Loading...</p>}
        {user && <h1>Hello, {user.name}!</h1>}

        <nav>
          <button className="px-3" id="logout-button" onClick={handleLogout}>
            🚪
          </button>
        </nav>
      </header>

      <main className="main">
        {view === 'posts' && (
          <Posts
            refreshStamp={refreshStamp}
            onProfileClick={(targetUserId) => handleProfileClick(targetUserId)}
          />
        )}
        {view === 'profile' && <Profile targetUserId={targetUserId} />}

        {createPostView === 'create-post' && (
          <CreatePost
            onCancelClick={handleCreatePostCancelClick}
            onPostCreated={handlePostCreated}
          />
        )}
      </main>

      <footer className="flex justify-center items-center border-t-2 border-black fixed bottom-0 w-full bg-white h-12 px-2 box-border">
        <button className="px-3">🏚️</button>
        <button className="px-3" onClick={handleCreatePostClick}>
          ➕
        </button>
      </footer>
    </>
  );
}

export default Home;
