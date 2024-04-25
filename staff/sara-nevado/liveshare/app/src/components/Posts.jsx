import { useState, useEffect } from 'react'
import logic from '../logic'
import Post from './Post'

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

    console.log('Posts render')

    return <section className="flex flex-col gap-6 px-2 py-14">
        {posts.map(post => <Post key={post.id} post={post} onPostDeleted={handleDeletedPost}/>)}
    </section>
}

export default Posts