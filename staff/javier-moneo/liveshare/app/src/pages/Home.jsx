import { Component } from 'react';
import logic from '../logic';
import CreatePost from './CreatePost';

class Home extends Component {
  constructor() {
    super();
    const posts = logic.retrievePosts();
    this.state = { view: 'createPost', posts: posts };
  }

  handleCreateClick() {
    const newPosts = logic.retrievePosts();
    this.setState({ view: 'post', posts: newPosts });
  }

  render() {
    return (
      <>
        <header className="header">
          <h1>Hello, uno!</h1>

          <nav id="top-menu">
            <button className="button" id="chat-button">
              💬
            </button>
            <button className="button" id="logout-button">
              🚪
            </button>
          </nav>
        </header>

        <main className="main">
          <section id="posts-section">
            <h2>Posts</h2>

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
          </section>
          {this.state.view === 'createPost' && (
            <CreatePost onPostCreated={() => this.handleCreateClick()} />
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
}

export default Home;
