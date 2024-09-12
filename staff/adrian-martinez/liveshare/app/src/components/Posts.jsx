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

    const handleDeletePost = () => {

        refreshScreen();
    }

    const handleUpdatePost = () => {

        refreshScreen();
    }

    console.log("Post render");
    
    return (
        <section id="posts-section">
            <h2 className="p-10 font-semibold text-3xl">Publicaciones recientes</h2>

            <div id="posts-list">
                { posts.map(post => <Post key={ post.id } post={ post } onPostDeleted={handleDeletePost} onPostUpdate={handleUpdatePost}/>)}
            </div>
        </section>
    )
}

export default Posts;