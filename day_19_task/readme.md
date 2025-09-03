# Sociogram - A Full-Stack Social Media Platform 📸

Sociogram is a complete, full-stack social media web application built with the MERN stack (MongoDB, Express, React, Node.js). It provides core social networking features, including user authentication, creating and viewing posts, and interacting with content through likes and comments.

---

## ✨ Features

-   **User Authentication**: Secure user registration and login system using JWT (JSON Web Tokens) and password hashing (`bcryptjs`).
-   **Create & View Posts**: Authenticated users can create new posts with an image, title, and body.
-   **Social Dashboard**: A central feed where users can view all posts from other users in chronological order.
-   **Like/Unlike System**: Users can like and unlike posts in real-time.
-   **Commenting**: Users can add comments to any post.
-   **User Profiles**: View your own profile with all your posts or view other users' profiles.
-   **Protected Routes**: Backend API endpoints are protected to ensure only authenticated users can perform actions like creating posts or commenting.

---

## 🛠️ Tech Stack

-   **Frontend**:
    -   [React.js](https://reactjs.org/) (UI Library)
    -   [React Router](https://reactrouter.com/) (for client-side routing)
    -   [React Context API](https://reactjs.org/docs/context.html) (for global state management)
    -   [Axios](https://axios-http.com/) (for making API requests)
-   **Backend**:
    -   [Node.js](https://nodejs.org/) (JavaScript Runtime)
    -   [Express.js](https://expressjs.com/) (Web Framework)
    -   [Mongoose](https://mongoosejs.com/) (Object Data Modeler for MongoDB)
    -   [JSON Web Token (JWT)](https://jwt.io/) (for authentication)
    -   [Bcrypt.js](https://www.npmjs.com/package/bcryptjs) (for password hashing)
-   **Database**:
    -   [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (Cloud-hosted NoSQL database)

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

-   [Node.js](https://nodejs.org/en/download/) (v14 or newer) & npm
-   A free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) account for the database.

### 1. Database Setup

1.  Create a free cluster on **MongoDB Atlas**.
2.  Create a **Database User** and save the username and password.
3.  Whitelist your IP Address (select "Allow Access from Anywhere" for development).
4.  Get your **Connection String** (select "Connect your application").

### 2. Project Installation & Setup


2.  **Setup the Backend (`server`):**
    -   Navigate to the server directory.
        ```sh
        cd server
        ```
    -   Create a `.env` file in the `server` root and add your MongoDB connection string and a JWT secret.
        ```
        # server/.env
        MONGO_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@your-cluster-url/socialDB?retryWrites=true&w=majority
        JWT_SECRET=a_very_secret_key_for_jwt
        ```
    -   Install dependencies and start the server.
        ```sh
        npm install
        npm run dev
        ```
    -   The backend will run on `http://localhost:5000`.

3.  **Setup the Frontend (`client`):**
    -   Open a **new terminal window** and navigate to the client directory.
        ```sh
        cd client
        ```
    -   Install dependencies and start the React app.
        ```sh
        npm install
        npm start
        ```
    -   The frontend will open and run on `http://localhost:3000`.

---

## ⚙️ API Endpoints

The backend API provides the following routes. Routes marked with `(Protected)` require a valid JWT for access.

| Method | Endpoint             | Description                               |
| :----- | :------------------- | :---------------------------------------- |
| `POST` | `/signup`            | Register a new user.                      |
| `POST` | `/signin`            | Log in a user and receive a JWT.          |
| `GET`  | `/allposts`          | **(Protected)** Get all posts for the dashboard. |
| `POST` | `/createpost`        | **(Protected)** Create a new post.        |
| `GET`  | `/myposts`           | **(Protected)** Get posts by the logged-in user.|
| `PUT`  | `/like`              | **(Protected)** Like a post.              |
| `PUT`  | `/unlike`            | **(Protected)** Unlike a post.            |
| `PUT`  | `/comment`           | **(Protected)** Add a comment to a post.  |
| `GET`  | `/user/:id`          | **(Protected)** Get a user's profile and posts. |

---

## 🎮 How to Use

1.  Navigate to `http://localhost:3000`.
2.  Click on **Signup** to create a new account.
3.  After signing up, you will be redirected to the **Signin** page. Log in with your new credentials.
4.  You will be taken to the **Dashboard**, where you can see posts from all users.
5.  Click on **Create Post** in the navbar to create your own post (you'll need a public image URL).
6.  Interact with posts by clicking the heart icon to **like/unlike** or by adding a **comment**.
7.  Click on **Profile** to see all of your posts.
