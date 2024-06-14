import { useState } from 'react'


import Posts from '../components/Posts'
import CreatePost from '../components/CreatePost'
import CreateComment from '../components/CreateComment'


function Gallery({ userRole }) {
    const [view, setView] = useState(null)
    const [refreshStamp, setRefreshStamp] = useState(null)



    const handleCreatePostClick = () => setView('create-post')

    const handleCreatePostCancelClick = () => setView(null)

    const handleCreateCommentClick = () => setView('create-comment')

    const handleCreateCommentCancelClick = () => setView(null)


    const handlePostCreated = () => {
        setView(null)
        setRefreshStamp(Date.now())
    }

    console.log('Gallery render')

    return <>

        <main className="main">
            <h1 className=" mt-10 font-bold text-2xl text-center  text-green-900 ">GALERÍA</h1>

            {userRole === "admin" && (
                <button className="px-3" onClick={handleCreatePostClick}>➕</button>
            )}
            <Posts userRole={userRole} refreshStamp={refreshStamp} />
            {view === 'create-comment' && <CreateComment onCancelClick={handleCreateCommentCancelClick} onCommentCreated={handleCreateCommentClick} />}

            {view === 'create-post' && <CreatePost onCancelClick={handleCreatePostCancelClick} onPostCreated={handlePostCreated} />}


        </main>


    </>
}

export default Gallery