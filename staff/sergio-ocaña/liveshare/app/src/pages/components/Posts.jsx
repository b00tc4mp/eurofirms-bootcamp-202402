import Post from "./Post"
import logic from "../../logic"
import HTag from "./HTags"
import { useState, useEffect } from "react"
function Posts({ timeStamp }) {
    const [posts, setPosts] = useState(null)

    const refreshPosts = () => {
        try {
            logic.retrievePosts()
                .then(posts => setPosts(posts))
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        } catch (error) {
            console.error(error)
            alert(error.message)
        }
    }

    const handleUpdatePost = () => refreshPosts()

    const handleDeletePost = () => refreshPosts()

    const handleCancelPost = () => refreshPosts()

    useEffect(() => {
        refreshPosts()
    }, [timeStamp])

    return <section className="flex flex-col gap-6 px-2 py-14">
        <HTag level={2}>Posts</HTag>
        <div id="posts-list">
            {posts ? posts.map((post =>
                <Post autoRefresh={refreshPosts} key={post.id} post={post} onHandleDeletePost={handleDeletePost} onHandleUpdatePost={handleUpdatePost} onHandleCancel={handleCancelPost} />)) :
                <span>loading posts....</span>}
        </div>
    </section>
}
export default Posts