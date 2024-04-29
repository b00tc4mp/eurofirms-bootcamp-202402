import { useEffect, useState } from "react"
import logic from "../logic"
import Post from "./Post"
import { errors } from 'com'

const { ContentError, MatchError } = errors

function Posts({ refreshPosts }) {
    const [posts, setPosts] = useState(null)
    const [error, setError] = useState(null)
    const [edit, setEdit] = useState(false)

    const errorHandler = error => {
        console.error(error)

        let feedback = error.message

        if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
            feedback = `${feedback}, please correct it`
        else if (error instanceof MatchError)
            feedback = `${feedback}, please try with a registered user`
        else
            feedback = 'sorry, there was an error, please try again later'

        if (error.message.includes('user id') || error.message.includes('post id')) {
            alert(feedback)

            return
        }

        const isTextError = error.message.includes('text')

        setError({ message: feedback, isTextError })
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
    const handleDeletePost = (postId) => {
        const deleteConfirmed = confirm('delete?')

        if (!deleteConfirmed) return

        try {
            logic.deletePost(postId)
                .then(() => handleRefreshPosts())
                .catch(error => errorHandler(error))
        } catch (error) {
            errorHandler(error)
        }
    }

    const handleUpdatePost = (postId, text) => {
        const updateConfirmed = confirm('update?')

        if (!updateConfirmed) return

        try {
            logic.updatePost(postId, text)
                .then(() => {
                    handleRefreshPosts()

                    // afterUpdatePost()
                })
                .catch(error => errorHandler(error))
        } catch (error) {
            errorHandler(error)
        }
    }

    return <section id="posts-section" className="posts-section">
        <h2>Posts</h2>
        <div id="posts-list">
            {posts ? posts.map((post => <Post edit={edit} error={error} key={post.id} post={post} onDeletePost={handleDeletePost} onUpdatePost={handleUpdatePost} />)) : <span>Loading...</span>}
        </div>
    </section>
}

export default Posts