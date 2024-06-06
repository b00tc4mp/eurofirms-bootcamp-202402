import React from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/logo.jpg';

function EventDetails({ eventDetails, closeEventDetails }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-200 rounded-lg shadow-lg max-w-md w-full">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <img src={logo} alt="Logo" className="w-16 h-16 mr-2" />
            <h2 className="text-2xl mb-3 font-bold text-pink-800">Details</h2>
          </div>
          <p className="mb-2"><strong>Tipo:</strong> {eventDetails.type}</p>
          <p className="mb-2"><strong>Título:</strong> {eventDetails.title}</p>
          <p className="mb-2"><strong>Fecha:</strong> {new Date(eventDetails.date).toLocaleString()}</p>
          <p className="mb-2"><strong>Duración:</strong> {eventDetails.duration} horas</p>
          <p className="mb-2"><strong>Dirección:</strong> {eventDetails.address}</p>
          <p className="mb-4"><strong>Descripción:</strong> {eventDetails.description}</p>

          <div className="mb-4">
            <strong>Suscriptores:</strong>
            <ul className="list-disc list-inside">
              {eventDetails.subscribers && eventDetails.subscribers.length > 0 ? (
                eventDetails.subscribers.map((subscriber, index) => (
                  <li key={index}>{subscriber.name + ' ' + subscriber.surname}</li>
                ))
              ) : (
                <p>No hay suscriptores</p>
              )}
            </ul>
          </div>

          <div className="flex justify-end">
            <button
              onClick={closeEventDetails}
              className="px-3 py-1 bg-indigo-400 text-white rounded-full shadow-md hover:bg-indigo-800 font-bold text-sm"
              data-testid="close-button"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

EventDetails.propTypes = {
  eventDetails: PropTypes.shape({
    type: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    duration: PropTypes.number,
    address: PropTypes.string,
    description: PropTypes.string,
    subscribers: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  closeEventDetails: PropTypes.func.isRequired,
};

export default EventDetails;


//pendiente ocultar elementos del listado si no se rellenan los campos(con un condicional tal vez)
