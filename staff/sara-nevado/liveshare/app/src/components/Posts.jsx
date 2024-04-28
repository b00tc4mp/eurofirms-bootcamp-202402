import { useEffect, useState } from "react"
import Post from "./Post"
import logic from "../logic"

function Posts({ refreshStamp }) {
    console.log('refreshStamp', refreshStamp)

const [posts, setPosts] = useState([])

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

    useEffect(() => {
        refreshPosts()
    }, [refreshStamp])

    const handleDeletedPost = () => refreshPosts()

    const handlePostUpdated = () => refreshPosts()

    console.log('Posts render')

    return <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-8">
          {posts.map(post => <Post key={post.id} post={post} onPostDeleted={handleDeletedPost} onPostModified={handlePostUpdated} />)}
          </section>
      
}

export default Posts