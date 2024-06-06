
import React from 'react'

function CalendarHeader({ selectedDate, changeMonth }) {
  return (
    <div className="calendar-controls flex justify-between items-center mb-4">
      <button 
        onClick={() => changeMonth(-1)} 
        className="bg-gray-900 text-white px-4 py-1 rounded text-sm font-bold"
      >
        Anterior
      </button>
      <h1 className="text-lg text-white font-bold">
        {selectedDate.toLocaleString('default', { month: 'long' })} {selectedDate.getFullYear()}
      </h1>
      <button 
        onClick={() => changeMonth(1)} 
        className="bg-gray-900 text-white px-4 py-1 rounded text-sm font-bold"
      >
        Siguiente
      </button>
    </div>
  )
}

export default CalendarHeader
