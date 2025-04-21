# 🩺 Doctor Booking UI Module

A fully **responsive** and **accessible** doctor appointment booking interface built using **React**, **Vite**, and **TailwindCSS**. This module allows users to browse doctors, book appointments via a modal, and view their confirmed appointments — with a clean and user-friendly design.

## 🎯 Objective

This project was created as a technical task for InVitro Capital. The goal was to:

- Design a responsive Doctor Directory
- Implement an appointment booking modal
- Build an appointment summary section
- Ensure accessibility and responsiveness across all devices

---

## 🛠️ Tech Stack & Tools

| Technology        | Why I used it                                                                 |
|-------------------|-------------------------------------------------------------------------------|
| **React**          | To build a dynamic and component-based UI                                    |
| **Vite**           | For lightning-fast development and optimized build performance               |
| **TailwindCSS**    | For rapid and responsive styling with utility-first classes                  |
| **React Router DOM** | To handle multi-page routing between views like "Doctor Directory" and "My Appointments" |
| **Zustand**        | A lightweight state management solution — easy to use and efficient          |
| **ChatGPT** | To accelerate development, debug, generate mock data, and enhance accessibility |


---

## ✅ Features

### 1. **Doctor Directory View**
- Doctor cards display:
  - Name
  - Specialty
  - Rating
  - Location
  - Availability status
  - **“Book Appointment”** button
- Filter doctors by:
  - **Specialty**
  - **Availability**

### 2. **Booking Modal**
- Opens upon clicking “Book Appointment”
- Displays:
  - Doctor name
  - Available time slots
- User can select a time and click **Confirm**

### 3. **Appointments Summary View**
- A separate section (via routing) to view booked appointments
- Each card includes:
  - Doctor Name
  - Date/Time
  - Specialty
  - Location

---

## ♿ Accessibility & Responsiveness

- Fully navigable via **keyboard**
- Utilizes `aria-label`, `aria-describedby`, and `role` attributes where relevant
- Passes accessibility checks in **axe DevTools**
![App Screenshot](./public/images/axe-core%20dev-tools.png)
- Fully responsive across **mobile**, **tablet**, and **desktop** screen sizes

---

## 🚀 How I Used AI

I used **ChatGPT** during the development process to:

- **Generate mock data** for doctor profiles and availability
- **Improve accessibility** by suggesting proper ARIA attributes and semantic HTML usage
- **Debug logic** and identify cleaner code patterns
- **Boost productivity**, allowing me to focus more on logic and UI/UX instead of repetitive boilerplate

AI tools allowed me to **work smarter, not harder**, showcasing how I can deliver high-quality results efficiently.

---

🔜 Next Steps
1. Integrate Backend for Appointment Scheduling
Set up a backend service (Node.js/Express, or any other preferred stack) to handle real-time appointment booking.

Implement API endpoints for creating and retrieving appointments.

Integrate the front-end booking modal with the backend to save appointment details and retrieve them for the summary view.

2. User Authentication & Authorization
Implement a user authentication system (using JWT or OAuth) so users can create accounts and log in to manage their appointments.

Add role-based access to allow users to manage their appointments while restricting others' access to certain features.

3. Database Integration
Set up a database (e.g., MongoDB, PostgreSQL) to store doctor profiles, appointments, and user data.

Ensure data validation and relationships between doctors, appointments, and users are handled effectively.

4. Enhanced Doctor Search & Filters
Extend the doctor directory view to include more detailed search options such as:

Search by name, specialty, location, rating, or availability.

Multi-filter capabilities (e.g., filter by both specialty and rating at the same time).

Implement search functionality to improve user experience when browsing doctors.

5. Responsive Design Enhancements
Conduct further user testing on multiple devices to ensure the app’s responsiveness and user experience are consistent.

Optimize performance, including lazy loading of doctor data and images to improve page load times.

6. Appointment Notifications
Integrate email or SMS notifications to inform users about appointment confirmations, reminders, and cancellations.

Use services like SendGrid (for email) or Twilio (for SMS) to send notifications.