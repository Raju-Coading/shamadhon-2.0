const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy task data
let tasks = [
  { id: 1, title: "Learn Node.js", completed: false },
  { id: 2, title: "Build a To-Do App", completed: true },
];

// ✅ Get all tasks
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

// ✅ Add a new task
app.post("/api/tasks", (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    completed: false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// ✅ Update task (mark complete/incomplete)
app.put("/api/tasks/:id", (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ message: "Task not found" });

  task.title = req.body.title ?? task.title;
  task.completed = req.body.completed ?? task.completed;

  res.json(task);
});

// ✅ Delete task
app.delete("/api/tasks/:id", (req, res) => {
  const index = tasks.findIndex((t) => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Task not found" });

  const deletedTask = tasks.splice(index, 1);
  res.json(deletedTask);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ To-Do API running at http://localhost:${PORT}`);
});
