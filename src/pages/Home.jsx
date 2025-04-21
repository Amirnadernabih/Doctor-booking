import React from 'react';
import DoctorCard from '../components/DoctorCard';
import FilterBar from '../components/FilterBar';
import mockDoctors from '../data/mockDoctors';
import useDoctorStore from '../store/doctorStore';

const Home = () => {
  const { filters } = useDoctorStore();
  const specialties = [
    'Cardiologist',
    'Dermatologist',
    'Pediatrician',
    'Neurologist',
    'Orthopedic',
  ];

  const filteredDoctors = mockDoctors.filter((doctor) => {
    const specialtyMatch = filters.specialty === 'All' || doctor.specialty === filters.specialty;
    const availabilityMatch =
      filters.availability === 'All' ||
      (filters.availability === 'Available' && doctor.available) ||
      (filters.availability === 'Unavailable' && !doctor.available);
    return specialtyMatch && availabilityMatch;
  });

  return (
    <div className="p-4">
      <FilterBar specialties={specialties} />

      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {filteredDoctors.slice(0, 12).map((doctor) => (
          <div key={doctor.id} className="w-full sm:w-[48%] md:w-[30%] lg:w-[22%]">
            <DoctorCard doctor={doctor} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
