🎓 Student Directory (Backend + Frontend)

A simple Student Directory App built with:

Backend: Node.js + Express

Frontend: React.js + Tailwind CSS

This project demonstrates how a frontend React app can fetch data from a backend Express API and display it in a clean UI.

📚 Topics Covered

Express.js basics (API routes)

Serving JSON data from backend

Fetching data from API in React (useEffect)

Rendering lists dynamically with React

📦 Installation
🔹 Backend Setup

Navigate to the backend folder (or root if simple project).

Install dependencies:

npm init -y
npm install express


Run the server:

node server.js


API will run at 👉 http://localhost:5000/api/students

🔹 Frontend Setup

Navigate to frontend folder (React app).

Install dependencies:

npm install


Start React app:

npm start


Open in browser 👉 http://localhost:3000

✨ Features

Backend provides student list as JSON

Frontend fetches data from backend

Displays Name, Age, Course for each student

Beginner-friendly, clean UI

📄 Example Output
API Response (Express Backend)
[
  { "id": 1, "name": "Rahul Sharma", "age": 20, "course": "Computer Science" },
  { "id": 2, "name": "Priya Singh", "age": 22, "course": "Mathematics" },
  { "id": 3, "name": "Amit Kumar", "age": 21, "course": "Physics" }
]

React UI
🎓 Student Directory
-----------------------
Name: Rahul Sharma
Age: 20
Course: Computer Science

Name: Priya Singh
Age: 22
Course: Mathematics

Name: Amit Kumar
Age: 21
Course: Physics

🛠 Tech Stack

Backend: Node.js, Express

Frontend: React.js, Tailwind CSS

Language: JavaScript (ES6)

🚀 Mini Task

Build a Student Directory that:

Backend returns a list of students (JSON).

Frontend fetches students from API.

Displays details in a card/list format.
