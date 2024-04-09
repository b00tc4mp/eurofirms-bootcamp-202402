import logic from '../logic'

import Post from './Post'

function Posts() {
    let posts = []

    try {
        posts = logic.retrievePosts()
    } catch (error) {
        console.error(error)

        alert(error.message)
    }

    console.log('Posts render')

    return <section id='posts-section'>
        <h2>Posts</h2>

        <div id='posts-list'>
            {posts.map(post => <Post key={post.id} post={post} />)}
        </div>

    </section>
}
export default Posts