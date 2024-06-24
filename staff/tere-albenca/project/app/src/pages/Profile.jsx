import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import logic from '../logic'
import { errors } from 'com'
import CreateWork from '../components/CreateWork'
import UserWorks from '../components/UserWorks'
import Header from '../components/Header'
import Footer from '../components/Footer'

const { ContentError, TypeError, RangeError } = errors

function Profile({ onUserLoggedOut, onHomeClick, onProfileClick, onNewTeacherClick }) {
    const { targetUserId } = useParams()
    const [view, setView] = useState(null)
    const [refreshStamp, setRefreshStamp] = useState(null)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const fetchUserAndWorks = async () => {
            try {
                const user = await logic.retrieveUser()
                setUser(user)
            } catch (error) {
                console.error(error)
                let feedback = error.message
                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) {
                    feedback = `${feedback}, please correct it`
                } else {
                    feedback = 'Sorry, there was an error, please try again later'
                }
                alert(feedback)
            }
        }

        fetchUserAndWorks()
    }, [])

    const handleLogout = () => {
        logic.logoutUser()
        onUserLoggedOut()
    }

    const handleCreateClick = () => setView('createWork')

    const handleCancelClick = () => setView(null)

    const handleCreatedWork = () => {
        setView(null)
        setRefreshStamp(Date.now())
    }

    const handleHomeClick = (event) => {
        event.preventDefault()
        onHomeClick()
    }

    const handleProfileClick = event => {
        event.preventDefault()

        onProfileClick(user.id)
    }

    return (
        <div className='m-0 p-0 max-w-[100%]'>
            <Header
                onHomeClick={handleHomeClick}
                onCreateClick={handleCreateClick}
                onProfileClick={handleProfileClick}
                onNewTeacherClick={onNewTeacherClick}
                user={user}
            />
            <main className='w-[100%] bg-[whitesmoke]'>
                <UserWorks targetUserId={targetUserId} refreshStamp={refreshStamp} user={user} isProfilePage={true} onProfileClick={() => { }} /> { }
                {view === 'createWork' && <CreateWork onWorkCreated={handleCreatedWork} onCancelClick={handleCancelClick} />}
            </main>

            <Footer onLogout={handleLogout} />

        </div>
    )
}

export default Profile

