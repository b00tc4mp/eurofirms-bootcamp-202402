import logic from "../logic";
import { useState } from "react";

import CreatePost from "../components/CreatePost";
import Posts from "../components/Posts";

function Home({ onUserLoggedOut }) {
  const [view, setView] = useState(null);

  let user = null;

  try {
    user = logic.retrieveUser();
  } catch (error) {
    console.error(error);

    alert(error.message);
  }

  const handleLogout = () => {
    logic.logoutUser();

    onUserLoggedOut();
  };

  const handleCreateClick = () => {
    // const newPosts = logic.retrievePosts();
    // setState({ view: "post", posts: newPosts });
    setView(null);
  };

  const handleCreatePost = () => {
    setView("createPost");
  };

  const handleCancelClick = () => {
    setView(null);
  };

  return (
    <>
      <header className="header">
        <img
          src="src/assets/images/logo-cabecera-alalluna.png"
          alt="logo alalluna"
        />

        <nav id="top-menu">
          <button id="chat-button">💬</button>
          <button id="posts-button">🏚️</button>
          <button id="create-post-button" onClick={handleCreatePost}>
            +
          </button>
        </nav>
      </header>

      {/* <div className="h1">
            <h1 className="homeTitlePost">Welcome, Home!</h1>
        </div> */}

      {view === "createPost" && (
        <CreatePost
          onPostCreated={() => handleCreateClick()}
          onCancelClick={() => handleCancelClick()}
        />
      )}
      <Posts />
      <footer>
        <div>&copy; 2024 Alalluna</div>
        <div className="right">
          <button id="logoutButton" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </footer>
    </>
  );
}
export default Home;
