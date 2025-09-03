const express = require("express");
const app = express();
const PORT = 5000;

// Middleware to parse JSON body
app.use(express.json());

// Dummy student data
let students = [
  { id: 1, name: "Rahul Sharma", age: 20, course: "Computer Science" },
  { id: 2, name: "Priya Singh", age: 22, course: "Mathematics" },
];

// ✅ Get all students
app.get("/api/students", (req, res) => {
  res.json(students);
});

// ✅ Get student by ID
app.get("/api/students/:id", (req, res) => {
  const student = students.find((s) => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ message: "Student not found" });
  res.json(student);
});

// ✅ Add a new student
app.post("/api/students", (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    age: req.body.age,
    course: req.body.course,
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// ✅ Update student by ID
app.put("/api/students/:id", (req, res) => {
  const student = students.find((s) => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ message: "Student not found" });

  student.name = req.body.name || student.name;
  student.age = req.body.age || student.age;
  student.course = req.body.course || student.course;

  res.json(student);
});

// ✅ Delete student by ID
app.delete("/api/students/:id", (req, res) => {
  const studentIndex = students.findIndex((s) => s.id === parseInt(req.params.id));
  if (studentIndex === -1) return res.status(404).json({ message: "Student not found" });

  const deletedStudent = students.splice(studentIndex, 1);
  res.json(deletedStudent);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Student CRUD API running at http://localhost:${PORT}`);
});
