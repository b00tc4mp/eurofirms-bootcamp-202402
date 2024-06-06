import React from 'react';

const CalendarGrid = ({ monthDays }) => {
  return (
    <div className="calendar-container grid grid-cols-7 gap-1 sm:gap-1">
      {monthDays}
    </div>
  );
};

export default CalendarGrid;

//ancho fijo: w-[700px]
//responsivo: w-full (ocuparia el 100x100 del contenedor padre)
//max-w-4xl mx-auto w-full = ancho max, centrar horizontalmete dentro del contenedor, asegurar que se expanda para llenar el espacio