import React from 'react';

const ConfirmModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-7"
      role="dialog"
      aria-labelledby="confirm-modal-title"
      aria-describedby="confirm-modal-description"
    >
      <div
        className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md relative text-center"
        role="document"
      >
        <h2
          id="confirm-modal-title"
          className="text-xl font-bold mb-4 text-red-600"
        >
          Confirm Action
        </h2>
        <p
          id="confirm-modal-description"
          className="mb-6 text-gray-800"
          aria-describedby="confirm-modal-description"
        >
          {message}
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            aria-label="Cancel action"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onCancel();
              }
            }}
          >
            No, Keep It
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            aria-label="Confirm cancellation"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onConfirm();
              }
            }}
          >
            Yes, Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;