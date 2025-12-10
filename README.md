# 🚗 TravelEase – Vehicle Booking & Trip Management Platform  

Client-side GitHub repo link: https://github.com/ahnafabid10/TravelEase-client-side

Server-side GitHub repo link: https://github.com/ahnafabid10/TravelEase-server-side

Live website link: https://traveleaseb12a10.netlify.app/

---

## ⭐ Project Overview

**TravelEase** is a full-stack MERN application designed for vehicle rentals and trip management.  
Users can explore vehicles, manage their own listings, book vehicles, and update details—all inside a smooth, well-designed interface.  
The project includes Firebase Authentication, a modern responsive UI, and MongoDB database management.

---

## 🚀 Features

- 🔐 **Firebase Authentication** (Email/Password + Google Login)  
- 🚙 **Add, Update & Delete Vehicles**  
- 📄 **Vehicle Details Page + Booking Storage**  
- 🎨 **Responsive & Modern UI**  
- 🌙 **Dark/Light Theme Toggle**  
- 🔍 **Sorting & Filtering on All Vehicles Page**  
- 📆 **Uses date-fns for date formatting**  
- ⚡ **Fast API handling with Axios / TanStack Query**

---

## 🧱 Tech Stack

### **Frontend**
- React.js  
- React Router  
- Firebase Authentication  
- Tailwind CSS  
- Axios / TanStack Query  
- Framer Motion / React Spring  

### **Backend**
- Node.js  
- Express.js  
- MongoDB  
- CORS  

### **Deployment**
- **Client:** Netlify / Surge / Firebase  
- **Server:** Vercel  

---


## 🏠 Home Page Includes

- 🎬 **Hero Banner** (image/video)  
- 🔘 **“All Vehicles” button**  
- 🆕 **Latest 6 vehicles** sorted by date  
- 📌 **Two Static Sections (examples):**  
  - Top Categories  
  - About TravelEase  
  - Featured Owner  

---

## 🔐 Authentication System

### Login Page
- Email  
- Password  
- Forget Password *(no functionality required)*  
- Google Login  
- Register link  
- Shows **toast errors and success messages**  

### Registration Page
- Name  
- Email  
- Photo URL  
- Password  
- Google Login  
- Redirects after success  

#### Password Rules
- 1 uppercase letter  
- 1 lowercase letter  
- Minimum 6 characters  

---

## 🚗 All Vehicles Page
- Displays all vehicles in a **grid/table**  
- Includes **sorting and filtering**  
- Each item has **View Details** button  

---

## 🔎 Vehicle Details Page *(Private Route)*
- Full vehicle information  
- **“Book Now”** saves booking to DB  

---

## ➕ Add Vehicle Page *(Private Route)*
- Form with auto-filled user email  
- Stores data in **MongoDB**  
- Shows **toast success message**  

---

## 📋 My Vehicles Page *(Private Route)*
- Shows vehicles added by the logged-in user  

**Buttons:**  
- View Details  
- Update  
- Delete (with confirmation modal)  

---

## ✏️ Update Vehicle Page
- Pre-filled form  
- Save updates  
- Toast alerts  

---

## 📘 My Bookings Page *(Private Route)*
- Shows all bookings of logged-in user  

---

## ⚙️ Additional Features
- Custom 404 Page  
- Loading Spinner  
- Protected private routes  
- No Lorem Ipsum  
- No default `alert()`  
- Firebase authorized domain  
- Reloading private routes works without redirecting  

---

## 🎨 UI/UX Requirements Met
- Unique theme design  
- Consistent headings & fonts  
- Balanced spacing & alignment  
- Uniform card sizes  
- Clean grid layouts  
- New X.com logo  
- Fully responsive (mobile/tablet/desktop)  

---

## 🎯 Challenge Features Included
- ✔️ Advanced Filtering  
- ✔️ Dark/Light Mode  
- ✔️ `date-fns` integration  
- ✔️ Framer Motion Animations  
