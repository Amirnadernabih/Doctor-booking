import create from 'zustand';

const useDoctorStore = create((set) => ({
  filters: {
    specialty: 'All',
    availability: 'All',
  },
  selectedDoctor: null,
  appointments: [],

  // Set filter
  setFilter: (filterName, value) =>
    set((state) => ({
      filters: {
        ...state.filters,
        [filterName]: value,
      },
    })),

  // Select a doctor (opens modal)
  selectDoctor: (doctor) => set({ selectedDoctor: doctor }),

  // Close the modal
  closeModal: () => set({ selectedDoctor: null }),

  // Book appointment
  bookAppointment: (doctor, time) => {
    set((state) => ({
      appointments: [
        ...state.appointments,
        { id: Date.now(), doctor, time },
      ],
      selectedDoctor: null,
    }));
  },

  // Cancel appointment by ID
  cancelAppointment: (id) => {
    set((state) => ({
      appointments: state.appointments.filter(
        (appointment) => appointment.id !== id
      ),
    }));
  },
}));

export default useDoctorStore;
