import {Component } from 'react'
import logic from '../logic'
import CreatePost from './CreatePost'

class Home extends Component{
    constructor() {
        super()

        const posts = logic.retrievePosts()
        this.state = {view: 'createPost', posts: posts}
    }

    handleCreateClick() {
        this.setState({ view: 'post'})
    }
    render() {
        // const user = logic.retrieverUser()
    

    
return <>
    <section id='posts-section' className='posts-section'>
        <h2>Posts</h2>
        <div id='posts-list'>
            {this.state.posts.map((post => <article key={post.id} className='post'>
                <h3>{post.author.username}</h3>
                <img className='post-image' src={`${post.image}`}></img>
                <p>{post.text}<br /><sup>{post.date}</sup></p>
            </article>))}
        </div>
    </section>
        {this.state.view === 'createPost' && <CreatePost onPostCreated= {()=> this.handleCreateClick()} />}
    </>
        }
}
export default Home