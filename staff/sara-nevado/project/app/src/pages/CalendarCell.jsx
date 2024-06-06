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
  const isEventSelect = event?.subscribers.includes(logic.getLoggedInUserId());

  const handleSelect = (e) => {
    e.stopPropagation();
    handleSelectEvent(event.id);
  };

  const handleDeselect = (e) => {
    e.stopPropagation();
    handleDeselectEvent(event.id);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    handleDeleteEvent(event.id);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    openModal(event);
  };

  const handleAddEvent = () => {
    openModal({ day });
  };

  return (
    <div className="calendar-cell relative p-1 border border-blue-400 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 bg-gray-700 flex flex-col">
      <div className="day-box bg-gray-800 p-1 rounded-lg shadow-inner flex justify-between items-center mb-1">
        <span className="font-bold text-xs text-white">{day}</span>
        {isAdmin && !event && (
          <Button
            onClick={handleAddEvent}
            className="bg-blue-500 hover:bg-blue-700 text-xs py-0.5 px-1 rounded shadow"
            text="+"
          />
        )}
      </div>
      {event && (
        <div
          className="event p-1 rounded cursor-pointer relative bg-gray-600 text-white shadow-inner flex flex-col space-y-1"
          onClick={() => setEventDetails(event)}
        >
          <span className="text-xs font-bold">{event.title}</span>
          <div className="flex justify-between items-center">
            {!isAdmin && (
              isEventSelect ? (
                <Button
                  onClick={handleDeselect}
                  className="bg-yellow-400 hover:bg-yellow-600 text-xs py-0.5 px-1 rounded shadow"
                  text="✖️"
                />
              ) : (
                <Button
                  onClick={handleSelect}
                  className="bg-purple-500 hover:bg-purple-700 text-xs py-0.5 px-1 rounded shadow"
                  text="✔️"
                />
              )
            )}
            {isAdmin && (
              <div className="flex space-x-1">
                <Button
                  onClick={handleDelete}
                  className="bg-gray-400 bg-opacity-75 hover:bg-gray-600 hover:bg-opacity-75 text-xs py-0.5 px-1 rounded shadow"
                  text="❌"
                />
                <Button
                  onClick={handleEdit}
                  className="bg-gray-400 bg-opacity-75 hover:bg-gray-600 hover:bg-opacity-75 text-xs py-0.5 px-1 rounded shadow"
                  text="✏️"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarCell;



