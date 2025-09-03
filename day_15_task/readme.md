# 🔐 Complete Full-Stack App with Authentication

  A full-stack **Authentication App** built with **Node.js + Express (backend)** and **React (frontend)**.  
  Users can **register**, **login**, and access a **protected dashboard** using **JWT authentication**.

---


📂 Folder Structure
  fullstack-auth-app/
  │── backend/
  │   ├── server.js
  │   └── package.json
  │
  │── frontend/
  │   ├── src/
  │   │   ├── App.js
  │   │   ├── components/
  │   │   │   ├── Login.jsx
  │   │   │   ├── Register.jsx
  │   │   │   └── Dashboard.jsx
  │   └── package.json

## 📚 Topics Covered
  - Node.js + Express basics
  - Password hashing with `bcryptjs`
  - JWT (JSON Web Token) authentication
  - Middleware for protecting routes
  - React frontend with Register/Login UI
  - React Router for navigation & protected routes
  - Token storage in `localStorage`

---

## 📦 Installation & Setup

### 🔹 Backend
  1. Navigate to the backend folder:
     ```bash
     cd fullstack-auth-backend


Install dependencies:

npm install express bcryptjs jsonwebtoken cors
Run server:

node server.js


Runs at 👉 http://localhost:5000


✨ Backend API Endpoints
1. Register User
POST /api/register


Body:

{ "username": "john", "password": "mypassword" }

2. Login User
POST /api/login


Body:

{ "username": "john", "password": "mypassword" }


Response:

{ "message": "Login successful", "token": "jwt_token_here" }

3. Protected Route
GET /api/profile


Headers:

Authorization: Bearer jwt_token_here


Response:

{
  "message": "Protected profile data",
  "user": { "id": 1, "username": "john" }
}

✨ Frontend Features
  
  ✅ Register new users
  
  ✅ Login & save JWT token in localStorage
  
  ✅ Redirect unauthenticated users to login page
  
  ✅ Access Dashboard only when logged in
  
  ✅ Logout functionality



🛠 Tech Stack

  Backend: Node.js, Express, JWT, bcryptjs
  
  Frontend: React.js, React Router, Tailwind CSS (optional)
  
  Language: JavaScript (ES6)

🚀 Mini Task
  
  Build a Complete Full-Stack Authentication App that:
  
  Lets users register and login
  
  Issues JWT token and stores it on frontend
  
  Provides protected routes (e.g., Dashboard)
  
  Allows logout to clear token & restrict access
