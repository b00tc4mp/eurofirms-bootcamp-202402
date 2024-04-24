import { useEffect, useState } from "react"
import logic from "../logic"
import Post from "./Post"
function Posts({ refreshPosts }) {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        handleRefreshPosts()
    }, [refreshPosts])


    const handleRefreshPosts = () => {
        try {
            logic.retrievePosts()
                .then(postsList => {
                    setPosts(postsList)
                })
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })

        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }
    const handleDeletePost = (postId) => {
        const deleteConfirmed = confirm('delete?')

        if (!deleteConfirmed) return

        try {
            logic.deletePost(postId)
                .then(() => handleRefreshPosts())
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    const handleUpdatePost = (postId, text) => {
        const updateConfirmed = confirm('update?')

        if (!updateConfirmed) return

        try {
            logic.updatePost(postId, text)
                .then(() => { handleRefreshPosts() })
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    return <section id="posts-section" className="posts-section">
        <h2>Posts</h2>
        <div id="posts-list">
            {posts ? posts.map((post => <Post key={post.id} post={post} onDeletePost={handleDeletePost} onUpdatePost={handleUpdatePost} />)) : <span>Loading...</span>}
        </div>
    </section>
}

export default Posts