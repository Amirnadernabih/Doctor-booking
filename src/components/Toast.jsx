import React from 'react';

// Toast.js
const Toast = ({ message }) => (
  <div className="fixed top-6 right-6 z-50">
    <div className="bg-green-500 text-white px-4 py-2 rounded shadow-lg">
      {message}
    </div>
  </div>
);

export default Toast;
