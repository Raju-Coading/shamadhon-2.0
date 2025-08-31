const express = require("express");
const app = express();
const PORT = 5000;

// Dummy student data
const students = [
  { id: 1, name: "Rahul Sharma", age: 20, course: "Computer Science" },
  { id: 2, name: "Priya Singh", age: 22, course: "Mathematics" },
  { id: 3, name: "Amit Kumar", age: 21, course: "Physics" }
];

// API endpoint
app.get("/api/students", (req, res) => {
  res.json(students);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
