import logic from "../logic";
import Post from "./Post";
import { useState, useEffect } from "react";

function Posts({ refreshStamp }){

    console.log("refreshStamp", refreshStamp);
    const [posts, setPosts] = useState([]);

    const refreshScreen = () => {

        try{
            logic.retrievePosts()
            .then(posts => setPosts(posts))
            .catch(error => {

                console.error(error);
                alert(error.message);
            })
        }
        catch(error){
    
            console.error(error);
            alert(error.message);
        }
    }
    useEffect(() => {

        refreshScreen();
    }, [refreshStamp])
    
    console.log("Post render");

    const handleDeletePost = () => {

        refreshScreen();
    }
    return (
        <section id="posts-section">
            <h2 className="p-5">Posts</h2>

            <div id="posts-list">
                { posts.map(post => <Post key={ post.id } post={ post } onPostDeleted={handleDeletePost}/>)}
            </div>
        </section>
    )
}

export default Posts;