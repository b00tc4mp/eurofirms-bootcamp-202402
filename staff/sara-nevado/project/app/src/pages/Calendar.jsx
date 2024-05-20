import React, { useState, useEffect } from 'react'
import logic from '../logic'

function CalendarApp() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [events, setEvents] = useState([])
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [selectedUserId, setSelectedUserId] = useState(null)

  useEffect(() => {
    retrieveEvents(selectedDate)
  }, [selectedDate])

  //calendario
  const daysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    return new Date(year, month + 1, 0).getDate()
  }

  const monthDays = () => {
    const days = []
    const daysCount = daysInMonth(selectedDate)
    const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay()

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-cell empty-cell"></div>)
    }

    for (let day = 1; day <= daysCount; day++) {
      const eventForDay = events.find((event) => event.day === day)
      days.push(
        <div key={day} className="calendar-cell day-cell relative">
          <div className="day-box bg-pink-200 border border-gray-400 p-2 rounded">
            <span>{day}</span>
            {eventForDay && (
              <div
                className={`event bg-${selectedEvent === eventForDay ? 'green' : 'blue'}-200 p-1 mt-1 rounded`}
                onClick={() => selectEvent(eventForDay, selectedUserId)}
              >
                {eventForDay.text}
              </div>
            )}
            {isAdmin() && (
              <div className="admin-buttons mt-1">
                <button
                  onClick={() => createEvent(day)}
                  className="create-button bg-gray-100 hover:bg-yellow-400 text-gray-800 font-bold py-0.5 px-0.5 rounded-sm mr-2 text-xxs sm:text-xs shadow-sm"
                >
                  Create
                </button>

                <button
                  onClick={() => editEvent(day, eventForDay)}
                  className="edit-button bg-gray-200 hover:bg-green-400 text-gray-800 font-bold py-0.5 px-0.5 rounded-sm mr-1 text-xxs sm:text-xs shadow-sm"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteEvent(day)}
                  className="delete-button bg-white hover:bg-red-700 text-gray-800 font-bold py-0.5 px-0.5 rounded-sm text-xxs sm:text-xs shadow-sm"
                >
                  Delete
                </button>

                {selectedUserId && selectedEvent === eventForDay && (
                  <button
                    onClick={() => deselectEvent()}
                    className={`select-button selected bg-${selectedEvent === eventForDay ? 'green' : 'blue'}-500 text-white font-bold py-0.5 px-1 rounded-sm mt-1`}
                  >
                    Selected
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )
    }

    return days
  }

  const changeMonth = (value) => {
    setSelectedDate((prevDate) => {
      const newDate = new Date(prevDate)
      newDate.setMonth(newDate.getMonth() + value)
      return newDate
    })
  }

  const createEvent = async (day) => {
    const eventText = prompt(`Create event for day ${day}:`)
    if (eventText) {
      await logic.createEvent(selectedDate, day, eventText)
      const updatedEvents = await retrieveEvents(selectedDate)
      setEvents(updatedEvents)
    }
  }
  

  const editEvent = async (day, eventForDay) => {
    const eventText = prompt(`Edit event for day ${day}:`, eventForDay ? eventForDay.text : '')
    if (eventText) {
      await editEvent(selectedDate, day, eventText)
      retrieveEvents(selectedDate)
    }
  }

  const deleteEvent = async (day) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete the event for day ${day}?`)
    if (confirmDelete) {
      await deleteEvent(selectedDate, day)
      retrieveEvents(selectedDate)
    }
  }

  const selectEvent = (event, userId) => {
    setSelectedEvent(event === selectedEvent ? null : event)
    setSelectedUserId(userId)
  }

  const deselectEvent = () => {
    setSelectedEvent(null)
    setSelectedUserId(null)
  }

  const retrieveEvents = async (date) => {
    const events = await retrieveEvent(date)
    setEvents(events)
  }

  const isAdmin = () => {
    return true // pendiente de modificar
  }

  return (
    <div className="calendar-container">
      <div className="calendar bg-gray-100 text-gray-800 p-2 sm:p-4">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-2 sm:mb-4">
          <button
            onClick={() => changeMonth(-1)}
            className="prev-month-button bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-1 px-1 sm:py-1.5 sm:px-2 rounded-sm mr-1"
          >
            Prev
          </button>
          <h2 className="text-sm sm:text-lg font-bold">
            {selectedDate.toLocaleString('default', { month: 'long' })} {selectedDate.getFullYear()}
          </h2>
          <button
            onClick={() => changeMonth(1)}
            className="next-month-button bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-1 px-1 sm:py-1.5 sm:px-2 rounded-sm mr-1"
          >
            Next
          </button>
        </div>
        <div className="calendar-grid grid grid-cols-7 gap-1 sm:gap-2 border border-gray-400">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
            <div key={index} className="calendar-cell day-cell text-center border-b border-gray-400">
              <span>{day}</span>
            </div>
          ))}
          {monthDays()}
        </div>
      </div>
    </div>
  )
}

export default CalendarApp
