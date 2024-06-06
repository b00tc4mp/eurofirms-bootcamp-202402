import React from 'react';
import Button from './Button';

const CalendarCell = ({ day, event, user, setEventDetails, openModal, handleDeleteEvent, handleSelectEvent, handleDeselectEvent }) => (
  <div className="calendar-cell day-cell relative p-2 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 bg-gray-700">
    <div className="day-box bg-gray-600 p-1 rounded-lg shadow">
      <span className="font-bold text-sm text-white">{day}</span>
      {event ? (
        <div
          className={`event mt-1 p-1 rounded cursor-pointer relative ${event.subscribers.includes(user?.id) ? 'bg-pink-500' : 'bg-gray-500'}`}
          onClick={() => setEventDetails(event)}
          onMouseEnter={() => {
            document.getElementById(`admin-buttons-${day}`).style.display = 'flex';
            if (user && user.role === 'admin' && event.subscribers.length > 0) {
              document.getElementById(`subscriber-info-${day}`).style.display = 'block';
            }
          }}
          onMouseLeave={() => {
            document.getElementById(`admin-buttons-${day}`).style.display = 'none';
            if (user && user.role === 'admin' && event.subscribers.length > 0) {
              document.getElementById(`subscriber-info-${day}`).style.display = 'none';
            }
          }}
        >
          <span className="text-xs font-bold text-white">{event.title}</span>
          <p className="text-xs text-white">{event.description}</p>
          <div id={`admin-buttons-${day}`} className="admin-buttons absolute top-0 right-0 mt-1 flex justify-between space-x-1" style={{ display: 'none' }}>
            {user && user.role === 'admin' && (
              <>
                <Button
                  onClick={(e) => { e.stopPropagation(); openModal(event); }}
                  className="bg-gray-400 hover:bg-gray-600"
                  text="Editar"
                />
                <Button
                  onClick={(e) => { e.stopPropagation(); handleDeleteEvent(event.id); }}
                  className="bg-red-400 hover:bg-red-600"
                  text="Borrar"
                />
              </>
            )}
            <Button
              onClick={(e) => { e.stopPropagation(); (event.subscribers.includes(user?.id) ? handleDeselectEvent(event.id) : handleSelectEvent(event.id)); }}
              className={event.subscribers.includes(user?.id) ? 'bg-yellow-400 hover:bg-yellow-600' : 'bg-green-400 hover:bg-green-600'}
              text={event.subscribers.includes(user?.id) ? 'Quitar' : 'Seleccionar'}
            />
          </div>
          <div id={`subscriber-info-${day}`} className="subscriber-info absolute bottom-0 left-0 p-1 bg-gray-800 text-white text-xs rounded w-full" style={{ display: 'none' }}>
            Seleccionado por: {event.subscribers.join(', ')}
          </div>
        </div>
      ) : (
        <Button
          onClick={() => openModal({ day })}
          className="bg-blue-500 hover:bg-blue-700 absolute top-0 right-0 m-1"
          text="+"
        />
      )}
    </div>
  </div>
);

export default CalendarCell;
