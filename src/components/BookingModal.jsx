import React, { useState, useRef } from 'react';
import useDoctorStore from '../store/doctorStore';

const BookingModal = ({ setSuccessMessage }) => {
  const { selectedDoctor, closeModal, bookAppointment } = useDoctorStore();

  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const daySelectRef = useRef(null);
  const timeSelectRef = useRef(null);
  const bookButtonRef = useRef(null);

  if (!selectedDoctor) return null;

  const availableDays = Object.keys(selectedDoctor.availability || {});
  const availableTimes = selectedDoctor.availability?.[selectedDay] || [];

  const handleBooking = () => {
    if (!selectedDoctor || !selectedDay || !selectedTime) return;

    const fullTime = `${selectedDay} at ${selectedTime}`;
    bookAppointment(selectedDoctor, fullTime);
    setSuccessMessage('Appointment booked successfully!');

    setTimeout(() => {
      setSuccessMessage('');
      closeModal();
      setSelectedDay('');
      setSelectedTime('');
    }, 3000);
  };

  // Handle Enter key to navigate through fields
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (!selectedDay) {
        daySelectRef.current.focus();
      } else if (!selectedTime && selectedDay) {
        timeSelectRef.current.focus();
      } else {
        bookButtonRef.current.focus();
        handleBooking();
      }
    }
  };

  return (
    <div className="modal-overlay" role="dialog" aria-labelledby="modal-title">
      <div
        className="modal-card"
        role="document"
        tabIndex={-1} // Ensures it can be focused for keyboard events
        onKeyDown={handleKeyDown}
      >
        <h2 id="modal-title" className="modal-title">
          Book Appointment with {selectedDoctor.name}
        </h2>

        {/* Day Selection */}
        <div className="modal-field">
          <label htmlFor="day-select">Select Day</label>
          <select
            id="day-select"
            ref={daySelectRef}
            value={selectedDay}
            onChange={(e) => {
              setSelectedDay(e.target.value);
              setSelectedTime('');
            }}
            className="datetime-input modern-select"
            aria-label="Select a day"
            autoFocus
          >
            <option value="">-- Select a Day --</option>
            {availableDays.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>

        {/* Time Selection */}
        {selectedDay && (
          <div className="modal-field">
            <label htmlFor="time-select">Select Time</label>
            <select
              id="time-select"
              ref={timeSelectRef}
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="datetime-input modern-select"
              aria-label="Select a time"
            >
              <option value="">-- Select a Time --</option>
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Buttons */}
        <div className="modal-actions">
          <button
            className="cancel-btn"
            onClick={closeModal}
            aria-label="Cancel appointment booking"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                closeModal();
              }
            }}
          >
            Cancel
          </button>
          <button
            className="book-btn"
            ref={bookButtonRef}
            onClick={handleBooking}
            disabled={!selectedDay || !selectedTime}
            aria-label="Confirm booking"
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
