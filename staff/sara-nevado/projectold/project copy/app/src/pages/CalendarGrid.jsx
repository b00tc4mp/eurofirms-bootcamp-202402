
import React from 'react'

function CalendarGrid({ monthDays }) {
  return (
    <div className="calendar-grid grid grid-cols-7 gap-1">
      {monthDays}
    </div>
  )
}

export default CalendarGrid
