📝 Student CRUD API (Node.js + Express)

A beginner-friendly REST API built with Node.js and Express to perform CRUD (Create, Read, Update, Delete) operations on student data.

📚 Topics Covered

Express.js basics

REST API routes (GET, POST, PUT, DELETE)

Handling JSON request bodies

Managing in-memory data (no database)

📦 Installation & Setup

Clone or download this repository

Open a terminal and install dependencies:

npm install


Start the server:

node server.js


Server runs at 👉 http://localhost:5000

▶️ API Endpoints
1. Get all students
GET /api/students


Response:

[
  { "id": 1, "name": "Rahul Sharma", "age": 20, "course": "Computer Science" },
  { "id": 2, "name": "Priya Singh", "age": 22, "course": "Mathematics" }
]

2. Get student by ID
GET /api/students/:id


Example: /api/students/1

3. Add a new student
POST /api/students


Body (JSON):

{
  "name": "Amit Kumar",
  "age": 21,
  "course": "Physics"
}

4. Update student by ID
PUT /api/students/:id


Body (JSON):

{
  "name": "Updated Name",
  "age": 23
}

5. Delete student by ID
DELETE /api/students/:id

✨ Features

Get list of all students

Get details of a single student by ID

Add new students

Update existing student details

Delete a student

🛠 Tech Stack

Node.js

Express.js

JavaScript (ES6)

🚀 Mini Task

Build a Student CRUD API that allows:

Creating students

Reading students

Updating student details

Deleting students
