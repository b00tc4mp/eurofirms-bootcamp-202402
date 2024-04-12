import logic from "../logic";
import Post from "./Post";

function Posts() {
  let posts = [];

  try {
    posts = logic.retrievePosts();
  } catch (error) {
    console.error(error);

    alert(error.message);
  }

  console.log("Home render");
  return (
    <section id="posts-section" className="posts-section">
      <h2>POSTS</h2>
      <div id="posts-list">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>

      <button id="create-post-cancel-button">cancel</button>
    </section>
  );
}
export default Posts;
