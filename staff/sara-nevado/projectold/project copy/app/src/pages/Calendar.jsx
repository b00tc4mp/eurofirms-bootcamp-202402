import React, { useState, useEffect, useCallback, useMemo } from 'react';
import logic from '../logic';
import EventModal from './EventModal';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';
import EventDetails from './EventDetails';
import Button from './Button';

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [user, setUser] = useState(null);
  const [eventDetails, setEventDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      try {
        const user = await logic.retrieveUser();
        setUser(user);
        const eventsFromServer = await retrieveEvents(selectedDate);
        setEvents(eventsFromServer);
        localStorage.setItem('events', JSON.stringify(eventsFromServer)); // Update localStorage
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, [selectedDate]);

  const retrieveEvents = async (date) => {
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return await logic.retrieveEvents(month, year);
  };

  const daysInMonth = useCallback((date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  }, []);

  const monthDays = useMemo(() => {
    const days = [];
    const daysCount = daysInMonth(selectedDate);
    const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-cell empty-cell"></div>);
    }

    for (let day = 1; day <= daysCount; day++) {
      const eventForDay = events.find((event) => new Date(event.date).getDate() === day);

      days.push(
        <div key={day} className="calendar-cell day-cell relative p-2 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 bg-gray-700">
          <div className="day-box bg-gray-600 p-1 rounded-lg shadow">
            <span className="font-bold text-sm text-white">{day}</span>
            {eventForDay && (
              <div
                className={`event mt-1 p-1 rounded cursor-pointer relative ${eventForDay.subscribers.includes(user?.id) ? 'bg-pink-500' : 'bg-gray-500'}`}
                onClick={() => setEventDetails(eventForDay)}
              >
                <span className="text-xs font-bold text-white">{eventForDay.title}</span>
                <p className="text-xs text-white">{eventForDay.description}</p>
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
      );
    }

    return days;
  }, [daysInMonth, selectedDate, events, user]);

  const changeMonth = (value) => {
    setSelectedDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + value);
      return newDate;
    });
  };

  const openModal = (event) => {
    setCurrentEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentEvent(null);
    setIsModalOpen(false);
  };

  const closeEventDetails = () => {
    setEventDetails(null);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="calendar-app p-4 max-w-full mx-auto">
      <div className="calendar-container border border-gray-400 rounded-lg shadow p-4 overflow-x-auto bg-gray-800">
        <CalendarHeader selectedDate={selectedDate} changeMonth={changeMonth} />
        <CalendarGrid monthDays={monthDays} />
      </div>
      <EventModal isOpen={isModalOpen} onClose={closeModal} event={currentEvent} />
      {eventDetails && <EventDetails eventDetails={eventDetails} closeEventDetails={closeEventDetails} />}
    </div>
  );
}

export default Calendar;



