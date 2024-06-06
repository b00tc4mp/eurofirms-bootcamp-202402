
import React from 'react';

const Notification = ({ message, type, onClose }) => {
  if (!message) return null;

  const notificationStyles = type === 'success' ? 'bg-green-500' : 'bg-red-500';

  return (
    <div
      className={`fixed bottom-4 right-4 p-4 rounded shadow-lg text-white ${notificationStyles}`}
      style={{ zIndex: 1000, maxWidth: '300px' }}
    >
      <p className="text-sm font-bold">{message}</p>
      <button onClick={onClose} className="mt-2 p-2 bg-gray-700 rounded text-white hover:bg-gray-600">
        Close
      </button>
    </div>
  );
};

export default Notification;
