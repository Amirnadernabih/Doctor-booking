import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import MyAppointments from './pages/MyAppointments';
import Error404Page from './components/Error404Page'; 
import useDoctorStore from './store/doctorStore';
import BookingModal from './components/BookingModal';
import Toast from './components/Toast';

const App = () => {
  const { filters } = useDoctorStore();
  const [successMessage, setSuccessMessage] = useState('');

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="bg-white shadow-sm rounded-xl py-4 px-6 mb-6 flex flex-col sm:flex-row items-center justify-between">
            <h1 className="text-[1.2rem] sm:text-3xl font-extrabold text-blue-600 tracking-tight mb-2 sm:mb-0">
              Doctor Appointment Booking
            </h1>
            <nav className="space-x-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                tabIndex="0"
                aria-label="Go to Home page"
              >
                Home
              </Link>
              <Link
                to="/my-appointments"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                tabIndex="0"
                aria-label="Go to My Appointments page"
              >
                My Appointments
              </Link>
            </nav>
          </header>

          <Routes>
            <Route path="/" element={<Home filters={filters} />} />
            <Route path="/my-appointments" element={<MyAppointments />} />
            <Route path="*" element={<Error404Page />} /> {/* Catch-all for 404 page */}
          </Routes>
        </div>
      </div>
      <BookingModal setSuccessMessage={setSuccessMessage} />

      {/* Global Toast */}
      {successMessage && <Toast message={successMessage} />}
    </Router>
  );
};

export default App;
