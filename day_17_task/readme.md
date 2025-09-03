# Real-Time Chat Application 🚀

A simple and responsive real-time chat application built with Node.js, Express, Socket.IO, and React. This project allows users to join different chat rooms and communicate instantly with others in the same room.

---

## ✨ Features

-   **Real-time Messaging**: Instant message delivery using WebSockets.
-   **Chat Rooms**: Users can create or join rooms by entering a unique Room ID.
-   **User Identification**: Simple user identification by name.
-   **Clean UI**: A clean and intuitive user interface for a smooth chatting experience.
-   **Auto-Scrolling**: The chat view automatically scrolls to the latest message.
-   **Timestamps**: Each message is timestamped for clarity.

---

## 🛠️ Tech Stack

This project is built using the following technologies:

-   **Backend**:
    -   [Node.js](https://nodejs.org/) - JavaScript runtime environment
    -   [Express.js](https://expressjs.com/) - Web framework for Node.js
    -   [Socket.IO](https://socket.io/) - Library for real-time, bidirectional event-based communication
    -   [CORS](https://www.npmjs.com/package/cors) - Middleware for enabling Cross-Origin Resource Sharing
    -   [Nodemon](https://nodemon.io/) - Utility for auto-restarting the server during development

-   **Frontend**:
    -   [React.js](https://reactjs.org/) - A JavaScript library for building user interfaces
    -   [socket.io-client](https://www.npmjs.com/package/socket.io-client) - Client-side library for Socket.IO
    -   [react-scroll-to-bottom](https://www.npmjs.com/package/react-scroll-to-bottom) - A React component for auto-scrolling

---

## 📂 Project Structure

The project is organized into a `client` directory for the React frontend and a `server` directory for the Node.js backend.





Of course. A good README.md file is essential for any GitHub project. It's the first thing visitors see and should explain what your project does, who it's for, and how to use it.

Here is a complete, well-formatted README.md file for the chat application.

Instructions:
In the root folder of your project (chat-app/), create a new file named README.md.

Copy the entire content below and paste it into that file.

Important: Replace the placeholder https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git with the actual URL of your repository.

Markdown

# Real-Time Chat Application 🚀

A simple and responsive real-time chat application built with Node.js, Express, Socket.IO, and React. This project allows users to join different chat rooms and communicate instantly with others in the same room.


---

## ✨ Features

-   **Real-time Messaging**: Instant message delivery using WebSockets.
-   **Chat Rooms**: Users can create or join rooms by entering a unique Room ID.
-   **User Identification**: Simple user identification by name.
-   **Clean UI**: A clean and intuitive user interface for a smooth chatting experience.
-   **Auto-Scrolling**: The chat view automatically scrolls to the latest message.
-   **Timestamps**: Each message is timestamped for clarity.

---

## 🛠️ Tech Stack

This project is built using the following technologies:

-   **Backend**:
    -   [Node.js](https://nodejs.org/) - JavaScript runtime environment
    -   [Express.js](https://expressjs.com/) - Web framework for Node.js
    -   [Socket.IO](https://socket.io/) - Library for real-time, bidirectional event-based communication
    -   [CORS](https://www.npmjs.com/package/cors) - Middleware for enabling Cross-Origin Resource Sharing
    -   [Nodemon](https://nodemon.io/) - Utility for auto-restarting the server during development

-   **Frontend**:
    -   [React.js](https://reactjs.org/) - A JavaScript library for building user interfaces
    -   [socket.io-client](https://www.npmjs.com/package/socket.io-client) - Client-side library for Socket.IO
    -   [react-scroll-to-bottom](https://www.npmjs.com/package/react-scroll-to-bottom) - A React component for auto-scrolling

---

## 📂 Project Structure

The project is organized into a `client` directory for the React frontend and a `server` directory for the Node.js backend.

├── client/         # React Frontend
│   ├── public/
│   ├── src/
│   └── package.json
│
├── server/         # Node.js Backend
│   ├── server.js
│   └── package.json
│
└── README.md




---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/en/download/) (which includes npm) installed on your system.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)
    cd YOUR_REPO_NAME
    ```

2.  **Set up the Backend Server:**
    Open a terminal and navigate to the `server` directory.

    ```sh
    # Navigate to the server directory
    cd server

    # Install dependencies
    npm install

    # Start the development server (runs on http://localhost:3001)
    npm run dev
    ```
    The server will be running on port `3001`.

3.  **Set up the Frontend Client:**
    Open a **new terminal** and navigate to the `client` directory.

    ```sh
    # Navigate to the client directory
    cd client

    # Install dependencies
    npm install

    # Start the React application (runs on http://localhost:3000)
    npm start
    ```
    Your browser will automatically open to `http://localhost:3000`.

---

## 🎮 How to Use

1.  Open two browser tabs or windows and navigate to `http://localhost:3000`.
2.  In the first tab, enter a **Username** and a **Room ID** (e.g., "dev-room").
3.  Click **"Join A Room"**.
4.  In the second tab, enter a different **Username** but the **same Room ID**.
5.  Click **"Join A Room"**.
6.  You can now start sending messages between the two tabs in real-time!

---
