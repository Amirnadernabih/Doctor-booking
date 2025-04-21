import React from 'react';
import useDoctorStore from '../store/doctorStore';

const DoctorCard = ({ doctor }) => {
  const selectDoctor = useDoctorStore((state) => state.selectDoctor);

  return (
    <div className="bg-white doctor-card rounded-2xl shadow-md p-4 hover:shadow-xl transition h-full flex flex-col">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-full h-40 object-cover rounded-xl mb-4"
      />
      <div className="text-xl font-semibold">{doctor.name}</div>
      <div className="text-sm text-gray-500 mb-1">{doctor.specialty}</div>
      <div className="text-sm text-gray-500 mb-1">{doctor.location}</div>
      <div className="text-sm text-yellow-500 mb-2">⭐ {doctor.rating}</div>
      <div className="mb-2">
        {doctor.available ? (
          <span className="text-green-600 font-medium available">• Available</span>
        ) : (
          <span className="text-red-500 font-medium unavailable">• Unavailable</span>
        )}
      </div>
      <button
        disabled={!doctor.available}
        onClick={() => selectDoctor(doctor)}
        className={`mt-auto w-full py-2 rounded-lg text-white transition ${
          doctor.available
            ? 'bg-blue-600 hover:bg-blue-700'
            : 'bg-gray-400 cursor-not-allowed disabled-btn'
        }`}
      >
        Book Appointment
      </button>
    </div>
  );
};

export default DoctorCard;
