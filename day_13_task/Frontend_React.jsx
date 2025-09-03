import React, { useEffect, useState } from "react";

function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Fetch notes
  const fetchNotes = async () => {
    const res = await fetch("http://localhost:5000/api/notes");
    const data = await res.json();
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // Add note
  const addNote = async () => {
    if (!title || !content) return;
    await fetch("http://localhost:5000/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });
    setTitle("");
    setContent("");
    fetchNotes();
  };

  // Delete note
  const deleteNote = async (id) => {
    await fetch(`http://localhost:5000/api/notes/${id}`, { method: "DELETE" });
    fetchNotes();
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        <h1 className="text-2xl font-bold mb-4">📝 Notes App</h1>

        <input
          type="text"
          placeholder="Note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <textarea
          placeholder="Note content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <button
          onClick={addNote}
          className="w-full py-2 bg-blue-500 text-white rounded mb-4"
        >
          Add Note
        </button>

        <ul className="space-y-2">
          {notes.map((note) => (
            <li
              key={note.id}
              className="p-3 border rounded bg-gray-50 flex justify-between items-start"
            >
              <div>
                <h3 className="font-bold">{note.title}</h3>
                <p>{note.content}</p>
              </div>
              <button
                onClick={() => deleteNote(note.id)}
                className="text-red-500"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NotesApp;
