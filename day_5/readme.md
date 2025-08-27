📦 Installation

Clone or download this repository.

Open a terminal in the project folder.

Initialize Node.js and install Express:

npm init -y
npm install express

▶️ Run the Server

Start the server with:

node server.js


The server will run at:
👉 http://localhost:3000

📄 API Endpoints
1. Home Route

GET /
Response:

Welcome to Student API 🚀

2. Get All Students

GET /students
Response:

[
  { "id": 1, "name": "Rahul", "age": 20 },
  { "id": 2, "name": "Priya", "age": 22 },
  { "id": 3, "name": "Aman", "age": 21 }
]

3. Add a New Student

POST /students

Send JSON body:

{
  "name": "Simran",
  "age": 23
}


Response:

{ "id": 4, "name": "Simran", "age": 23 }

🛠 Tech Stack

Node.js

Express.js

📚 Topics Covered

Installing Express

Creating routes (GET, POST)

Returning JSON data

Building a simple API

✨ Mini Task

Build an API returning a list of students and allow adding new students.
