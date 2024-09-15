import { useEffect, useState } from "react"
import logic from "../logic"
import Post from "./Post"
import { errors } from 'com'

const { ContentError, MatchError } = errors

function Posts({ refreshPosts }) {
    const [posts, setPosts] = useState(null)
    const [error, setError] = useState(null)//error handler for loading post

    const errorHandler = error => {
        console.error(error)

        let feedback = error.message

        if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
            feedback = `${feedback}, please use valid data`
        else if (error instanceof MatchError)
            feedback = `${feedback}, please try with a registered user`
        else
            feedback = 'sorry, there was an error, please try again later'

        setError({ message: feedback, isError: true })
    }

    useEffect(() => {
        handleRefreshPosts()
    }, [refreshPosts])


    const handleRefreshPosts = () => {
        try {
            logic.retrievePosts()
                .then(postsList => {
                    setPosts(postsList)
                })
                .catch(error => errorHandler(error))

        } catch (error) {
            errorHandler(error)
        }
    }


    const handleUpdatePost = () => handleRefreshPosts()

    const handleDeletePost = () => handleRefreshPosts()

    return <section id="posts-section" className=" flex flex-col gap-6 px-2 py-14">
        <h2>Posts</h2>
        <div id="posts-list">
            {posts ? posts.map((post => <Post key={post.id} post={post} onDeletePost={handleDeletePost} onUpdatePost={handleUpdatePost} />)) : <span>Loading...</span>}
        </div>
        {error?.isError && <span className="text-red-500">{error.message}</span>}
    </section>
}

export default Posts