import React from 'react';
import Button from './Button';
import logic from '../logic';

const CalendarCell = ({
  day,
  event,
  user,
  setEventDetails,
  openModal,
  handleDeleteEvent,
  handleSelectEvent,
  handleDeselectEvent
}) => {
  const isAdmin = user?.role === 'admin';
  const isEventSelect = event?.subscribers.includes(logic.getLoggedInUserId())

  return (
    <div className="calendar-cell day-cell relative p-2 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 bg-gray-700">
      <div className="day-box bg-gray-600 p-1 rounded-lg shadow">
        <span className="font-bold text-sm text-white">{day}</span>
        {event ? (
          <div
            className={`event mt-1 p-1 rounded cursor-pointer relative bg-blue-600 text-white shadow-lg`}
            onClick={() => setEventDetails(event)}
          >
            <span className="text-sm font-bold">{event.title}</span>
            {!isAdmin && (
              <>
                {!isEventSelect && (
                  <Button
                    onClick={(e) => { e.stopPropagation(); handleSelectEvent(event.id); }}
                    className="bg-green-400 hover:bg-green-600 text-xs p-0.5 h-4"
                    text="select"
                  />
                )}
                {isEventSelect&& (
                  <Button
                    onClick={(e) => { e.stopPropagation(); handleDeselectEvent(event.id); }}
                    className="bg-yellow-400 hover:bg-yellow-600 text-xs p-0.5 h-4"
                    text="deselect"
                  />
                )}
              </>
            )}
            {isAdmin && (
              <div className="admin-buttons absolute bottom-0 left-0 mb-1 space-x-1">
                <Button
                  onClick={(e) => { e.stopPropagation(); handleDeleteEvent(event.id); }}
                  className="bg-red-400 hover:bg-red-600 text-xs p-0.5 h-4"
                  text="Remove"
                />
                <Button
                  onClick={(e) => { e.stopPropagation(); openModal(event); }}
                  className="bg-gray-400 hover:bg-gray-600 text-xs p-0.5 h-4"
                  text="Edit"
                />
              </div>
            )}
          </div>
        ) : (
          isAdmin && (
            <Button
              onClick={() => openModal({ day })}
              className="bg-blue-500 hover:bg-blue-700 absolute top-0 right-0 m-1"
              text="+"
            />
          )
        )}
      </div>
    </div>
  );
};

export default CalendarCell;



