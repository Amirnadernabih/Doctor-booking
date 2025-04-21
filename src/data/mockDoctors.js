// src/data/mockDoctors.js

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    location: "Cairo Medical Center",
    rating: 4.8,
    available: true,
    image: "/images/doctor-img.jpg",
    availability: {
      Monday: ["10:00", "11:00", "14:00"],
      Wednesday: ["12:00", "15:00"],
      Friday: ["09:00", "11:00"]
    }
  },
  {
    id: 2,
    name: "Dr. Ahmed Hassan",
    specialty: "Dermatologist",
    location: "Alexandria Health Hub",
    rating: 4.5,
    available: false,
    image: "/images/doctor-img.jpg",
    availability: {}
  },
  {
    id: 3,
    name: "Dr. Leila Mostafa",
    specialty: "Pediatrician",
    location: "Maadi Children Clinic",
    rating: 4.9,
    available: true,
    image: "/images/doctor-img.jpg",
    availability: {
      Tuesday: ["10:30", "13:00"],
      Thursday: ["09:00", "12:00", "16:00"]
    }
  },
  {
    id: 4,
    name: "Dr. Omar Youssef",
    specialty: "Neurologist",
    location: "Zamalek Neuro Center",
    rating: 4.7,
    available: true,
    image: "/images/doctor-img.jpg",
    availability: {
      Monday: ["09:00", "11:00"],
      Wednesday: ["13:00", "15:30"],
      Saturday: ["10:00", "12:00"]
    }
  },
  {
    id: 5,
    name: "Dr. Rana Saleh",
    specialty: "Orthopedic",
    location: "Nasr City Hospital",
    rating: 4.4,
    available: false,
    image: "/images/doctor-img.jpg",
    availability: {}
  },
  {
    id: 6,
    name: "Dr. Mahmoud El-Sayed",
    specialty: "Cardiologist",
    location: "Giza Heart Clinic",
    rating: 4.6,
    available: true,
    image: "/images/doctor-img.jpg",
    availability: {
      Tuesday: ["08:00", "09:00", "10:00"],
      Thursday: ["11:00", "13:00"]
    }
  },
  {
    id: 7,
    name: "Dr. Dina Gamal",
    specialty: "Dermatologist",
    location: "Heliopolis Skin Center",
    rating: 4.3,
    available: true,
    image: "/images/doctor-img.jpg",
    availability: {
      Monday: ["14:00", "16:00"],
      Wednesday: ["10:00", "11:30"],
      Friday: ["13:00", "15:00"]
    }
  },
  {
    id: 8,
    name: "Dr. Karim Tarek",
    specialty: "Pediatrician",
    location: "Dokki Family Health",
    rating: 4.8,
    available: false,
    image: "/images/doctor-img.jpg",
    availability: {}
  },
  {
    id: 9,
    name: "Dr. Hala Kamal",
    specialty: "Orthopedic",
    location: "6th of October Clinic",
    rating: 4.5,
    available: true,
    image: "/images/doctor-img.jpg",
    availability: {
      Sunday: ["09:00", "11:00"],
      Tuesday: ["14:00", "16:00"],
      Friday: ["10:00", "12:00"]
    }
  },
  {
    id: 10,
    name: "Dr. Nader Fathy",
    specialty: "Neurologist",
    location: "Mohandiseen Brain Center",
    rating: 4.6,
    available: false,
    image: "/images/doctor-img.jpg",
    availability: {}
  },
  {
    id: 11,
    name: "Dr. Mona Adel",
    specialty: "Cardiologist",
    location: "New Cairo Heart Hospital",
    rating: 4.9,
    available: true,
    image: "/images/doctor-img.jpg",
    availability: {
      Monday: ["09:30", "12:00"],
      Thursday: ["10:00", "12:00"],
      Saturday: ["11:00", "13:00"]
    }
  },
  {
    id: 12,
    name: "Dr. Saeed Ramadan",
    specialty: "Orthopedic",
    location: "Shoubra Ortho Center",
    rating: 4.7,
    available: true,
    image: "/images/doctor-img.jpg",
    availability: {
      Tuesday: ["11:00", "13:00"],
      Thursday: ["14:00", "16:00"],
      Sunday: ["09:00", "10:30"]
    }
  }
];

export default doctors;
