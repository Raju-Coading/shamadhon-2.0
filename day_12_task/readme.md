✅ To-Do App (with Node Backend)

        A simple To-Do List application with a Node.js + Express backend and an optional React frontend.
        This project demonstrates CRUD operations (Create, Read, Update, Delete) for managing tasks.

📚 Topics Covered

        Node.js + Express basics
        
        REST API routes (GET, POST, PUT, DELETE)
        
        Handling JSON request bodies
        
        React frontend fetching data from backend
        
        Basic state management with useState and useEffect

📦 Installation & Setup
🔹 Backend

        Navigate to backend folder
        
        Install dependencies:
        
        npm install express cors
        
        
        Run the server:
        
        node server.js


Backend runs at 👉 http://localhost:5000/api/tasks

🔹 Frontend (Optional React App)
        
        Navigate to frontend folder
        
        Install dependencies:
        
        npm install
        
        
        Start React app:
        
        npm start


Open 👉 http://localhost:3000 in browser

        ✨ API Endpoints
        1. Get all tasks
        GET /api/tasks
        
        2. Add a new task
        POST /api/tasks


Body (JSON):

{ "title": "New Task" }

3. Update task (toggle completed or edit title)
PUT /api/tasks/:id


Body (JSON):

{ "completed": true }

4. Delete task
DELETE /api/tasks/:id

📄 Example Task
{ "id": 1, "title": "Learn Node.js", "completed": false }

✨ Features
        
        Add new tasks
        
        Mark tasks as complete/incomplete
        
        Delete tasks
        
        Backend API + optional React frontend
        
        🛠 Tech Stack
        
        Backend: Node.js, Express
        
        Frontend: React.js, Tailwind CSS (optional)
        
        Language: JavaScript (ES6)

🚀 Mini Task
        
        Build a To-Do App with Node backend that:
        
        Implements CRUD API for tasks
        
        Stores tasks in memory (no DB required)
        
        Has a simple frontend for interacting with tasks
