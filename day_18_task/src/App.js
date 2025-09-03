// src/App.js
import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import axios from 'axios';
import './App.css';

const API_URL = 'http://localhost:5001/api/tasks';

function App() {
  const [columns, setColumns] = useState({
    'To Do': { name: 'To Do', items: [] },
    'In Progress': { name: 'In Progress', items: [] },
    'Done': { name: 'Done', items: [] },
  });
  const [newTaskTitle, setNewTaskTitle] = useState('');

  useEffect(() => {
    // Fetch tasks from the backend
    const fetchTasks = async () => {
      try {
        const response = await axios.get(API_URL);
        const tasks = response.data;
        // Organize tasks into columns
        const newColumns = {
          'To Do': { name: 'To Do', items: [] },
          'In Progress': { name: 'In Progress', items: [] },
          'Done': { name: 'Done', items: [] },
        };
        tasks.forEach(task => {
          if (newColumns[task.status]) {
            newColumns[task.status].items.push(task);
          }
        });
        setColumns(newColumns);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    try {
      const response = await axios.post(API_URL, { title: newTaskTitle });
      const newTask = response.data;
      
      const newColumns = { ...columns };
      newColumns['To Do'].items.push(newTask);
      
      setColumns(newColumns);
      setNewTaskTitle('');
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const onDragEnd = async (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);

    // Update the task's status on the backend
    try {
      await axios.put(`${API_URL}/${removed._id}`, { status: destination.droppableId });
    } catch (error) {
      console.error("Error updating task status:", error);
      // Revert UI change if API call fails (optional)
      return;
    }

    // If dropped in the same column
    if (source.droppableId === destination.droppableId) {
      sourceItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
      });
    } else { // If dropped in a different column
      const destItems = [...destColumn.items];
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    }
  };


  return (
    <div>
      <header className="App-header">
        <h1>Project Management Board</h1>
      </header>
      <form onSubmit={handleAddTask} className="add-task-form">
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Enter a new task title..."
        />
        <button type="submit">Add Task</button>
      </form>
      <div className="board">
        <DragDropContext onDragEnd={onDragEnd}>
          {Object.entries(columns).map(([columnId, column]) => (
            <div className="column" key={columnId}>
              <h2 className="column-title">{column.name}</h2>
              <Droppable droppableId={columnId}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`task-list ${snapshot.isDraggingOver ? 'dragging-over' : ''}`}
                  >
                    {column.items.map((item, index) => (
                      <Draggable key={item._id} draggableId={item._id} index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`task ${snapshot.isDragging ? 'is-dragging' : ''}`}
                          >
                            <div className="task-title">{item.title}</div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;
