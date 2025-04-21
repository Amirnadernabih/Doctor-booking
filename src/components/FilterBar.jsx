// src/components/FilterBar.jsx

import React from 'react';
import useDoctorStore from '../store/doctorStore';

const FilterBar = ({ specialties }) => {
  const filters = useDoctorStore((state) => state.filters);
  const setFilter = useDoctorStore((state) => state.setFilter);

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <div>
        <label className="block text-sm font-medium mb-1">Specialty</label> <br/>
        <select
          className="p-2 border border-gray-300 rounded-md"
          value={filters.specialty}
          onChange={(e) => setFilter('specialty', e.target.value)}
        >
          <option value="All">All</option>
          {specialties.map((spec, index) => (
            <option key={index} value={spec}>
              {spec}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Availability</label><br/>
        <select
          className="p-2 border border-gray-300 rounded-md"
          value={filters.availability}
          onChange={(e) => setFilter('availability', e.target.value)}
        >
          <option value="All">All</option>
          <option value="Available">Available</option>
          <option value="Unavailable">Unavailable</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
