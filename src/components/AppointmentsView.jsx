import React, { useState } from 'react';
import useDoctorStore from '../store/doctorStore';
import ConfirmModal from '../components/ConfirmModal';

const AppointmentsView = () => {
  const { appointments, cancelAppointment } = useDoctorStore();
  const [showConfirm, setShowConfirm] = useState(false);
  const [appointmentToCancel, setAppointmentToCancel] = useState(null);

  const handleCancelClick = (appointment) => {
    setAppointmentToCancel(appointment);
    setShowConfirm(true);
  };

  const confirmCancel = () => {
    cancelAppointment(appointmentToCancel.id);
    setShowConfirm(false);
    setAppointmentToCancel(null);
  };

  const cancelConfirmModal = () => {
    setShowConfirm(false);
    setAppointmentToCancel(null);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">My Appointments</h2>
      {appointments.length === 0 ? (
        <p className="text-gray-300">No appointments booked yet.</p>
      ) : (
        <ul role="list" className="grid md:grid-cols-2 gap-6">
          {appointments.map((appointment ) => (
            <li
              role="listitem"
              key={appointment.id}
              tabIndex="0"
              className="relative p-6 rounded-2xl shadow-xl border border-white/20 bg-white/10 backdrop-blur-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={appointment.doctor.image}
                  alt={appointment.doctor.name}
                  className="w-16 h-16 rounded-full border-2 border-white/30 object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">{appointment.doctor.name}</h3>
                  <p className="text-sm text-gray-300">{appointment.doctor.specialty}</p>
                </div>
              </div>
              <div className="text-sm space-y-1">
                <p>
                  <span className="font-medium">📍 Location:</span> {appointment.doctor.location}
                </p>
                <p>
                  <span className="font-medium">🗓️ Time:</span> {appointment.time}
                </p>
              </div>
              <button
                onClick={() => handleCancelClick(appointment)}
                className="absolute top-4 right-4 px-3 py-1 text-sm bg-red-500 hover:bg-red-600 rounded-xl text-white"
              >
                Cancel
              </button>
            </li>
          ))}
        </ul>
      )}

      {showConfirm && (
        <ConfirmModal
          message="Are you sure you want to cancel this appointment?"
          onConfirm={confirmCancel}
          onCancel={cancelConfirmModal}
        />
      )}
    </div>
  );
};

export default AppointmentsView;
