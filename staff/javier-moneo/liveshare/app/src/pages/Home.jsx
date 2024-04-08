import { useState } from 'react';
import logic from '../logic';
import CreatePost from './CreatePost';

function Home({ onUserLoggedOut }) {
  const [view, setView] = useState('createPost');
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

  let posts = [];

  const handleCreateClick = () => {
    // const newPosts = logic.retrievePosts();
    // this.setState({ view: 'post', posts: newPosts });
    setView('post');
  };

  try {
    posts = logic.retrievePosts();
  } catch (error) {
    console.error(error);

    alert(error.message);
  }

  return (
    <>
      <header className="header">
        <h1>Hello, {user.name}!</h1>

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
        <section id="posts-section">
          <h2>Posts</h2>

          <div id="posts-list">
            {posts.map((post) => (
              <article key={post.id} className="post">
                <h3>{post.author.username}</h3>
                <img className="post-image" src={`${post.image}`}></img>
                <p>
                  {post.text}
                  <br />
                  <sup>{post.date}</sup>
                </p>
              </article>
            ))}
          </div>
        </section>
        {view === 'createPost' && (
          <CreatePost onPostCreated={() => handleCreateClick()} />
        )}
      </main>

      <footer className="footer">
        <button className="button" id="posts-button">
          🏚️
        </button>
        <button className="button" id="create-post-button">
          ➕
        </button>
      </footer>
    </>
  );
}

export default Home;
