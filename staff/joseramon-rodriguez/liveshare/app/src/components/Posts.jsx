import { useEffect, useState } from "react"
import logic from "../logic"
import Post from "./Post"
function Posts({ refreshPosts }) {
    const [posts, setPost] = useState(null)

    useEffect(() => {
        try {
            logic.retrievePosts()
                .then(postsList => {
                    setPost(postsList.toReversed())
                })
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })

        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }, [refreshPosts])

    return <section id="posts-section" className="posts-section">
        <h2>Posts</h2>
        <div id="posts-list">
            {posts ? posts.map((post => <Post key={post.id} post={post} />)) : <span>Loading...</span>}
        </div>
    </section>
}

export default Posts