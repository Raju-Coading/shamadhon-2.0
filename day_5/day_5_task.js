// Import express
const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Dummy data: list of students
let students = [
  { id: 1, name: "Rahul", age: 20 },
  { id: 2, name: "Priya", age: 22 },
  { id: 3, name: "Aman", age: 21 }
];

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to Student API 🚀");
});

// GET route: return list of students
app.get("/students", (req, res) => {
  res.json(students);
});

// POST route: add new student
app.post("/students", (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    age: req.body.age
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
