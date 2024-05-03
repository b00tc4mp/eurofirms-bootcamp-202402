import { useState, useEffect } from "react";
import logic from "../logic";
import Post from "./Post";
import { errors } from 'com'

const { MatchError, ContentError } = errors

function Posts({ refreshStamp }) {
    console.log('refreshStamp', refreshStamp)

    const [posts, setPosts] = useState([])

    const refreshPosts = (() => {
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
    })

    useEffect(() => {
        refreshPosts()
    }, [refreshStamp])

    const handlePostRemoved = () => refreshPosts()

    const handlePostEdit = () => refreshPosts()

    console.log('Post render')

    return <section className="flex flex-col gap-6 px-2 py-14">


        {posts.map(post => <Post key={post.id} post={post} onPostRemoved={handlePostRemoved} onPostEdit={handlePostEdit}
        />)}
    </section>
}

export default Posts