import logic from "../../logic"
import HTag from "./HTags"
import Post from "./Post"
import errors from "../../logic/errors"
import { useState, useEffect } from "react"

const { MatchError, ContentError } = errors

function Posts({ timeStamp }) {
    const [posts, setPosts] = useState(null)

    const refreshPosts = () => {
        try {
            logic.retrievePosts()
                .then(posts => setPosts(posts))
                .catch(error => {
                    console.error(error)

                    let feedback = error.message

                    if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                        feedback = `${feedback},please correct it`

                    else if (error instanceof MatchError)
                        feedback = `${feedback},please verify credentials`

                    else
                        feedback = 'sorry, there was an error, please try again later'

                    alert(feedback)
                })


        } catch (error) {
            console.error(error)

            let feedback = error.message

            if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                feedback = `${feedback},please correct it`
            else
                feedback = 'sorry, there was an error, please try again later'

            alert(feedback)
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
                <Post
                    key={post.id}
                    post={post}
                    onHandleDeletePost={handleDeletePost}
                    onHandleUpdatePost={handleUpdatePost}
                    onHandleCancel={handleCancelPost} />
            )) :
                <span>loading posts....</span>}
        </div>
    </section>
}
export default Posts