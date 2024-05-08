import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, useParams } from 'react-router-dom'
import { errors } from 'com'
import Button from '../components/Button'
import logic from '../logic'

function Events() {
    const [events, setEvents] = useState(null)

    const navigate = useNavigate()
    let params = useParams()
    useEffect(() => {
        try {
            logic.retrieveEvents()
                .then(events => setEvents(events))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
            alert(error.message)
        }
    }, [])

    const handleEventClick = eventId => {
        navigate(`/event/${eventId}`)
    }
    return <>
        <Routes>
            <Route path='/event' >
                <Route path=':eventId' element={<Event />} />
            </Route>
        </Routes>
        <h2>Upcoming Events</h2>
        {events ? events.map(event => {
            return <section key={event.id} className=' border-black border-2'>
                <h3><a onClick={handleEventClick(event.id)}>{event.name}</a></h3>
                <p>{event.description}</p>

            </section>

        }
        ) : <span>Loading</span>}

    </>

}

export default Events
