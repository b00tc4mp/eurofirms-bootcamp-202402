import logic from '../logic'
import { useState, useEffect } from 'react'
import { errors } from 'com'
import CreateWork from '../components/CreateWork'
import Works from '../components/Works'
import Header from '../components/Header'
import Footer from '../components/Footer'

const { ContentError, TypeError, RangeError } = errors

function Home({ onUserLoggedOut, onHomeClick, onProfileClick, onUserProfileClick }) {
  const [view, setView] = useState(null)
  const [refreshStamp, setRefreshStamp] = useState(null)
  const [user, setUser] = useState(null)
  const [works, setWorks] = useState(null)

  useEffect(() => {
    const fetchUserAndWorks = async () => {
      try {
        const user = await logic.retrieveUser()
        setUser(user)

        const works = await logic.retrieveWorks()
        setWorks(works)
      } catch (error) {
        console.error(error)
        let feedback = error.message
        if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) {
          feedback = `${feedback}, please correct it`
        } else if (error instanceof MatchError) {
          feedback = `${feedback}, please verify credentials`
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

  const handleCreateClick = () => setView('createWork');

  const handleCancelClick = () => setView(null);

  const handleCreatedWork = () => {
    setView(null);
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

  const handleProfileUserClick = (userId) => {
    onUserProfileClick(userId)
  }

  return (
    <div className='m-0 p-0 max-w-[100%]'>
      <Header
        onHomeClick={handleHomeClick} onCreateClick={handleCreateClick} onProfileClick={handleProfileClick}
      />

      <main className='w-[100%] bg-[lightgray]'>
        <Works user={user} refreshStamp={refreshStamp} onUserProfileClick={(targetUserId) => handleProfileUserClick(targetUserId)} />

        {view === 'createWork' && <CreateWork onWorkCreated={handleCreatedWork} onCancelClick={handleCancelClick} />}
      </main>

      <Footer onLogout={handleLogout} />

    </div>
  )
}

export default Home
