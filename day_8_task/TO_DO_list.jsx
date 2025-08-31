import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);   // Store tasks
  const [input, setInput] = useState("");   // Store input text

  // Add new task
  const addTask = () => {
    if (input.trim() === "") return; // avoid empty tasks
    setTasks([...tasks, input]);
    setInput(""); // clear input
  };

  // Remove task by index
  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4 text-center">📝 To-Do List</h2>

        {/* Input */}
        <div className="flex mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a task..."
            className="flex-grow p-2 border rounded-l-lg"
          />
          <button
            onClick={addTask}
            className="px-4 py-2 bg-blue-500 text-white rounded-r-lg"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <ul className="list-disc pl-5 space-y-2">
          {tasks.length === 0 ? (
            <p className="text-gray-500">No tasks yet...</p>
          ) : (
            tasks.map((task, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-50 p-2 rounded"
              >
                {task}
                <button
                  onClick={() => removeTask(index)}
                  className="text-red-500 font-bold"
                >
                  ✕
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
