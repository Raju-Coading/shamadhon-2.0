const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let notes = [
  { id: 1, title: "First Note", content: "This is my first note." },
  { id: 2, title: "Second Note", content: "Learning full-stack CRUD!" },
];

// Get all notes
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

// Add new note
app.post("/api/notes", (req, res) => {
  const newNote = {
    id: notes.length + 1,
    title: req.body.title,
    content: req.body.content,
  };
  notes.push(newNote);
  res.status(201).json(newNote);
});

// Update note
app.put("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n.id === parseInt(req.params.id));
  if (!note) return res.status(404).json({ message: "Note not found" });

  note.title = req.body.title ?? note.title;
  note.content = req.body.content ?? note.content;

  res.json(note);
});

// Delete note
app.delete("/api/notes/:id", (req, res) => {
  const index = notes.findIndex((n) => n.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Note not found" });

  const deleted = notes.splice(index, 1);
  res.json(deleted);
});

app.listen(PORT, () => console.log(`✅ Notes API running at http://localhost:${PORT}`));
