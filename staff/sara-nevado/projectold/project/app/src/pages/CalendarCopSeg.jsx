import React, { useState, useEffect, useCallback, useMemo } from 'react'
import logic from '../logic'
import EventModal from './EventModal'


function CalendarApp() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [events, setEvents] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentEvent, setCurrentEvent] = useState(null)
  const [user, setUser] = useState(null)
  const [eventDetails, setEventDetails] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const user = await logic.retrieveUser()
        setUser(user)
        await retrieveEvents(selectedDate)
      } catch (error) {
        console.error('Error fetching data:', error)
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
        <div key={day} className="calendar-cell day-cell relative p-2 border border-gray-600 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 bg-gray-800">
          <div className="day-box bg-gray-900 p-1 rounded-lg shadow">
            <span className="font-bold text-sm text-white">{day}</span>
            {eventForDay && (
              <div
                className="event mt-1 bg-pink-600 p-1 rounded cursor-pointer relative"
                onClick={() => setEventDetails(eventForDay)}
                onMouseEnter={() => document.getElementById(`admin-buttons-${day}`).style.display = 'flex'}
                onMouseLeave={() => document.getElementById(`admin-buttons-${day}`).style.display = 'none'}
              >
                <span className="text-xs text-white">{eventForDay.title}</span>
                <p className="text-xs text-white">{eventForDay.description}</p>
                <div id={`admin-buttons-${day}`} className="admin-buttons absolute top-0 right-0 mt-1 flex justify-between" style={{display: 'none'}}>
                  {user && user.role === 'admin' && (
                    <>
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal(eventForDay) }}
                        className="edit-button bg-gray-600 hover:bg-gray-800 text-white font-bold py-1 px-2 rounded shadow text-xs"
                      >
                        Editar
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); handleDeleteEvent(eventForDay.id) }}
                        className="delete-button bg-red-600 hover:bg-red-800 text-white font-bold py-1 px-2 rounded shadow text-xs"
                      >
                        Borrar
                      </button>
                    </>
                  )}
                  <button
                    onClick={(e) => { e.stopPropagation(); (eventForDay.isSelected ? handleDeselectEvent(eventForDay.id) : handleSelectEvent(eventForDay.id)) }}
                    className={`select-button ${eventForDay.isSelected ? 'bg-blue-600 hover:bg-blue-800' : 'bg-green-600 hover:bg-green-800'} text-white font-bold py-1 px-2 rounded shadow text-xs`}
                  >
                    {eventForDay.isSelected ? 'Quitar' : 'Seleccionar'}
                  </button>
                </div>
              </div>
            )}
            {!eventForDay && (
              <button
                onClick={() => openModal({ day })}
                className="create-button bg-pink-500 hover:bg-pink-900 text-white font-bold py-1 px-2 rounded shadow text-xs absolute top-0 right-0"
                style={{ margin: '5px' }}
              >
                +
              </button>
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
      await logic.selectedEvent(eventId)  
      await retrieveEvents(selectedDate)
    } catch (error) {
      console.error('Error selecting event:', error)
    }
  }

  const handleDeselectEvent = async (eventId) => {
    try {
      await logic.deselectedEvent(eventId)
      await retrieveEvents(selectedDate)
    } catch (error) {
      console.error('Error deselecting event:', error)
    }
  }

  return (
    <div className="calendar-app p-4 max-w-full mx-auto">
      <div className="calendar-container border border-gray-600 rounded-lg shadow p-4 overflow-x-auto bg-gray-900">
        <div className="calendar-controls flex justify-between items-center mb-4">
          <button onClick={() => changeMonth(-1)} className="bg-gray-700 text-white px-3 py-1 rounded text-sm">
            Anterior
          </button>
          <h1 className="text-lg text-white">
            {selectedDate.toLocaleString('default', { month: 'long' })} {selectedDate.getFullYear()}
          </h1>
          <button onClick={() => changeMonth(1)} className="bg-gray-700 text-white px-3 py-1 rounded text-sm">
            Siguiente
          </button>
        </div>
        <div className="calendar-grid grid grid-cols-7 gap-1">
          {monthDays}
        </div>
      </div>
      <EventModal isOpen={isModalOpen} onClose={closeModal} onSave={saveEvent} event={currentEvent} />
      {eventDetails && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-lg mb-3 font-bold text-pink-600">Detalles del Evento</h2>
            <p><strong>Tipo:</strong> {eventDetails.type}</p>
            <p><strong>Título:</strong> {eventDetails.title}</p>
            <p><strong>Fecha:</strong> {new Date(eventDetails.date).toLocaleString()}</p>
            <p><strong>Duración:</strong> {eventDetails.duration} horas</p>
            <p><strong>Dirección:</strong> {eventDetails.address}</p>
            <p><strong>Descripción:</strong> {eventDetails.description}</p>
            <div className="flex justify-end mt-2">
              <button onClick={closeEventDetails} className="px-3 py-1 bg-gray-700 text-white rounded shadow hover:bg-gray-600">
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CalendarApp
