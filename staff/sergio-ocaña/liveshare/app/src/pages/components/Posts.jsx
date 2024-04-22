import Post from "./Post"
import logic from "../../logic"
import { useState, useEffect } from "react"
function Posts({ timeStamp }) {
    const [posts, setPosts] = useState(null)

    const refreshPosts = () => {
        try {
            logic.retrievePosts()
                .then(posts => setPosts(posts.toReversed()))
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        } catch (error) {
            console.error(error)
            alert(error.message)
        }
    }

    useEffect(() => {
        refreshPosts()
    }, [timeStamp])

    return <section id="posts-section">
        <h2>Posts</h2>
        <div id="posts-list">
            {posts ? posts.map((post => <Post autoRefresh={refreshPosts} key={post.id} post={post} />)) : <span>loading posts....</span>}
        </div>
    </section>
}
export default Posts