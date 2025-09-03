# Trello Clone - Drag & Drop Project Management Board 📋

This is a simple, clean, and functional clone of Trello's core functionality. It's a Kanban-style project management board that allows users to create tasks and manage their workflow by moving them across different status columns using a smooth drag-and-drop interface.

The application state is persisted in a MongoDB database, making it a complete full-stack MERN-like application (MongoDB, Express, React, Node.js).

---

## ✨ Features

-   **Create Tasks**: Easily add new tasks to the "To Do" column.
-   **Kanban Board**: View all tasks organized in three columns: "To Do", "In Progress", and "Done".
-   **Drag & Drop**: Intuitively move tasks between columns to update their status. This functionality is powered by `react-beautiful-dnd`.
-   **Data Persistence**: All tasks and their statuses are saved to a MongoDB database, so your data is safe even after a refresh.
-   **RESTful API**: A well-structured backend API built with Node.js and Express to manage task data.

---

## 🛠️ Tech Stack

-   **Frontend**:
    -   [React.js](https://reactjs.org/)
    -   [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) for drag-and-drop functionality
    -   [axios](https://axios-http.com/) for making API requests
-   **Backend**:
    -   [Node.js](https://nodejs.org/)
    -   [Express.js](https://expressjs.com/)
    -   [Mongoose](https://mongoosejs.com/) for object data modeling with MongoDB
-   **Database**:
    -   [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (Cloud Database)

---

## 🚀 Getting Started

Follow these steps to set up and run the project on your local machine.

### Prerequisites

-   [Node.js](https://nodejs.org/en/download/) (v14 or newer) & npm
-   A free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) account

### 1. Database Setup (MongoDB Atlas)

1.  Create a free cluster on MongoDB Atlas.
2.  Create a new Database User with a secure password.
3.  Whitelist your IP Address (or allow access from anywhere: `0.0.0.0/0`).
4.  Get your **Connection String**. It will look like `mongodb+srv://<username>:<password>@...`.

### 2. Project Installation

2.  **Setup the Backend:**
    -   Navigate to the server directory.
        ```sh
        cd server
        ```
    -   Create a `.env` file in the `server` directory and add your MongoDB connection string.
        ```
        # server/.env
        MONGO_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@your-cluster-url/trelloDB?retryWrites=true&w=majority
        ```
    -   Install backend dependencies and start the server.
        ```sh
        npm install
        npm run dev
        ```
    -   The backend will be running on `http://localhost:5001`.

3.  **Setup the Frontend:**
    -   Open a **new terminal window** and navigate to the client directory from the root folder.
        ```sh
        cd client
        ```
    -   Install frontend dependencies and start the React app.
        ```sh
        npm install
        npm start
        ```
    -   The frontend will open and run on `http://localhost:3000`.

---

## ⚙️ API Endpoints

The backend provides the following RESTful API endpoints to manage tasks:

| Method | Endpoint         | Description                   |
| :----- | :--------------- | :---------------------------- |
| `GET`  | `/api/tasks`     | Fetches all tasks.            |
| `POST` | `/api/tasks`     | Creates a new task.           |
| `PUT`  | `/api/tasks/:id` | Updates a task's status.      |

---

## 🎮 How to Use

1.  Navigate to `http://localhost:3000` in your browser.
2.  Use the input field at the top to type a new task title and click "Add Task".
3.  The new task will appear in the "To Do" column.
4.  Click and drag the task to the "In Progress" or "Done" column to update its status.
5.  Refresh the page – your tasks will still be there!
