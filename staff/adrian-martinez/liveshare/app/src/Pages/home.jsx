import { useState, useEffect } from 'react'
import { errors } from "com"
import logic from '../logic'
import Posts from '../components/Posts'
import CreatePost from '../components/CreatePost'

const { ContentError, MatchError } = errors

function Home({ onUserLoggedOut }) {
    const [view, setView] = useState(null);
    const [user, setUser] = useState(null);
    const [refreshStamp, setRefreshStamp] = useState(null);

    useEffect(() => {
        try {
            logic.retrieveUser()
                .then(user => setUser(user))
                .catch(error => {
                    console.error(error.message)

                    let feedback = error.message;

                    if(error instanceof TypeError || error instanceof RangeError || error instanceof ContentError){

                        feedback = `${feedback}, please correct it`;
                    }
                    else if(error instanceof MatchError){

                        feedback = `${feedback}, please verify user`;
                    }
                    else
                        feedback = "Sorry, there was an error, please try again later";

                    alert(feedback);
                })
        } catch (error) {
            console.error(error.message)

                let feedback = error.message;

                if(error instanceof TypeError || error instanceof RangeError || error instanceof ContentError){

                    feedback = `${feedback}, please correct it`;
                 }
                else if(error instanceof MatchError){

                    feedback = `${feedback}, please verify user`;
                }
                else
                   feedback = "Sorry, there was an error, please try again later";

                    alert(feedback);
        }
    }, [])

    const handleLogout = () => {
        logic.logoutUser()

        onUserLoggedOut()
    }

    const handleCreatePostClick = () => setView('create-post')

    const handleCreatePostCancelClick = () => setView(null)

    const handlePostCreated = () => {
        
        setRefreshStamp(Date.now())
        setView(null)
    }

    console.log('Home render')

    return <>
        <header className="bg-gray-100 border-solid border-4 border-black font-bold text-xl m-1">
        {!user && <p>Loading...</p>}
        {user && <h1 className="p-3">Hello, {user.name}!</h1>}

            <nav id="top-menu">
                <button className="button" id="chat-button">💬</button>
                <button className="button" id="logout-button" onClick={handleLogout}>🚪</button>
            </nav>
        </header>

        <main className="main">
             <Posts refreshStamp={ refreshStamp }/>

            {view === 'create-post' && <CreatePost onCancelClick={handleCreatePostCancelClick} onPostCreated={handlePostCreated} />}
        </main>

        <footer className="footer">
            <button className="button">🏚️</button>
            <button className="button" onClick={handleCreatePostClick}>➕</button>
        </footer>
    </>
}

export default Home