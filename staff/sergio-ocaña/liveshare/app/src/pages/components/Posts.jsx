import Post from "./Post"
function Posts({ postToRender }) {
    const posts = postToRender

    return <section id="posts-section">
        <h2>Posts</h2>
        <div id="posts-list">
            {posts.map((post => <Post key={post.id} post={post} />

            ))}
        </div>
    </section>
}
export default Posts