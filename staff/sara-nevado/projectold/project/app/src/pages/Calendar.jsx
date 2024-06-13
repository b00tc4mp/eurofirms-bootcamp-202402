// src/components/Calendar.jsx
import React, { useState, useEffect, useCallback, useMemo } from 'react'
import logic from '../logic'
import EventModal from './EventModal'
import CalendarHeader from './CalendarHeader'
import CalendarGrid from './CalendarGrid'
import EventDetails from './EventDetails'
import Button from './Button'

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [events, setEvents] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentEvent, setCurrentEvent] = useState(null)
  const [user, setUser] = useState(null)
  const [eventDetails, setEventDetails] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const user = await logic.retrieveUser()
        setUser(user)
        await retrieveEvents(selectedDate)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [selectedDate])

  const daysInMonth = useCallback((date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    return new Date(year, month + 1, 0).getDate()
  }, [])

  const monthDays = useMemo(() => {
    const days = []
    const daysCount = daysInMonth(selectedDate)
    const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay()

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-cell empty-cell"></div>)
    }

    for (let day = 1; day <= daysCount; day++) {
      const eventForDay = events.find((event) => new Date(event.date).getDate() === day)

      days.push(
        <div key={day} className="calendar-cell day-cell relative p-2 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 bg-gray-700">
          <div className="day-box bg-gray-600 p-1 rounded-lg shadow">
            <span className="font-bold text-sm text-white">{day}</span>
            {eventForDay && (
              <div
                className={`event mt-1 p-1 rounded cursor-pointer relative ${eventForDay.subscribers.includes(user?.id) ? 'bg-pink-500' : 'bg-gray-500'}`}
                onClick={() => setEventDetails(eventForDay)}
                onMouseEnter={() => {
                  document.getElementById(`admin-buttons-${day}`).style.display = 'flex'
                  if (user && user.role === 'admin' && eventForDay.subscribers.length > 0) {
                    document.getElementById(`subscriber-info-${day}`).style.display = 'block'
                  }
                }}
                onMouseLeave={() => {
                  document.getElementById(`admin-buttons-${day}`).style.display = 'none'
                  if (user && user.role === 'admin' && eventForDay.subscribers.length > 0) {
                    document.getElementById(`subscriber-info-${day}`).style.display = 'none'
                  }
                }}
              >
                <span className="text-xs font-bold text-white">{eventForDay.title}</span>
                <p className="text-xs text-white">{eventForDay.description}</p>
                <div id={`admin-buttons-${day}`} className="admin-buttons absolute top-0 right-0 mt-1 flex justify-between space-x-1" style={{display: 'none'}}>
                  {user && user.role === 'admin' && (
                    <>
                      <Button
                        onClick={(e) => { e.stopPropagation(); openModal(eventForDay) }}
                        className="bg-gray-400 hover:bg-gray-600"
                        text="Editar"
                      />
                      <Button
                        onClick={(e) => { e.stopPropagation(); handleDeleteEvent(eventForDay.id) }}
                        className="bg-red-400 hover:bg-red-600"
                        text="Borrar"
                      />
                    </>
                  )}
                  <Button
                    onClick={(e) => { e.stopPropagation(); (eventForDay.subscribers.includes(user?.id) ? handleDeselectEvent(eventForDay.id) : handleSelectEvent(eventForDay.id)) }}
                    className={eventForDay.subscribers.includes(user?.id) ? 'bg-yellow-400 hover:bg-yellow-600' : 'bg-green-400 hover:bg-green-600'}
                    text={eventForDay.subscribers.includes(user?.id) ? 'Quitar' : 'Seleccionar'}
                  />
                </div>
                <div id={`subscriber-info-${day}`} className="subscriber-info absolute bottom-0 left-0 p-1 bg-gray-800 text-white text-xs rounded w-full" style={{display: 'none'}}>
                  Seleccionado por: {eventForDay.subscribers.map(subscriberId => subscriberId).join(', ')}
                </div>
              </div>
            )}
            {!eventForDay && (
              <Button
                onClick={() => openModal({ day })}
                className="bg-blue-500 hover:bg-blue-700 absolute top-0 right-0 m-1"
                text="+"
              />
            )}
          </div>
        </div>
      )
    }

    return days
  }, [daysInMonth, selectedDate, events, user])

  const changeMonth = (value) => {
    setSelectedDate((prevDate) => {
      const newDate = new Date(prevDate)
      newDate.setMonth(newDate.getMonth() + value)
      return newDate
    })
  }

  const openModal = (event) => {
    setCurrentEvent(event)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setCurrentEvent(null)
    setIsModalOpen(false)
  }

  const closeEventDetails = () => {
    setEventDetails(null)
  }

  const saveEvent = async (eventData) => {
    if (!user) {
      console.error('User not authenticated')
      return
    }

    try {
      const formattedDate = eventData.date
        ? new Date(eventData.date).toISOString().substring(0, 16)
        : new Date(selectedDate.getFullYear(), selectedDate.getMonth(), currentEvent.day).toISOString().substring(0, 16)
      const duration = Number(eventData.duration)

      if (isNaN(duration)) {
        throw new TypeError('duration must be a number')
      }

      if (currentEvent && currentEvent.id) {
        await logic.editEvent(currentEvent.id, {
          userId: user.id,
          type: eventData.type,
          title: eventData.title,
          date: formattedDate,
          duration: duration,
          address: eventData.address,
          description: eventData.description
        })
      } else {
        await logic.createEvent({
          userId: user.id,
          type: eventData.type,
          title: eventData.title,
          date: formattedDate,
          duration: duration,
          address: eventData.address,
          description: eventData.description
        })
      }
      await retrieveEvents(selectedDate)
      closeModal()
    } catch (error) {
      console.error('Error saving event:', error)
    }
  }

  const retrieveEvents = async (date) => {
    try {
      const month = date.getMonth() + 1
      const year = date.getFullYear()
      const events = await logic.retrieveEvents(month, year)
      setEvents(events)
    } catch (error) {
      console.error('Error retrieving events:', error)
    }
  }

  const deleteEvent = async (eventId) => {
    try {
      await logic.deleteEvent(eventId)
      await retrieveEvents(selectedDate)
    } catch (error) {
      console.error('Error deleting event:', error)
    }
  }

  const handleDeleteEvent = (eventId) => {
    if (window.confirm('¿Estás seguro?')) {
      deleteEvent(eventId)
    }
  }

  const handleSelectEvent = async (eventId) => {
    try {
      await logic.selectedEvent(eventId, user.name)
      const updatedEvents = events.map(event => 
        event.id === eventId ? { ...event, subscribers: [...event.subscribers, user.id] } : event
      )
      setEvents(updatedEvents)
    } catch (error) {
      console.error('Error selecting event:', error)
    }
  }

  const handleDeselectEvent = async (eventId) => {
    try {
      await logic.deselectedEvent(eventId)
      const updatedEvents = events.map(event => 
        event.id === eventId ? { ...event, subscribers: event.subscribers.filter(subscriber => subscriber !== user.id) } : event
      )
      setEvents(updatedEvents)
    } catch (error) {
      console.error('Error deselecting event:', error)
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="calendar-app p-4 max-w-full mx-auto">
      <div className="calendar-container border border-gray-400 rounded-lg shadow p-4 overflow-x-auto bg-gray-800">
        <CalendarHeader selectedDate={selectedDate} changeMonth={changeMonth} />
        <CalendarGrid monthDays={monthDays} />
      </div>
      <EventModal isOpen={isModalOpen} onClose={closeModal} onSave={saveEvent} event={currentEvent} />
      {eventDetails && <EventDetails eventDetails={eventDetails} user={user} closeEventDetails={closeEventDetails} />}
    </div>
  )
}

export default Calendar






