import logic from "../logic"
import Post from "./Post"
function Posts() {
    let posts = null

    try {
        posts = logic.retrievePosts()

    } catch (error) {
        console.error(error)

        alert(error.message)
    }

    return <section id="posts-section" className="posts-section">
        <h2>Posts</h2>
        <div id="posts-list">
            {posts.map((post => <Post post={post} />))}
        </div>
    </section>
}

export default Posts