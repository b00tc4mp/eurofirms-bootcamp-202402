import { useEffect, useState } from "react"

import Post from "./Post"

import logic from "../logic"

function Posts({ refreshStamp }) {

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

    return <section className="flex flex-col gap-6 px-2 py-14">
        {posts.map(post => <Post key={post.id} post={post} onPostDeleted={handleDeletedPost} onPostEdit={handlePostUpdated}
        />)}
    </section>
}

export default Posts