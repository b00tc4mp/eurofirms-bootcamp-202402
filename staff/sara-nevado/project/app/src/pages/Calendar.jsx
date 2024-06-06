import React, { useState, useEffect, useCallback, useMemo } from 'react';
import logic from '../logic';
import EventModal from './EventModal';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';
import EventDetails from './EventDetails';
import CalendarCell from './CalendarCell';

function Calendar({ onUserAction }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [user, setUser] = useState(null);
  const [eventDetails, setEventDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const user = await logic.retrieveUser();
        setUser(user);
        await retrieveEvents(selectedDate);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [selectedDate]);

  const daysInMonth = useCallback((date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  }, []);

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

  const saveEvent = async (eventData) => {
    if (!user) {
      console.error('User not authenticated');
      return;
    }

    try {
      const formattedDate = eventData.date
        ? new Date(eventData.date).toISOString().substring(0, 16)
        : new Date(selectedDate.getFullYear(), selectedDate.getMonth(), currentEvent.day).toISOString().substring(0, 16);
      const duration = Number(eventData.duration);

      if (isNaN(duration)) {
        throw new TypeError('duration must be a number');
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
        });
      } else {
        await logic.createEvent({
          userId: user.id,
          type: eventData.type,
          title: eventData.title,
          date: formattedDate,
          duration: duration,
          address: eventData.address,
          description: eventData.description
        });
      }
      await retrieveEvents(selectedDate);
      closeModal();
    } catch (error) {
      console.error('Error saving event:', error);
    }
  };

  const retrieveEvents = async (date) => {
    try {
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const events = await logic.retrieveEvents(month, year);
      setEvents(events);
    } catch (error) {
      console.error('Error retrieving events:', error);
    }
  };

  const deleteEvent = async (eventId) => {
    try {
      await logic.deleteEvent(eventId);
      await retrieveEvents(selectedDate);
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const handleDeleteEvent = (eventId) => {
    if (window.confirm('¿Estás seguro?')) {
      deleteEvent(eventId);
    }
  };

  const handleSelectEvent = async (eventId) => {
    try {
      await logic.selectEvent(eventId, user.id);
      const updatedEvents = events.map((event) =>
        event.id === eventId ? { ...event, subscribers: [...event.subscribers, user.id] } : event
      );
      setEvents(updatedEvents);
      setSelectedDate(new Date())
      onUserAction()
    } catch (error) {
      console.error('Error selecting event:', error);
    }
  };

  const handleDeselectEvent = async (eventId) => {
    try {
      await logic.deselectEvent(eventId, user.id);
      const updatedEvents = events.map((event) =>
        event.id === eventId
          ? { ...event, subscribers: event.subscribers.filter((subscriber) => subscriber !== user.id) }
          : event
      );

      setEvents(updatedEvents);
      setSelectedDate(new Date())
      onUserAction();
    } catch (error) {
      console.error('Error deselecting event:', error);
    }
  };

  const monthDays = useMemo(() => {
    const days = [];
    const daysCount = daysInMonth(selectedDate);
    const firstDayOfMonth = (new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay() + 6) % 7;

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-cell empty-cell"></div>);
    }

    for (let day = 1; day <= daysCount; day++) {
      const eventForDay = events.find((event) => new Date(event.date).getDate() === day);



      days.push(
        <CalendarCell
          key={day}
          day={day}
          event={eventForDay}
          user={user}
          setEventDetails={setEventDetails}
          openModal={openModal}
          handleDeleteEvent={handleDeleteEvent}
          handleSelectEvent={handleSelectEvent}
          handleDeselectEvent={handleDeselectEvent}
        />
      );
    }

    return days;
  }, [daysInMonth, selectedDate, events, user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="calendar-container w-full px-4">
      <div className="calendar bg-gray-300 p-4 border border-gray-900 rounded-lg shadow">
        <CalendarHeader selectedDate={selectedDate} changeMonth={changeMonth} />
        <CalendarGrid monthDays={monthDays} />
      </div>
      <EventModal isOpen={isModalOpen} onClose={closeModal} onSave={saveEvent} event={currentEvent} />
      {eventDetails && <EventDetails eventDetails={eventDetails} user={user} closeEventDetails={closeEventDetails} />}
    </div>
  );
}

export default Calendar;
