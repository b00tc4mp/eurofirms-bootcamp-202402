import { useState, useEffect } from 'react'
import { errors } from 'com'
import { useNavigate } from 'react-router-dom'
import logic from '../logic'

import Posts from '../components/Posts'
import CreatePost from '../components/CreatePost'

const { ContentError, MatchError } = errors

function Gallery({ userRole }) {
    const [view, setView] = useState(null)
    const [refreshStamp, setRefreshStamp] = useState(null)
    
    const navigate = useNavigate()
    
    const handleHomeClick = () => navigate('/')

    const handleCreatePostClick = () => setView('create-post')

    const handleCreatePostCancelClick = () => setView(null)

    const handlePostCreated = () => {
        setView(null)
        setRefreshStamp(Date.now())
    }

    console.log('Gallery render')

    return <>

        <main className="main">
            <Posts userRole={userRole} refreshStamp={refreshStamp} />

            {view === 'create-post' && <CreatePost onCancelClick={handleCreatePostCancelClick} onPostCreated={handlePostCreated} />}
            <button className="px-3" onClick={handleHomeClick}>🏚️</button>
            <button className="px-3" onClick={handleCreatePostClick}>➕</button>
        </main>


    </>
}

export default Gallery