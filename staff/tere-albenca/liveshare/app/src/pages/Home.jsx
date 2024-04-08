import { Component } from "react";
import logic from "../logic";
import CreatePost from "./CreatePost";

class Home extends Component {
  constructor() {
    super();

    const posts = logic.retrievePosts();
    this.state = { view: "createPost", posts: posts };
  }

  handleCreateClick() {
    const newPosts = logic.retrievePosts();
    this.setState({ view: "post", posts: newPosts });
  }

  render() {
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
            <button id="create-post-button">+</button>
          </nav>
        </header>

        {/* <div className="h1">
            <h1 className="homeTitlePost">Welcome, Home!</h1>
        </div> */}
        <section id="posts-section" className="posts-section">
          <h2>POSTS</h2>
          <div id="posts-list">
            {this.state.posts.map((post) => (
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

          <button id="create-post-cancel-button">cancel</button>
        </section>
        {this.state.view === "createPost" && (
          <CreatePost onPostCreated={() => this.handleCreateClick()} />
        )}
        <footer>
          <div>&copy; 2024 Alalluna</div>
          <div className="right">
            <button id="logoutButton" onClick={handleLogoutClick}>
              Logout
            </button>
          </div>
        </footer>
      </>
    );
  }
}
export default Home;
