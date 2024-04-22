import logic from "../logic";
import { useState, useEffect } from "react";

import CreatePost from "../components/CreatePost";
import Posts from "../components/Posts";

// import Chat from "../components/Chat"

function Home({ onUserLoggedOut }) {
  const [view, setView] = useState(null);
  const [createPost, setCreatePost] = useState(null)
  const [user,setuser] = useState(null)

  useEffect(()=>{
    try {
      logic.retrieveUser()
        .then(user =>setuser(user))
        .catch(error =>{
          console.error(error)

          alert(error.message)
        })

    } catch (error) {
      console.error(error);
  
      alert(error.message);
    }

  }, [])

  const handleLogout = () => {
    logic.logoutUser();

    onLogoutClick();
  };

  const handleCreateClick = () => {
    // const newPosts = logic.retrievePosts();
    // setState({ view: "post", posts: newPosts });
    setView(null);
  };

  const handleCreatePost = () => {
    setCreatePost("createPost");
  };

  const handleCancelClick = () => {
    setCreatePost(null);
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

      <div className="h1">
            <h1 className="homeTitlePost">Welcome,  {user ? user.username:' cargando'}!</h1>
        </div>

      {view === "createPost" && (
        <CreatePost
          onPostCreated={() => handleCreateClick()}
          onCancelClick={() => handleCancelClick()}
        />
      )}
      {/* <Posts /> */}
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
