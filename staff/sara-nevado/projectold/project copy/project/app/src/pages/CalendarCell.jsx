import React from 'react';
import Button from './Button';

const CalendarCell = ({ day, event, user, setEventDetails, openModal, handleDeleteEvent, handleSelectEvent, handleDeselectEvent }) => {
  const isEventSelected = event?.subscribers.includes(user?.id);
  const isAdmin = user?.role === 'admin';
  const isEventAvailable = event?.subscribers.length === 0;

  return (
    <div className="calendar-cell day-cell relative p-2 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 bg-gray-700">
      <div className="day-box bg-gray-600 p-1 rounded-lg shadow">
        <span className="font-bold text-sm text-white">{day}</span>
        {event ? (
          <div
            className={`event mt-1 p-1 rounded cursor-pointer relative bg-blue-600 text-white shadow-lg`}
            onClick={() => setEventDetails(event)}
            onMouseEnter={() => {
              if (isAdmin) {
                document.getElementById(`admin-buttons-${day}`).classList.add('flex');
                document.getElementById(`admin-buttons-${day}`).classList.remove('hidden');
              }
              if (user && isAdmin && event.subscribers.length > 0) {
                document.getElementById(`subscriber-info-${day}`).classList.add('block');
                document.getElementById(`subscriber-info-${day}`).classList.remove('hidden');
              }
            }}
            onMouseLeave={() => {
              if (isAdmin) {
                document.getElementById(`admin-buttons-${day}`).classList.add('hidden');
                document.getElementById(`admin-buttons-${day}`).classList.remove('flex');
              }
              if (user && isAdmin && event.subscribers.length > 0) {
                document.getElementById(`subscriber-info-${day}`).classList.add('hidden');
                document.getElementById(`subscriber-info-${day}`).classList.remove('block');
              }
            }}
          >
            <span className="text-sm font-bold">{event.title}</span>
            <div id={`subscriber-info-${day}`} className="subscriber-info absolute bottom-6 left-0 p-1 bg-gray-800 text-white text-xs rounded w-full hidden">
              Seleccionado por: {event.subscribers.join(', ')}
            </div>
            <div id={`admin-buttons-${day}`} className="admin-buttons absolute bottom-0 left-0 mb-1 space-x-1 hidden transition-all duration-300 transform translate-x-2">
              {isAdmin && (
                <>
                  <Button
                    onClick={(e) => { e.stopPropagation(); handleDeleteEvent(event.id); }}
                    className="bg-red-400 hover:bg-red-600 text-xs p-0.5 h-4"
                    text="Quitar"
                  />
                  <Button
                    onClick={(e) => { e.stopPropagation(); openModal(event); }}
                    className="bg-gray-400 hover:bg-gray-600 text-xs p-0.5 h-4"
                    text="Editar"
                  />
                </>
              )}
            </div>
            {!isEventSelected && !isAdmin && isEventAvailable && (
              <Button
                onClick={(e) => { e.stopPropagation(); handleSelectEvent(event.id); }}
                className="bg-green-400 hover:bg-green-600 text-xs p-0.5 h-4"
                text="Reservar"
              />
            )}
            {isEventSelected && !isAdmin && (
              <Button
                onClick={(e) => { e.stopPropagation(); handleDeselectEvent(event.id); }}
                className="bg-yellow-400 hover:bg-yellow-600 text-xs p-0.5 h-4"
                text="Quitar"
              />
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
}

export default CalendarCell;

